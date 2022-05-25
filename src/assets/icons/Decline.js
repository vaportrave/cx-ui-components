/* eslint-disable max-len */
/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';

function Decline() {
    return (
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <path
                    d="M9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zM2.25 9c0-3.708 3.042-6.75 6.75-6.75 1.458 0 2.808.45 3.906 1.242l-9.414 9.414A6.642 6.642 0 0 1 2.25 9zM9 15.75a6.642 6.642 0 0 1-3.906-1.242l9.414-9.414C15.3 6.174 15.75 7.524 15.75 9c0 3.708-3.042 6.75-6.75 6.75z"
                    id="aDecline"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="bDecline" fill="#fff">
                    <use xlinkHref="#aDecline" />
                </mask>
                <use fill="#000" fillRule="nonzero" xlinkHref="#aDecline" />
                <g mask="url(#bDecline)" fill="#FFF">
                    <path d="M0 0h18v18H0z" />
                </g>
            </g>
        </svg>
    );
}

export default Decline;
