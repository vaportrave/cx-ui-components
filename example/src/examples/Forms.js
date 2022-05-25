import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import {
    FormHeader,
    SidebarWrapper,
    ButtonContained,
    Button,
    InputText,
    Checkbox,
    AutocompleteAsync,
    MembersOption,
    GroupMembersList,
    FormError,
} from 'cx-ui-components';

class Form extends Component {
    state = {
        isFormGroupOpen: false,
        groupName: '',
        isSearchByMembers: true,
        isSearchByOwnVehicle: false,
        groupsMembers: [],
    };

    openFormGroup = () => this.setState({ isFormGroupOpen: true });

    closeFormGroup = () => this.setState({ isFormGroupOpen: false });

    setGroupName = (newValue) => this.setState({ groupName: newValue });

    setIsSearchByMembers = (newValue) => this.setState({ isSearchByMembers: newValue });

    setIsSearchByOwnVehicle = (newValue) => this.setState({ isSearchByOwnVehicle: newValue });

    setGroupsMembers = (newValue) => this.setState({ groupsMembers: newValue });

    render() {
        const { classes } = this.props;
        const { isFormGroupOpen, groupName, isSearchByMembers, isSearchByOwnVehicle, groupsMembers } = this.state;

        return (
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>Group form</h3>
                    <Button onClick={this.openFormGroup}>
                        Open group form
                    </Button>
                    <SidebarWrapper isOpen={isFormGroupOpen}>
                        <FormHeader
                            title="Add group"
                            subtitle="Search and add members"
                            closeForm={this.closeFormGroup}
                        />
                        <FormError message="Form long longggggg error message ... sldkfjls sdflsdjf dslkfjlk sdklfjlksd slkdjfsldk fj sdk "/>
                        <FormError
                            variant="contained"
                            message="Form long longggggg error message ... sldkfjls sdflsdjf dslkfjlk sdklfjlksd slkdjfsldk fj sdk "
                        />
                        <div className={classes.formWrapper}>
                            <InputText
                                label="Enter group name"
                                placeholder="Start type group name"
                                value={groupName}
                                onChange={this.setGroupName}
                            />
                            <Typography variant="h3">
                                Who do you want to include to the group?
                            </Typography>
                            <Checkbox
                                label="Exchange members / Subcontractors"
                                value={isSearchByMembers}
                                onChange={this.setIsSearchByMembers}
                            />
                            <Checkbox
                                label="Company vehicles"
                                value={isSearchByOwnVehicle}
                                onChange={this.setIsSearchByOwnVehicle}
                            />
                            <div className={classes.searchWrapper}>
                                <AutocompleteAsync
                                    label="Add members"
                                    value={groupsMembers}
                                    onSelect={this.setGroupsMembers}
                                    isMulti
                                    components={{
                                        Option: MembersOption,
                                    }}
                                />
                                <div className={classes.listWrapper}>
                                    <GroupMembersList
                                        options={groupsMembers}
                                    />
                                </div>
                                <div className={classes.buttonWrapper}>
                                    <ButtonContained fullWidth>
                                        Save
                                    </ButtonContained>
                                </div>
                            </div>
                        </div>
                    </SidebarWrapper>
                    <h4>{`{ isFormGroupOpen: ${isFormGroupOpen} `}</h4>
                    <h4>{`  groupName: ${groupName},`}</h4>
                    <h4>{`  isSearchByMembers: ${isSearchByMembers},`}</h4>
                    <h4>{`  isSearchByOwnVehicle: ${isSearchByOwnVehicle},`}</h4>
                    <h4>{`  groupsMembers: ${groupsMembers
                        .map(({ avatar, value, label }) => (`{ value: ${value}, label: ${label}, avatar: ${avatar})} }`))
                        .join(', ')}`}
                    </h4>
                    <h4>{`  }`}</h4>
                </Grid>
            </Grid>
        );
    }
}

export default  withStyles(styles)(Form);
