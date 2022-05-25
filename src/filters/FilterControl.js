import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FilterIcon from '../assets/icons/FilterIcon';

const styles = theme => ({
    root: {
        width: '100%',
        border: 'solid 1px #d8d8d8',
        borderRadius: 0,
    },
});


class FilterControl extends PureComponent {
    static propTypes = {
        onClick: PropTypes.func,
    };


    render() {
        const { classes, onClick, ...custom } = this.props;

        return (
            <Button onClick={onClick} {...custom}>
                <FilterIcon className={classes.filterIcon} />
                Filter
            </Button>
        );
    }
}

export default withStyles(styles)(FilterControl);
