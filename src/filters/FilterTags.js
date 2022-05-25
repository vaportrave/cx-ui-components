import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';


const styles = {
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        padding: '16px 0',
    },
    chip: {
        margin: 2,
    },
};


class FilterTags extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        options: PropTypes.arrayOf(PropTypes.shape({
            filterName: PropTypes.string,
            label: PropTypes.string,
        })),
        openFilter: PropTypes.func,
        resetFilter: PropTypes.func,
    };

    handleOpen = (filterName) => () => {
        const { openFilter } = this.props;
        openFilter(filterName);
    };

    handleDelete = (filterName) => () => {
        const { resetFilter } = this.props;
        resetFilter(filterName);
    };

    render() {
        const { classes, options } = this.props;

        return (
            <div className={classes.root}>
                {options && options.length
                    ? options.map(({ filterName, label }) => (
                        <Chip
                            key={filterName}
                            clickable
                            onClick={this.handleOpen(filterName)}
                            label={label}
                            onDelete={this.handleDelete(filterName)}
                            className={classes.chip}
                            deleteIcon={<Clear />}
                            color="primary"
                        />
                    ))
                    : null}
            </div>
        );
    }
}

export default withStyles(styles)(FilterTags);
