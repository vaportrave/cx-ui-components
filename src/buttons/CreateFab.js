import React from 'react';
import PropTypes from 'prop-types';
import { Add } from '@material-ui/icons';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';

const useStyles = makeStyles(() => ({
    fab: {
        position: 'fixed',
        bottom: 35,
        right: 35,
    }
}));

function CreateFab({ onClick, className, ...rest }) {
    const classes = useStyles();
    return (
        <Fab
            aria-label="Add"
            className={cx(classes.fab, className)}
            onClick={onClick}
            color="secondary"
            {...rest}
        >
            <Add />
        </Fab>
    );
}

CreateFab.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default CreateFab;
