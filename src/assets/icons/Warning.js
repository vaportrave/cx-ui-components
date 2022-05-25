/* eslint-disable max-len */
/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';

function Warning() {
    return (
        <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <path
                    d="M18.01 16.647c1.099 0 1.547-.781 1.004-1.74L10.986.74c-.544-.96-1.429-.959-1.972 0L.986 14.907c-.544.96-.088 1.74 1.005 1.74h16.018zM10 13.765c-.585 0-1.059-.47-1.059-1.06 0-.584.47-1.058 1.059-1.058.585 0 1.059.47 1.059 1.059 0 .585-.47 1.059-1.059 1.059zm0-3.177a1.065 1.065 0 0 1-1.059-1.06V6.413c0-.585.47-1.06 1.059-1.06.585 0 1.059.484 1.059 1.06V9.53c0 .585-.47 1.06-1.059 1.06z"
                    id="aWarning"
                />
            </defs>
            <use
                fill="#FFF"
                xlinkHref="#aWarning"
                transform="translate(0 .75)"
                fillRule="evenodd"
            />
        </svg>
    );
}

export default Warning;
