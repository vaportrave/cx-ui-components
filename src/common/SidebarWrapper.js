import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 375,
        border: 'solid 1px #d8d8d8',
        borderRadius: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        height: '100%',
        zIndex: 1,
        backgroundColor: '#fff',
    },
});


class SidebarWrapper extends PureComponent {
    static propTypes = {
        isOpen: PropTypes.bool,
        classes: PropTypes.object,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
    };


    render() {
        const { classes, children, isOpen } = this.props;

        if (!isOpen) {
            return null;
        }

        return (
            <div className={classes.root}>
                {children}
            </div>
        );
    }
}

export default withStyles(styles)(SidebarWrapper);
