import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    cellWrapper: {
        borderLeft: '1px solid #d8d8d8',
        padding: '0 10px 0 20px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    heading: {
        marginBottom: -3,
    },
}));

function InfoCell({
    heading, value, className, valueClassName, noWrap = true,
}) {
    const classes = useStyles();
    return (
        <div
            className={`${classes.cellWrapper} ${className}`}
            title={value}
        >
            <Typography
                variant="h6"
                className={classes.heading}
            >
                {heading}
            </Typography>
            <Typography
                noWrap={noWrap}
                variant="body1"
                className={valueClassName}
            >
                {value}
            </Typography>
        </div>
    );
}

InfoCell.propTypes = {
    noWrap: PropTypes.bool,
    classes: PropTypes.object,
    heading: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    className: PropTypes.string,
    cellClassName: PropTypes.string,
};

export default InfoCell;
