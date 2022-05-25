import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Done from '@material-ui/icons/Done';
import Remove from '@material-ui/icons/Remove';
import toggleArray from '../utils/toggleArray';

const styles = {
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
    empty: {
        width: 20,
        height: 20,
        borderRadius: 4,
        backgroundColor: '#fff',
        border: '1px solid #d8d8d8',
        display: 'inline-block',
        position: 'relative',
    },
    checked: {
        backgroundColor: '#39f',
        borderColor: '#39f',
        color: '#fff',
    },
    checkBoxColor: {
        width: 16,
        height: 16,
        position: 'absolute',
        top: 1,
        left: 1,
        color: '#fff',
    },
    primary: {
      fontSize: 15,
      fontWeight: 500,
    },
};


class FilterList extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        options: PropTypes.arrayOf(PropTypes.object),
        value: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
        onChange: PropTypes.func,
        isSetAll: PropTypes.bool,
    };

    handleClick = (value) => () => {
        const { value: selectedItems, onChange } = this.props;
        const newSelectedItems = toggleArray(selectedItems, value);
        onChange(newSelectedItems);
    };

    handleClickAll = () => {
        const { value, options, onChange } = this.props;
        if (value.length === options.length) {
            onChange([]);
            return;
        }
        const allValues = options.map(({ value }) => value);
        onChange(allValues);
    };

    render() {
        const {
            classes,
            options,
            value,
            isSetAll = false,
        } = this.props;

        const isAllChecked = options.length === value.length;
        const isIndeterminate = !isAllChecked && value.length > 0;

        return (
            <div>
                {isSetAll &&
                <ListItem
                    key="ALL"
                    className={classes.buttonFilterRoot}
                    aria-label="Delete"
                    onClick={this.handleClickAll}
                    button
                    dense
                >
                    <Checkbox
                        checked={isAllChecked}
                        indeterminate={isIndeterminate}
                        tabIndex={-1}
                        disableRipple
                        icon={<div className={classes.empty} />}
                        checkedIcon={
                            <div className={cn(classes.empty, classes.checked)}>
                                <Done className={classes.checkBoxColor} />
                            </div>
                        }
                        indeterminateIcon={
                            <div className={cn(classes.empty, classes.checked)}>
                                <Remove className={classes.checkBoxColor} />
                            </div>
                        }
                    />
                    <ListItemText
                        primary="All"
                        className={classes.groupTitle}
                    />
                </ListItem>}
                {options.map(({ value: optionValue, label, listItemDaId, checkboxDaId }) => (
                    <ListItem
                        key={optionValue}
                        className={classes.buttonFilterRoot}
                        aria-label="Delete"
                        onClick={this.handleClick(optionValue)}
                        da-id={listItemDaId}
                        button
                        dense
                    >
                        <Checkbox
                            checked={value.includes(optionValue)}
                            tabIndex={-1}
                            disableRipple
                            da-id={checkboxDaId}
                            icon={<div className={classes.empty} />}
                            checkedIcon={
                                <div className={cn(classes.empty, classes.checked)}>
                                    <Done className={classes.checkBoxColor} />
                                </div>
                            }
                        />
                        <ListItemText
                            classes={{ primary: classes.primary }}
                            primary={label}
                            className={classes.groupTitle}
                        />
                    </ListItem>
                ))}
            </div>
        );
    }
}

export default withStyles(styles)(FilterList);
