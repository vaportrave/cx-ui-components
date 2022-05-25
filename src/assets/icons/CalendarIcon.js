import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

/* eslint-disable max-len */
const Icon = props => (
    // eslint-disable-next-line react/destructuring-assignment
    <SvgIcon className={props.className}>
        <path d="M22 17h-5.5v5H22L22 17zM22 15l0-5H2l0 5h5.5v-5h2v5h5v-5h2v5C16.5 15 22 15 22 15zM2 17l0 5c0 0 2.4 0 5.5 0v-5H2L2 17zM9.5 17v5h5v-5H9.5zM20 3h2c1.1 0 2 0.9 2 2v17c0 1.1-0.9 2-2 2 0 0 0 0 0 0H2c-1.1 0-2-0.9-2-2 0 0 0 0 0 0V5c0-1.1 0.9-2 2-2h2V1c0-0.6 0.4-1 1-1 0.6 0 1 0.4 1 1v2h12V1c0-0.6 0.4-1 1-1 0.6 0 1 0.4 1 1V3zM2 8h20V5C22 5 2 5 2 5S2 6.2 2 8z" />
    </SvgIcon>
);
/* eslint-enable max-len */

Icon.propTypes = {
    className: PropTypes.string,
};

export default Icon;
