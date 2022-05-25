import React from 'react';
import PropTypes from 'prop-types';
import { generateRandomString } from '../../utils/generateRandomString';
const TickIcon = ({ fill, color }) => {
    const id = generateRandomString(5);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24" height="24" viewBox="0 0 24 24"
        >
            <defs>
                <circle
                    id={`a${id}`} cx="12" cy="12"
                    r="12"
                />
                <path id={`c${id}`} d="M4.455 8.432L1.114 5.09 0 6.205l4.455 4.454L14 1.114 12.886 0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id={`b${id}`} fill="#fff">
                    <use xlinkHref={`#a${id}`} />
                </mask>
                <use fill={fill} xlinkHref={`#a${id}`} />
                <g fill={fill} mask={`url(#b${id})`}>
                    <path d="M0 0h24v24H0z" />
                </g>
                <g transform="translate(5 6.75)">
                    <mask id={`d${id}`} fill="#fff">
                        <use xlinkHref={`#c${id}`} />
                    </mask>
                    <use fill={fill} xlinkHref={`#c${id}`} />
                    <g fill={color} mask={`url(#d${id})`}>
                        <path d="M0-1.75h14v14H0z" />
                    </g>
                </g>
            </g>
        </svg>
    );
};

TickIcon.propTypes = {
    fill: PropTypes.string,
    color: PropTypes.string,
};

TickIcon.defaultProps = {
    color: '#FFF',
};


export default TickIcon;
