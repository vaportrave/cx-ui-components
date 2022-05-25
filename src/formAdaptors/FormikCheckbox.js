import InputCheckbox from '../inputs/InputCheckbox';
import createBaseFormAdaptor from './createBaseFormAdaptor';

const FormikCheckbox = createBaseFormAdaptor(InputCheckbox, {
    changeValueGetter: event => event.target.checked,
    isCheckbox: true
});

export default FormikCheckbox;
