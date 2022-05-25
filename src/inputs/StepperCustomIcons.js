import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TickIcon from '../assets/icons/TickIcon';

const iconStyles = () => ({
    icon: {
        marginTop: 3,
        height: 12,
        width: 12,
        borderRadius: '50%',
        border: 'solid 2px',
    },
    tickIcon: {
        marginTop: 3,
        '& svg': {
            width: 16,
            height: 16
        }
    },
    active: {
        borderColor: '#3399ff',
    },
    notActive: {
        borderColor: '#b9b9b9',
    },
});

const CustomStepIcon = ({ completed, active, classes }) => {
    if (completed) {
        return (
            <span className={classes.tickIcon} >
                <TickIcon fill="#80BC42" />
            </span>
        );
    }
    if (active) {
        return <div className={cx(classes.active, classes.icon)} />;
    }
    return <div className={cx(classes.notActive, classes.icon)} />;
};

CustomStepIcon.propTypes = {
    completed: PropTypes.bool,
    active: PropTypes.bool,
    classes: PropTypes.object,
};

const StepIcon = withStyles(iconStyles)(CustomStepIcon);

const defaultIconStyles = {
    width: 17,
    height: 17,
    fontFamily: 'HKNova',
    border: '1px solid',
    borderRadius: '50%',
    fontSize: '13px',
    textAlign: 'center',
    fontWeight: 500,
    lineHeight: '17px',
    marginTop: '3px',
};

const numberIconStyles = () => ({
    defaultIcon: {
        ...defaultIconStyles,
        color: '#000',
        borderColor: '#D8D8D8',
        fontWeight: 200,
    },
    activeIcon: {
        ...defaultIconStyles,
        color: '#3399FF',
        borderColor: '#3399FF'
    },
    completedIcon: {
        ...defaultIconStyles,
        color: '#fff',
        backgroundColor: '#82BC2F',
        borderColor: '#82BC2F'
    },
});

const CustomNumberIcon = ({ active, completed, classes, step }) => {
    return <div className={cx(
        classes.defaultIcon,
        {
            [classes.activeIcon]: active,
            [classes.completedIcon]: completed
        }
    )}>{step}</div>
};

CustomNumberIcon.propTypes = {
    completed: PropTypes.bool,
    active: PropTypes.bool,
    classes: PropTypes.object,
    step: PropTypes.number,
};

const NumberStepIcon = withStyles(numberIconStyles)(CustomNumberIcon);


export { StepIcon, NumberStepIcon };
