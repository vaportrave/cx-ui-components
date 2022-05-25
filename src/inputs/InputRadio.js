import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const styles = {
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
};


class InputRadio extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        label: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.object),
        onChange: PropTypes.func,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    };

    handleChange = ({target: {value}}) => {
        const { onChange } = this.props;
        onChange(value);
    };

    render() {
        const {
            classes,
            options,
            value,
            label,
            ...rest
        } = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    {label &&
                        <FormLabel component="legend">{label}</FormLabel>}
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        className={classes.group}
                        value={value}
                        onChange={this.handleChange}
                        {...rest}
                    >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.id || option.value}
                        control={<Radio color="primary" />}
                        label={option.label}
                        value={option.value}
                    />
                ))}
                    </RadioGroup>
                </FormControl>

            </div>
        );
    }
}

export default withStyles(styles)(InputRadio);
