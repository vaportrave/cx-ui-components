import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Warn from '@material-ui/icons/Warning';
import Info from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButtonClose from '../buttons/IconButtonClose';


const styles = () => ({
    paper: {
        borderRadius: 0,
        maxWidth: 300,
    },
    close: {
        position: 'absolute',
        right: 10,
        top: 14,
        zIndex: 12,
        padding: 5,
        color: '#b9b9b9',
    },
    title: {
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
    },
    infoIco: {
        fill: '#3399ff',
    },
    warningIco: {
        fill: '#F22053',
    },
    alertIco: {
        marginRight: 11,
    },
    content: {
        paddingLeft: 35,
        paddingRight: 15,
        fontSize: 15,
        color: '#666',
    },
    contentWithoutIcon: {
        paddingLeft: 0,
        marginLeft: -4,
    },
    titleWrap: {
        padding: '20px 20px 3px 20px',
    },
    btn: {
        width: 120,
        margin: 0,
    },
    btnActions: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px 20px',
        margin: 0,
    },
});

function AlertDialog({
    isOpened,
    title,
    message,
    closeDialog,
    submitDialog,
    withoutButtons,
    dialogType,
    cancelBtnText,
    confirmButtonText,
    confirmButtonClass,
    classes,
    ...rest
}) {
    const renderIcon = () => {
        switch (dialogType) {
            case 'INFO': {
                return  (<Info className={cn(classes.alertIco, classes.infoIco)} />);
            }
            case 'WARNING': {
                return (<Warn className={cn(classes.alertIco, classes.warningIco)} />);
            }
            default: return '';
        }
    };

    return (
        <Dialog
            open={isOpened}
            onClose={closeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            classes={{ paper: classes.paper }}
            transitionDuration={{ exit: 0 }}
            {...rest}
        >
            <DialogTitle id="alert-dialog-title" className={classes.titleWrap} disableTypography>
                <Typography
                    variant="h5"
                    className={classes.title}
                >
                    {renderIcon()}
                    {title}
                </Typography>
            </DialogTitle>
            <IconButtonClose
                className={classes.close}
                onClick={closeDialog}
            />
            <DialogContent>
                <DialogContentText
                    id="alert-dialog-description"
                    className={cn(classes.content, { [classes.contentWithoutIcon]: !dialogType })}
                >
                    {message}
                </DialogContentText>
            </DialogContent>
            {!withoutButtons &&
            <DialogActions className={classes.btnActions}>
                <Button
                    onClick={closeDialog}
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                >
                    {cancelBtnText}
                </Button>
                <Button
                    onClick={submitDialog}
                    variant="outlined"
                    color="primary"
                    className={cn(classes.btn, confirmButtonClass)}
                    autoFocus
                >
                    {confirmButtonText}
                </Button>
            </DialogActions>
            }
        </Dialog>
    );
}

AlertDialog.propTypes = {
    isOpened: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string,
    confirmButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string,
    closeDialog: PropTypes.func,
    submitDialog: PropTypes.func,
    withoutButtons: PropTypes.bool,
    dialogType: PropTypes.string,
    confirmButtonClass: PropTypes.string,
};

AlertDialog.defaultProps = {
    openDialog: false,
};

export default withStyles(styles)(AlertDialog);
