import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import IconButtonClose from '../buttons/IconButtonClose';
import { IconButton } from '@material-ui/core';

const styles = ({ palette }) => ({
    filterGroupTitle: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        backgroundColor: palette.background.main,
        minHeight: 50,
        '& > h5': {
            color: '#ffffff',
            lineHeight: 1.27,
            textTransform: 'none',
        },
    },
    close: {
        transition: 'none',
        color: '#fff',
        position: 'absolute',
        right: 12,
        bottom: 2,
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.22)',
        },
        width: 46,
        height: 46,
    },
    leftPosition: {
        left: 6,
    },
    backIcon: {
        marginLeft: 4,
    },
    title: {
      fontSize: 16,
    },
});

class FilterHeader extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        activeGroup: PropTypes.string,
        resetActiveGroup: PropTypes.func,
        closeFilterForm: PropTypes.func,
    };

    render() {
        const {
            classes,
            activeGroup,
            resetActiveGroup,
            closeFilterForm,
            backBtnDaId,
            headerDaId,
            closeBtnDaId,
        } = this.props;

        return (
            <div className={classes.filterGroupTitle} da-id={headerDaId}>
                {activeGroup &&
                <IconButton
                    da-id={backBtnDaId}
                    color="primary"
                    className={cn(classes.close, classes.leftPosition)}
                    onClick={resetActiveGroup}
                >
                    <ArrowBackIos className={classes.backIcon} />
                </IconButton>}
                <Typography variant="h5" className={classes.title}>
                    {activeGroup || 'Filter'}
                </Typography>
                <IconButtonClose
                    da-id={closeBtnDaId}
                    className={classes.close}
                    onClick={closeFilterForm}
                />
            </div>
        );
    }
}

export default withStyles(styles)(FilterHeader);
