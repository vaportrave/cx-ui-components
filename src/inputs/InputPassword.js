import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Info from '@material-ui/icons/Info';
import Warn from '@material-ui/icons/Warning';
import Tooltip from '@material-ui/core/Tooltip';
import Weakness from './Weakness';

const styles = {
  infoMessage: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorMessage: {
    display: 'flex',
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
  errorIcon: {
    color: '#f22053',
    marginRight: 6,
    fontSize: 20,
  },
  passwordMessage: {
    color: '#666',
    fontFamily: 'HKNova',
    fontSize: '13px',
    lineHeight: '19px',
    marginTop: 12
  },
  inputHeight: {
    height: 44,
  },
};

class InputPassword extends PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    passwordMessage: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    weaknessStatuses: PropTypes.array,
  };

  handleChange = ({ target: { value } }) => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const {
      classes,
      label,
      value,
      placeholder,
      info,
      error,
      weaknessStatuses,
      passwordMessage,
      onBlur,
      name,
      ...rest
    } = this.props;
    return (
      <React.Fragment>
        <TextField
          name={name}
          type='password'
          onChange={this.handleChange}
          onBlur={onBlur}
          value={value}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          label={
            <span className={classes.infoMessage}>
              {label}
              {info &&
                <Tooltip title={info} placement="right-start">
                  <Info className={classes.infoIcon} />
                </Tooltip>}
            </span>
          }
          InputProps={{
            className: classes.inputHeight,
            ...rest,
          }}
          placeholder={placeholder}
          error={!!error}
          helperText={error &&
            <span className={classes.errorMessage}>
              <Warn className={classes.errorIcon} />
              {error}
            </span>}
        />
        {weaknessStatuses && <Weakness value={value} weaknessStatuses={weaknessStatuses} />}
        <div className={classes.passwordMessage}>{passwordMessage}</div>
      </React.Fragment>

    );
  }
}

export default withStyles(styles)(InputPassword);
