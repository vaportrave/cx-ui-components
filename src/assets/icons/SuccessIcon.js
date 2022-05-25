import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

/* eslint-disable max-len */
const Icon = (props) => (
    <SvgIcon className={props.className}>
        <path d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M7.8,14.6L4,10.8l1-1l2.9,2.9L15,5.4l1,1 L7.8,14.6z" />
    </SvgIcon>
);
/* eslint-enable max-len */

Icon.propTypes = {
    className: PropTypes.string,
};

export default Icon;
