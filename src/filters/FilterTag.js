import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';
import cn from 'classnames';

const styles = {
    chip: {
        margin: 2,
    },
    disabled: {
        backgroundColor: 'rgba(40, 40, 55, 0.4) !important',
        cursor: 'default',
    },
};


class FilterTag extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        filterName: PropTypes.string,
        closeBtnDaId: PropTypes.string,
        label: PropTypes.string.isRequired,
        onDelete: PropTypes.func,
        onClick: PropTypes.func,
        disabled: PropTypes.bool,
        clickable: PropTypes.bool,
    };

    render() {
        const {
            classes,
            filterName,
            onDelete,
            onClick,
            label,
            closeBtnDaId,
            disabled,
            clickable = true,
            ...custom
        } = this.props;

        const canClick = !disabled && clickable;

        return (
            <Chip
                key={filterName}
                clickable={clickable}
                onClick={canClick ? onClick : undefined}
                label={label}
                onDelete={canClick ? onDelete : undefined}
                className={cn(classes.chip, { [classes.disabled]: disabled })}
                deleteIcon={<Clear da-id={closeBtnDaId}/>}
                color="primary"
                {...custom}
            />
        );
    }
}

export default withStyles(styles)(FilterTag);
