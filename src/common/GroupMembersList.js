import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import EmptyLogo from '../assets/images/logo_placeholder.svg';


const styles = theme => ({
    root: {
        padding: 0,
        border: 'solid 1px #d8d8d8',
        borderTop: 0,
        borderBottom: 0,
        overflow: 'auto',
    },
});


class GroupMembersList extends PureComponent {
    static propTypes = {
        classes: PropTypes.object,
        options: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ]),
        }),),

        removeItem: PropTypes.func,
    };

    handleRemoveItem = (id) => () => this.props.removeItem(id);

    render() {
        const { classes, options } = this.props;

        if (!options || !options.length) {
            return null;
        }

        return (
            <List className={classes.root}>
                {options.map(({ value, avatar, label }) => (
                    <>
                        <ListItem key={value}>
                            <Avatar src={avatar || EmptyLogo} />
                            <ListItemText
                                primary={label}
                                secondary={value ? `ID: ${value}` : ''}
                            />
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        );
    }
}

export default withStyles(styles)(GroupMembersList);
