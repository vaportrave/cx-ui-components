import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TimerIcon from '../assets/icons/Reminder';
import DeclineIcon from '../assets/icons/Decline';
import WarningIcon from '../assets/icons/Warning';
import NotesIcon from '../assets/icons/Notes';
import MailIcon from '../assets/icons/Envelope';
import InfoIcon from '../assets/icons/InfoIcon';
import IconButtonClose from '../buttons/IconButtonClose';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    decline: DeclineIcon,
    timer: TimerIcon,
    mail: MailIcon,
    notes: NotesIcon,
    info: InfoIcon,
};

const styles = theme => ({
    success: {
        backgroundColor: '#82BC2F',
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: '#3399FF',
    },
    warning: {
        backgroundColor: '#F22053',
    },
    system: {
        backgroundColor: theme.palette.system,
    },
    icon: {
        fontSize: 20,
        marginRight: '0 !important',
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    svgIcon: {
        paddingRight: 0,
    },
    messageWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    message: {
        marginLeft: 10,
    },
    notificationContainer: {
        width: '100%',
        height: 45,
        top: 0,
    },
    contentRoot: {
        maxWidth: 'none',
        width: '100%',
        height: '100%',
        fontFamily: 'HKNova',
        fontWeight: 400,
        fontSize: 15,
        lineHeight: '22px',
        padding: '1px 24px 0 24px',
        userSelect: 'none'
    },
    pointer: {
        cursor: 'pointer',
    },
});

class SimpleSnackbar extends React.PureComponent {
    render() {
        const {
            classes,
            className,
            duration = 2000,
            handleClose,
            icon = 'success',
            indent,
            isOpen,
            message,
            onClick,
            other,
            variant = 'success',
            closeDaId,
            ...rest
        } = this.props;

        const Icon = variantIcon[icon];

        const indentStyles = indent ? {
            width: `calc(100% - ${indent}px)`,
            transform: 'none',
            left: 'unset',
            right: '0'
        } : {};

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                style={indentStyles}
                classes={{
                    anchorOriginTopCenter: cx(classes.notificationContainer, className),
                }}
                open={isOpen}
                autoHideDuration={duration}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Note archived</span>}
                {...rest}
            >
                <SnackbarContent
                    onClick={onClick}
                    className={cx(classes[variant], { [classes.pointer]: !!onClick })}
                    classes={{
                        root: classes.contentRoot
                    }}
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar" className={classes.messageWrapper}>
                            <Icon classes={{
                                iconVariant: classes.svgIcon
                            }} className={cx(classes.icon, classes.iconVariant)} />
                            <span className={classes.message}>{message}</span>
                        </span>
                    }
                    action={[
                        handleClose && (
                            <IconButtonClose
                                key="close"
                                className={classes.close}
                                onClick={handleClose}
                                da-id={closeDaId}
                                iconClassName={classes.icon}
                                color="inherit"
                            />
                        ),
                    ]}
                    {...other}
                />
            </Snackbar>
        );
    }
}

SimpleSnackbar.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.object,
    handleClose: PropTypes.func,
    className: PropTypes.string,
    variant: PropTypes.string,
    closeDaId: PropTypes.string,
    message: PropTypes.string,
    other: PropTypes.object,
    icon: PropTypes.string,
    indent: PropTypes.string,
    duration: PropTypes.number,
    onClick: PropTypes.func,
};

export default withStyles(styles)(SimpleSnackbar);
