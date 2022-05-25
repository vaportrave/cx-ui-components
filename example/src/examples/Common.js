import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import styles from './styles';
import {
    FormHeader,
    NavTabs,
    Notification,
    ModalDialog,
    Message,
    InfoCell,
} from 'cx-ui-components';

const NAV_TABS_OPTIONS = [
    { id: 0, value: 'tab_1', label: 'overview' },
    { id: 1, value: 'tab_2', label: 'accounts payable' },
    { id: 2, value: 'tab_3', label: 'accounts receivable' },
    { id: 3, value: 'tab_4', label: 'archive' },
];

class Common extends Component {
    state = {
        activeTab: 'tab_1',
        showModal: '',
        messageParams: {},

        open: '',
    };

    handleClick = (value) => {
        this.setState({ open: value });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: '' });
    };

    setActiveTab = (newValue) => this.setState({ activeTab: newValue });

    openMessage = (type, message ) => () => this.setState({ messageParams: { type, message }});

    hideMessage = () => this.setState({ messageParams: { } });

    handleCloseModal = () => {
        this.setState({ modalType: '' });
    };

    render() {
        const { classes } = this.props;
        const { activeTab, open, modalType, messageParams: { message, type } } = this.state;

        return (
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>FormHeader</h3>
                    <FormHeader
                        title="Add group"
                        subtitle="Search and add members"
                        closeForm={() => null}
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={8} lg={6} className={classes.divider}>
                    <h3>NavTabs</h3>
                    <NavTabs
                        options={NAV_TABS_OPTIONS}
                        value={activeTab}
                        onChange={this.setActiveTab}
                    />
                    <h4>{`{ activeTab: ${activeTab} }`}</h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <h3>Notifications</h3>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.handleClick('success')}
                    >
                        Success notification
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.handleClick('decline')}
                    >
                        Warning notification with block icon
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.handleClick('timer')}
                    >
                        Warning notification with timer icon
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.handleClick('warning')}
                    >
                        Info notification with warning icon
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.handleClick('notes')}
                    >
                        Info notification with notes icon
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.handleClick('mail')}
                    >
                        Info notification with mail icon
                    </Button>
                    <Notification
                        isOpen={open === 'success'}
                        handleClose={this.handleClose}
                        message="Success notification message"
                        variant="success"
                        icon="success"/>
                    <Notification
                        isOpen={open === 'decline'}
                        handleClose={this.handleClose}
                        message="Decline notification message"
                        variant="warning"
                        icon="decline"/>
                    <Notification
                        isOpen={open === 'timer'}
                        handleClose={this.handleClose}
                        message="Block notification message"
                        variant="warning"
                        icon="timer"/>
                    <Notification
                        isOpen={open === 'warning'}
                        handleClose={this.handleClose}
                        message="Info notification message with warning icon"
                        variant="info"
                        icon="warning"/>
                    <Notification
                        isOpen={open === 'notes'}
                        handleClose={this.handleClose}
                        message="Info notification message with notes icon"
                        variant="info"
                        icon="notes"/>
                    <Notification
                        isOpen={open === 'mail'}
                        handleClose={this.handleClose}
                        message="Info notification message with mail icon"
                        variant="info"
                        icon="mail"/>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={8} lg={6} className={classes.divider}>
                    <h3>ModalDialog with warning icon</h3>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.setState({ modalType: 'warning' })}
                    >
                        Open Dialog
                    </Button>
                    <ModalDialog
                        title="Dialog Title"
                        submitDialog={this.handleCloseModal}
                        closeDialog={this.handleCloseModal}
                        message="Are you sure you want to unapprove this document?"
                        cancelBtnText="Cancel"
                        dialogType="WARNING"
                        confirmButtonText="Success"
                        isOpened={modalType === 'warning'}
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={8} lg={6} className={classes.divider}>
                    <h3>ModalDialog with info icon</h3>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.setState({ modalType: 'info' })}
                    >
                        Open Dialog
                    </Button>
                    <ModalDialog
                        title="Dialog Title"
                        submitDialog={this.handleCloseModal}
                        closeDialog={this.handleCloseModal}
                        message="Are you sure you want to unapprove this document?"
                        cancelBtnText="Cancel"
                        confirmButtonText="Success"
                        dialogType="INFO"
                        isOpened={modalType === 'info'}
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={8} lg={6} className={classes.divider}>
                    <h3>ModalDialog withoutIcon</h3>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={() => this.setState({ modalType: 'default' })}
                    >
                        Open Dialog
                    </Button>
                    <ModalDialog
                        title="Dialog Title"
                        submitDialog={this.handleCloseModal}
                        closeDialog={this.handleCloseModal}
                        message="Are you sure you want to unapprove this document?"
                        cancelBtnText="Cancel"
                        confirmButtonText="Success"
                        isOpened={modalType === 'default'}
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={8} lg={6} className={classes.divider}>
                    <h3>Message</h3>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={this.openMessage('SUCCESS_MESSAGE', 'Success Message')}
                    >
                        Open Success Message
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={this.openMessage('INFO_MESSAGE', 'Info Message')}
                    >
                        Open Info Message
                    </Button>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={this.openMessage('ERROR_MESSAGE', 'Error Message')}
                    >
                        Open Error Message
                    </Button>
                    {message && <Message message={message} messageType={type} hideMessage={this.hideMessage}/>}
                    <Divider />
                    <h3>InfoCells example</h3>
                    <InfoCell
                        heading="InfoCell heading"
                        value="InfoCell value"
                    />
                    <h3>InfoCells example with long value</h3>
                    <div style={{ width: 150 }}>
                        <InfoCell
                            heading="InfoCell heading"
                            value="InfoCell value long longer longest worlllllddddddd"
                        />
                    </div>
                    <h3>InfoCells example without value</h3>
                    <InfoCell
                        heading="InfoCell heading"
                    />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Common);
