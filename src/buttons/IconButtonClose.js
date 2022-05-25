import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

function IconButtonClose({ onClick, className, iconClassName, ariaLabel = 'Close', ...rest }) {
    return (
        <IconButton
            aria-label={ariaLabel}
            className={className}
            onClick={onClick}
            {...rest}
        >
            <Close className={iconClassName} />
        </IconButton>
    );
}

IconButtonClose.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    ariaLabel: PropTypes.string,
};

export default IconButtonClose;
