import React from 'react';
import PropTypes from 'prop-types';
import { Radio, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    buttonFilterRoot: {
        height: 44,
        boxShadow: 'none',
        color: '#666666',
        backgroundColor: '#fff',
        borderBottom: '1px solid #d8d8d8',
        borderRadius: 0,
        paddingLeft: 11,
        paddingRight: 20,
        width: '100%',
        fontSize: 16,
        justifyContent: 'space-between',
    },
    groupTitle: {
        fontWeight: 500,
        color: '#323131',
        fontSize: 15,
    },
    checked: {
        backgroundColor: '#39f',
        borderColor: '#39f',
        color: '#fff',
    },
    primary: {
        fontSize: 15,
        fontWeight: 500,
    },
});

function FilterRadioList({ value, name, onChange, options = [], resetOnSameSelected = true, emptyValue = null }) {
    const classes = useStyles();

    const handleClick = ({ value: optionValue }) => () => {
        if(resetOnSameSelected && optionValue === value) {
            onChange(name, emptyValue)
        } else {
            onChange(name, optionValue);
        }
    };

    return (
        <div>
            {options.map(option => {
                const { value: optionValue, label, listItemDaId, checkboxDaId } = option;
                return (
                    <ListItem
                        key={optionValue}
                        className={classes.buttonFilterRoot}
                        aria-label="Delete"
                        onClick={handleClick(option)}
                        da-id={listItemDaId}
                        button
                        dense
                    >
                        <Radio
                            color="primary"
                            checked={value === optionValue}
                            value={optionValue}
                            tabIndex={-1}
                            disableRipple
                            da-id={checkboxDaId}
                        />
                        <ListItemText
                            classes={{ primary: classes.primary }}
                            primary={label}
                            className={classes.groupTitle}
                        />
                    </ListItem>
                );
            })}
        </div>
    );
}

FilterRadioList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    onChange: PropTypes.func,
    resetOnSameSelected: PropTypes.bool,
    emptyValue: PropTypes.any,
};

export default FilterRadioList;
