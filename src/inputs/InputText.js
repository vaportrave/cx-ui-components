import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
  import TextField from '@material-ui/core/TextField';
import Info from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import cn from 'classnames';
import { FieldHelper } from '../common';

const styles = {
    infoMessage: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoIcon: {
        color: '#666',
        fontSize: 15,
        cursor: 'pointer',
        '&:hover': {
            color: '#3399ff',
        },
    },
    inputHeight: {
        height: 44,
    },
    inputAutoHeight: {
        height: 'unset',
    },
    warningInput: {
      '& fieldset': {
        borderColor: '#FF8301 !important'
      }
    }
};


class InputText extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        label: PropTypes.string,
        type: PropTypes.string,
        info: PropTypes.string,
        error: PropTypes.string,
        onChange: PropTypes.func,
        autoHeight: PropTypes.bool,
    };

    handleChange = event => {
      const { target: { value } } = event;
        const { onChange } = this.props;
        onChange(value, event);
    };

    render() {
        const {
            classes,
            label,
            info,
            error,
            warning,
            type = 'text',
            autoHeight,
            InputProps = {},
            InputLabelProps = {},
            ...rest
        } = this.props;

        return (
            <TextField
                type={type}
                variant="outlined"
                InputProps={{
                  className: cn(classes.inputHeight, { [classes.inputAutoHeight]: autoHeight, [classes.warningInput]: !!warning && !error }),
                  ...InputProps,
                }}
                InputLabelProps={{ shrink: true, ...InputLabelProps }}
                label={
                    <span className={classes.infoMessage}>
                        {label}
                        {info &&
                            <Tooltip
                                title={info}
                                placement="right-start"
                            >
                                <Info className={classes.infoIcon} />
                            </Tooltip>}
                    </span>
                }
                error={!!error || !!warning}
                helperText={<FieldHelper error={error} warning={warning} />}
                {...rest}
                onChange={this.handleChange}
            />
        );
    }
}

export default withStyles(styles)(InputText);
