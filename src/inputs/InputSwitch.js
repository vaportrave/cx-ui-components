import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  switchBase: {
    marginLeft: -5,
    '&$checked': {
      color: theme.palette.common.white,
      transform: 'translateX(31px)',
      '& + $track': {
        backgroundColor: '#82BC2F',
        opacity: 1,
      },
      '&:hover': {
        backgroundColor: 'inherit'
      },
    },
    '&:hover': {
      backgroundColor: 'inherit'
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  checked: {
    transform: 'translateX(31px)',
    '& + $track': {
      opacity: 1,
      border: 'none',
    },
  },
  track: {
    borderRadius: 15,
    width: 60,
    height: 30,
    marginTop: -13,
    backgroundColor: '#B9B9B9',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  thumb: {
    width: 22,
    height: 22,
    marginTop: 2,
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 13,
    color: '#fff',
    fontFamily: 'HKNova'
  },
  label: {
    marginRight: 0,
    marginLeft: 0,
  },
  root: {
    width: 'inherit',
    paddingTop: 20,
    padding: 0,
  },
});


class InputSwitch extends React.Component {
  handleChange = (event) => {
    const { onChange } = this.props;
    onChange(event);
  };

  render() {
    const { classes, checked, value, label, disabled, daId, inputDaId, inputProps = {}, ...custom } = this.props;
    return (
      <FormControlLabel
        da-id={daId}
        control={
          <Switch
            {...custom}
            classes={{
              switchBase: classes.switchBase,
              track: classes.track,
              thumb: classes.thumb,
              checked: classes.checked,
              root: classes.root,
            }}
            disableRipple
            checked={checked}
            value={value}
            onChange={this.handleChange}
            inputProps={{
              ...inputProps,
              'da-id': inputDaId,
            }}
          />
        }
        classes={{ root: classes.label }}
        disabled={disabled}
        label={label}
      />
    )
  }
}

InputSwitch.propTypes = {
  classes: PropTypes.object,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  inputDaId: PropTypes.string,
  daId: PropTypes.string,

};

export default withStyles(styles)(InputSwitch);

