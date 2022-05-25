import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButtonClose from '../buttons/IconButtonClose';

const styles = {
    root: {
        minHeight: 50,
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        flexShrink: 0,
        padding: 20,
        paddingTop: 30,
    },
    wrapper: {
        width: '90%',
    },
    close: {
        position: 'absolute',
        right: 4,
        top: 14,
    },
    title: {
        fontSize: '18px',
    },
};

class FormHeader extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        activeGroup: PropTypes.string,
        resetActiveGroup: PropTypes.func,
        closeForm: PropTypes.func,
    };

    render() {
        const {
            classes,
            title,
            subtitle,
            closeForm,
        } = this.props;

        return (
            <>
                <div className={classes.root}>
                    <div className={classes.wrapper}>
                        <Typography variant="subtitle1" className={classes.title}>
                            {title}
                        </Typography>
                        {subtitle && (
                            <Typography variant="body1">
                                {subtitle}
                            </Typography>
                        )}
                        <IconButtonClose
                            className={classes.close}
                            onClick={closeForm}
                        />
                    </div>
                </div>
                <Divider />
            </>
        );
    }
}

export default withStyles(styles)(FormHeader);
