import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { WarningRounded } from '@material-ui/icons';
import cx from 'classnames';

const useStyles = makeStyles(({ palette }) => ({
    root: {
        display: 'flex',
        marginBottom: 20,
    },
    contained: {
        backgroundColor: '#FDE8E9',
        border: `1px solid ${palette.error.main}`,
        padding: '15px 20px',
    },
    errorText: {
        marginTop: 2,
        marginLeft: 12,
        lineHeight: '22px',
    },
    icon: {
        flexShrink: 0,
    },
}));

function FormError({ message, variant = 'text', className }) {
    const classes = useStyles();

    if (!message) {
        return null;
    }

    return (
        <div className={cx(
            classes.root,
            { [classes.contained]: variant === 'contained' },
            className,
        )}>
            <WarningRounded className={classes.icon} color="error" />
            <Typography
                variant="caption"
                color="error"
                className={classes.errorText}
                component="span"
            >
                {message}
            </Typography>
        </div>
    );
}

FormError.propTypes = {
    message: PropTypes.string.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'contained']),
};

export default FormError;
