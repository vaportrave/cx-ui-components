import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

/* eslint-disable max-len */
const Icon = (props) => (
    <SvgIcon className={props.className}>
        <path d="M0,22.9h24L12,1.7L0,22.9z M13.4,20.1h-2.8v-2.8h2.8C13.4,17.2,13.4,20.1,13.4,20.1z M13.4,15.8h-2.8v-5.6h2.8 L13.4,15.8L13.4,15.8z" />
    </SvgIcon>
);
/* eslint-enable max-len */

Icon.propTypes = {
    className: PropTypes.string,
};

export default Icon;
