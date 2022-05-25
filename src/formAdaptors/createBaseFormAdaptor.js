import React, { useCallback } from 'react';
import { getIn } from 'formik';

const createBaseFormAdaptor = (Component, options = {}) => ({ field, meta, form, onChange, onBlur, mask, disableTouchedCheck, ...rest }) => {

    const { isCheckbox = false, changeValueGetter } = options;

    const handleChange = useCallback((val, event) => {
        const actualVal = changeValueGetter ? changeValueGetter(val) : val;

        if (!mask || mask.test(actualVal)) {
          form.setFieldValue(field.name, actualVal);

          onChange && onChange(actualVal, event);
        }
    }, [mask, onChange, options.changeValueGetter, form.setFieldValue, field.name])

    const handleBlur = useCallback(e => {
        field.onBlur(e);

        onBlur && onBlur(e, form, field);
    }, [onBlur, field, form])

    const error = (disableTouchedCheck || getIn(form.touched, field.name))
        ? getIn(form.errors, field.name) : '';

    return (
        <Component
            {...rest}
            name={field.name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={field.value}
            error={error}
            checked={isCheckbox ? field.value : undefined}
        />
    );
}

export default createBaseFormAdaptor;
