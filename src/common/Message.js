import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SuccessIcon from '../assets/icons/SuccessIcon';
import ErrorIcon from '../assets/icons/ErrorIcon';
import InfoIcon from '../assets/icons/InfoIcon';

const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
const ERROR_MESSAGE = 'ERROR_MESSAGE';
const INFO_MESSAGE = 'INFO_MESSAGE';

const styles = {
  errorIcon: {
    color: '#F22053',
    fontSize: 30,
    paddingBottom: 6,
    paddingRight: 5,
  },
  infoIcon: {
    color: '#3399FF',
    fontSize: 30,
  },
  successIcon: {
    color: '#82BC2F',
    fontSize: 30,
  },
  '@keyframes disappear': {
    '0%':  { opacity: 0 },
    '90%': { opacity: 0.8 },
    '100%': { opacity: 0, display: 'none', }
  },
  holder: {
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
    animationName: 'disappear',
    animationDuration: '2000ms',
    animationFillMode: 'forwards',
  },
  msg: {
    padding: '0 20px',
    minWidth: '260px',
    boxSizing: 'border-box',
    top: '100%',
    left: '20%',
    background: '#fff',
    marginTop: '10px',
    width: '290px',
    position: 'static',
    boxShadow: '0 6px 4px 0 rgba(0, 0, 0, 0.22)',
    backgroundColor: '#ffffff',
    border: 'solid 1px #d8d8d8',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 6,
    zIndex: 99,
  },
  text: {
    textTransform: 'uppercase',
  },
};

class Message extends PureComponent {
  static propTypes = {
    message: PropTypes.string,
    messageType: PropTypes.string,
    hideMessage: PropTypes.func,
    classes: PropTypes.object,
  };

  renderIcon = () => {
    const { messageType, classes } = this.props;
    switch (messageType) {
      case SUCCESS_MESSAGE:
        return <SuccessIcon className={classes.successIcon} />;
      case ERROR_MESSAGE:
        return <ErrorIcon className={classes.errorIcon} />;
      case INFO_MESSAGE:
        return <InfoIcon className={classes.infoIcon} />;
      default:
        return '';
    }
  };

  render() {
    const { message, classes } = this.props;

    return (
      <div
        className={classes.holder}
        onClick={this.props.hideMessage}
      >
        <div className={classes.msg}>
          {this.renderIcon()}
          <Typography variant="h5" className={classes.text}>{message}</Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Message);

