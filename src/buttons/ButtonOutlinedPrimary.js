import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';


class ButtonOutlinedPrimary extends PureComponent {
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
            size = 'medium',
            fullWidth = false,
            onClick,
            ...rest
        } = this.props;

        return (
            <Button
                fullWidth={fullWidth}
                variant="outlined"
                color="primary"
                size={size}
                onClick={onClick}
                {...rest}
            >
                {children}
            </Button>
        );
    }
}

export default ButtonOutlinedPrimary;
