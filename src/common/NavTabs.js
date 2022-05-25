import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/styles';

const styles =  ({ palette }) =>({
    indicator: {
        backgroundColor: palette.background.main,
    },
});


class NavTabs extends PureComponent {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
        })),
        onChange: PropTypes.func,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        variant: PropTypes.string,
    };

    handleChange = (event, newValue) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange(newValue);
        }
    };

    render() {
        const { options, variant, classes } = this.props;

        return (
            <Tabs
                value={this.props.value}
                variant={variant}
                onChange={this.handleChange}
                TabIndicatorProps={{
                    className: classes.indicator,
                }}
            >
                {options.map(({ label, value, daId, ...props }) => (
                    <Tab
                        key={value}
                        label={label}
                        value={value}
                        da-id={daId}
                        {...props}
                    />))}
            </Tabs>
        );
    }
}

export default withStyles(styles)(NavTabs);
