import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ListItem from '@material-ui/core/ListItem';


const styles = {
    buttonFilterRoot: {
        height: 44,
        boxShadow: 'none',
        color: '#666666',
        backgroundColor: '#fff',
        borderBottom: '1px solid #d8d8d8',
        borderRadius: 0,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        justifyContent: 'space-between',
    },
    filterCount: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    arrow: {
        fontSize: 18,
        color: '#8d8d92',
        margin: '0 0 2px 12px',
    },
    subtitle: {
      fontSize: 15,
      fontWeight: 500,
      color: '#666',
      textTransform: 'none',
    },
};


class FilterGroups extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        options: PropTypes.arrayOf(PropTypes.object),
        setActiveGroup: PropTypes.func,
    };

    handleClick = (value) => () => this.props.setActiveGroup(value);

    render() {
        const { classes, options } = this.props;

        return (
            <div>
                {options.map(({ value, label, totalItems, selectedItems, daId, customLabel }) => {
                    let rightLabel;
                    if (customLabel) {
                        rightLabel = customLabel;
                    } else {
                        rightLabel = selectedItems && selectedItems > 0 && totalItems !== selectedItems
                            ? ` ${selectedItems}`
                            : 'All'
                    }
                    return (<ListItem
                                key={value}
                                className={classes.buttonFilterRoot}
                                aria-label="Delete"
                                onClick={this.handleClick(value)}
                                button
                                dense
                                da-id={daId}
                            >
                                <Typography variant="subtitle1" className={classes.subtitle}>{label}</Typography>
                                <div className={classes.filterCount}>
                                    <Typography variant="subtitle1" className={classes.subtitle}>
                                        {rightLabel}
                                    </Typography>
                                    <ArrowForwardIos className={classes.arrow} />
                                </div>
                        </ListItem>);
                }

                )}
            </div>
        );
    }
}

export default withStyles(styles)(FilterGroups);
