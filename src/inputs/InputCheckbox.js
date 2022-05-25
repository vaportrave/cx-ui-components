import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {FormControlLabel, Checkbox, FormHelperText} from '@material-ui/core';
import {Done, Warning as Warn} from '@material-ui/icons';

const styles = {
    root: {
        margin: 0,
        paddingTop: 0,
    },
    empty: {
        width: 20,
        height: 20,
        borderRadius: 4,
        backgroundColor: '#fff',
        border: '1px solid #d8d8d8',
        display: 'inline-block',
        position: 'relative',
    },
    disabledEmpty: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    checked: {
        backgroundColor: '#39f',
        borderColor: '#39f',
        color: '#fff',
    },
    checkBoxColor: {
        width: 16,
        height: 16,
        position: 'absolute',
        top: 1,
        left: 1,
        color: '#fff',
    },
    error: {
        margin: 0,
    },
    errorMessage: {
        display: 'flex',
        alignItems: 'center',
    },
    errorIcon: {
        color: '#f22053',
        marginRight: 6,
        fontSize: 20,
    },
};


class InputCheckbox extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        label: PropTypes.string,
        value: PropTypes.bool,
        onChange: PropTypes.func,
        className: PropTypes.string,
        formControlLabelClasses: PropTypes.object,
    };

    handleChange = (e) => {
        const { onChange } = this.props;
        onChange(e);
    };

    render() {
        const { classes, label, value, error, onChange, className, formControlLabelClasses, disabled, ...rest } = this.props;

        return (
            <>
                <FormControlLabel
                    className={cn(classes.root, className)}
                    classes={formControlLabelClasses}
                    control={
                        <Checkbox
                            color="primary"
                            checked={!!value}
                            onChange={this.handleChange}
                            icon={<div className={cn(classes.empty, disabled && classes.disabledEmpty)} />}
                            checkedIcon={
                                <div className={cn(classes.empty, classes.checked)}>
                                    <Done className={classes.checkBoxColor} />
                                </div>
                            }
                            disabled={disabled}
                            {...rest}
                        />
                    }
                    label={label}
                />
                {error &&
                <FormHelperText className={classes.error}>
                    <span className={classes.errorMessage}>
                        <Warn className={classes.errorIcon} />
                        {error}
                    </span>
                </FormHelperText>}
            </>
        );
    }
}

export default withStyles(styles)(InputCheckbox);
