import React from "react";
import Warn from '@material-ui/icons/Warning';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    errorIcon: {
        color: '#f22053',
        marginRight: 6,
        fontSize: 20,
    },
    errorMessage: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 13,
        lineHeight: '19px',
        color: 	'#666',
    }
}));

const InputErrorMessage = ({ children, showIcon = true, daId, }) => {
  const classes = useStyles();

  return (
      <span className={classes.errorMessage} da-id={daId}>
          { showIcon && <Warn className={classes.errorIcon} />}
          {children}
      </span>
  );
};

InputErrorMessage.propTypes = {
    children: PropTypes.node,
    showIcon: PropTypes.bool,
    daId: PropTypes.string,
};

export default InputErrorMessage;
