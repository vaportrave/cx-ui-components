import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

/* eslint-disable max-len */
const Icon = (props) => (
    <SvgIcon className={props.className}>
        <path d="M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10s10-4.5,10-10C20,4.5,15.5,0,10,0z M9.9,5c0.7,0,1.4,0.6,1.4,1.4 c0,0.7-0.6,1.4-1.4,1.4S8.5,7.1,8.5,6.4C8.5,5.6,9.2,5,9.9,5z M11.9,14.6c0,0.2-0.2,0.4-0.4,0.4H8.5c-0.2,0-0.4-0.2-0.4-0.4v-0.8 c0-0.2,0.2-0.4,0.4-0.4H9V9.9H8.5c-0.2,0-0.4-0.2-0.4-0.4V8.7c0-0.2,0.2-0.4,0.4-0.4h2.2c0.2,0,0.4,0.2,0.4,0.4v4.7h0.5 c0.2,0,0.4,0.2,0.4,0.4V14.6z" />
    </SvgIcon>
);
/* eslint-enable max-len */

Icon.propTypes = {
    className: PropTypes.string,
};

export default Icon;
