import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import DropDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MoreVert from '@material-ui/icons/MoreVert';

const styles = theme => ({
    wrapper: {
        position: 'relative',
        display: 'inline-block',
        height: 44,
    },
    root: {
        minWidth: 1,
        fontFamily: 'HKNova',
        fontSize: 15,
        fontWeight: 400,
        color: '#282837',
        textTransform: 'Capitalize',
        boxSizing: 'border-box',
        border: '1px solid transparent',
        borderBottom: '0 !important',
    },
    activeRoot: {
        border: '1px solid #666',
        backgroundColor: '#fff',
        borderBottom: '0 !important',
        boxSizing: 'border-box',
        zIndex: 9,
        '&:hover': {
            backgroundColor: '#fff',
        },
    },
    iconDrop: {
        fontSize: 20,
        transform: 'rotate(0deg)',
        marginLeft: 8,
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    iconDropOpen: {
        transform: 'rotate(180deg)',
    },
    menu: {
        top: 43,
        zIndex: 1,
        padding: '10px 0',
        position: 'absolute',
        right: 0,
        backgroundColor: '#ffffff',
        border: '1px solid #666',
        boxShadow: '0 5px 7px 0 rgba(0, 0, 0, 0.17)',
    },
    menuItemRoot: {
        padding: '4px 16px',
        border: 'none',
    },
    menuItemSelected: {
        backgroundColor: '#3399ff !important',
        color: '#fff',
    },
});

class InputSelectButton extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
        iconColor: PropTypes.string,
        isShowToggleIcon: PropTypes.bool,
    };

    state = { isOpen: false };

    toggleMenu = () => this.setState(state => ({ ...state, isOpen: !state.isOpen }));

    handleClickAway = () => this.setState({ isOpen: false });

    renderOptions = ({ label, value, onClick, className }) => {
        const { classes } = this.props;

        const handleClick = () => {
          onClick && onClick();
          this.handleClickAway();
        };

        return (
            <MenuItem
                onClick={handleClick}
                classes={{ root: cn(classes.menuItemRoot, className), selected: classes.menuItemSelected }}
                selected={this.props.value !== undefined && this.props.value === value}
                key={value}
            >
                {label}
            </MenuItem>
        );
    };

    render() {
        const { classes, label, options, isShowToggleIcon = false, iconColor = '#b9b9b9', rootNotActiveClassName, ...rest } = this.props;
        const { isOpen } = this.state;

        return (
            <ClickAwayListener onClickAway={this.handleClickAway}>
                <div className={classes.wrapper}>
                    <Button
                        className={cn(
                            classes.root,
                            {
                                [classes.activeRoot]: isOpen,
                                [rootNotActiveClassName]: rootNotActiveClassName && !isOpen,
                            })}
                        onClick={this.toggleMenu}
                        {...rest}
                    >
                        {label || <MoreVert htmlColor={iconColor} />}
                        {isShowToggleIcon && (
                            <DropDownIcon className={cn(classes.iconDrop, { [classes.iconDropOpen]: isOpen })} />
                        )}
                    </Button>
                    {isOpen && (
                        <div className={classes.menu}>
                            {options.map(this.renderOptions)}
                        </div>
                    )}
                </div>
            </ClickAwayListener>
        );
    }
}

export default withStyles(styles)(InputSelectButton);
