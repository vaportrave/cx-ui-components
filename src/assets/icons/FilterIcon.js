import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

/* eslint-disable max-len */
const Icon = (props) => (
    <SvgIcon className={props.className}>
        <path d="M7.8,6C7.4,4.3,5.8,3,4,3C1.8,3,0,4.8,0,7c0,2.2,1.8,4,4,4c1.8,0,3.4-1.3,3.8-3H24V6H7.8z M4,9C2.9,9,2,8.1,2,7 c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C6,8.1,5.1,9,4,9z M12.5,12.7c1.8,0,3.4,1.3,3.8,3h7.6v2h-7.6c-0.4,1.7-2,3-3.8,3s-3.4-1.3-3.8-3 H1.1v-2h7.7C9.1,14,10.7,12.7,12.5,12.7z M12.5,18.7c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C10.5,17.8,11.4,18.7,12.5,18.7z" />
    </SvgIcon>
);
/* eslint-enable max-len */

Icon.propTypes = {
    className: PropTypes.string,
};

export default Icon;
