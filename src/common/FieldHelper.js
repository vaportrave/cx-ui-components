import React from 'react';
import PropTypes from 'prop-types';
import { Warning } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import cn from 'classnames';

const useStyles = makeStyles({
    errorMessage: {
        display: 'flex',
    },
    errorIcon: {
        color: '#f22053',
        marginRight: 6,
        fontSize: 20,
    },
    warningIcon: {
      color: '#FF8301',
   }
});

function FieldHelper({ error, warning }) {
    if (!error && !warning) {
        return null;
    }
    const classes = useStyles();
    return (
        <span className={classes.errorMessage}>
            <Warning className={cn(classes.errorIcon, { [classes.warningIcon]: !!warning && !error })} />
            {error || warning}
        </span>
    );
}

FieldHelper.propTypes = {
    error: PropTypes.string,
};

export default FieldHelper;
