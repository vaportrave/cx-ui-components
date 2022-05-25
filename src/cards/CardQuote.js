import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = {
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
};

class CardQuote extends PureComponent {
    static propTypes = {
        isOpen: PropTypes.bool,
        classes: PropTypes.object,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
    };


    render() {
        const { classes, children } = this.props;

        return (
            <Card className={classes.root}>
                {children}
            </Card>
        );
    }
}

export default withStyles(styles)(CardQuote);
