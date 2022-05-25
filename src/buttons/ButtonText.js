import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cx from 'classnames';

const styles = theme => ({
    root: {
        fontSize: theme.typography.caption.fontSize,
        fontFamily: theme.typography.caption.fontFamily,
        fontWeight: theme.typography.caption.fontWeight,
        color: theme.palette.primary.main,
        textTransform: 'Capitalize',
        '&>span>svg': {
            fontSize: theme.typography.h1.fontSize,
            marginRight: theme.spacing.init,
            color: theme.palette.text.secondary,
        },
    },
});

class ButtonText extends PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node,
        ]),
        size: PropTypes.string,
        fullWidth: PropTypes.bool,
        onClick: PropTypes.func,
    };

    render() {
        const {
            children,
            classes,
            className,
            fullWidth = false,
            icon,
            onClick,
            size = 'small',
            ...rest
        } = this.props;

        return (
            <Button
                className={cx(classes.root, className)}
                fullWidth={fullWidth}
                size={size}
                onClick={onClick}
                {...rest}
            >
                {icon}
                {children}
            </Button>
        );
    }
}

export default withStyles(styles)(ButtonText);
