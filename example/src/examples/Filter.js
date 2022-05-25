import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import styles from './styles';
import {
    SidebarWrapper,
    FilterHeader,
    FilterGroups,
    FilterList,
    FilterSearch,
    FilterTags,
    Button,
} from 'cx-ui-components';


const FILTER_GROUP_OPTIONS = [
    { id: 0, value: 'membersFilter', label: 'Members' },
    { id: 1, value: 'statusFilter', label: 'Status' },
    { id: 2, value: 'sizeFilter', label: 'Size' },
];

const FILTER_STATUS_OPTIONS = [
    { id: 0, value: 'filter_status_available', label: 'Available' },
    { id: 1, value: 'filter_status_maybe_available', label: 'Maybe Available' },
    { id: 2, value: 'filter_status_unavailable', label: 'Unavailable' },
];

const FILTER_SIZE_OPTIONS = [
    { id: 0, value: 'filter_size_motorcycle', label: 'Motorcycle' },
    { id: 1, value: 'filter_size_car', label: 'Car' },
    { id: 2, value: 'filter_size_small_van', label: 'Small Van' },
    { id: 3, value: 'filter_size_midi_van', label: 'Midi Van' },
    { id: 4, value: 'filter_size_swb_up_to_24', label: 'SWB up to 2.4m' },
];


class Filter extends Component {
    state = {
        isFilterOpen: false,
        activeFilter: null,
        membersFilter: [],
        statusFilter: ['filter_status_available'],
        sizeFilter: ['filter_size_motorcycle'],
    };

    openFilter = () => this.setState({ isFilterOpen: true });

    closeFilter = () => this.setState({ isFilterOpen: false, activeFilter: null });

    setActiveFilter = (newValue) => this.setState({ activeFilter: newValue });

    openActiveFilter = (activeFilter) => this.setState({ activeFilter, isFilterOpen: true });


    resetActiveFilter = () => this.setState({ activeFilter: null });

    setMembersFilter = (newValue) => this.setState({ membersFilter: newValue });

    setStatusFilter = (newValue) => this.setState({ statusFilter: newValue });

    setSizeFilter = (newValue) => this.setState({ sizeFilter: newValue });

    resetFilterByName = (filterName) => this.setState({ [filterName]: [] });

    render() {
        const { classes } = this.props;
        const { isFilterOpen, activeFilter, membersFilter, statusFilter, sizeFilter } = this.state;

        const filterTagOptions = [];

        if (membersFilter.length) {
            filterTagOptions.push({
                filterName: 'membersFilter',
                label: `Members: ${membersFilter.length === 1 ? membersFilter[0].label : membersFilter.length}`,
            })
        }

        if (statusFilter.length) {
            filterTagOptions.push({
                filterName: 'statusFilter',
                label: `Status: ${statusFilter.length === 1
                    ? FILTER_STATUS_OPTIONS.find(({ value }) => statusFilter[0] === value).label
                    : statusFilter.length}`,
            })
        }

        if (sizeFilter.length) {
            filterTagOptions.push({
                filterName: 'sizeFilter',
                label: `Body size: ${sizeFilter.length === 1
                    ? FILTER_SIZE_OPTIONS.find(({ value }) => sizeFilter[0] === value).label
                    : sizeFilter.length}`,
            })
        }

        const filterOptions = [
            {
                id: 0,
                value: 'membersFilter',
                label: 'Members',
                selectedItems: membersFilter.length,
            },
            {
                id: 1,
                value: 'statusFilter',
                label: 'Status',
                totalItems: FILTER_STATUS_OPTIONS.length,
                selectedItems: statusFilter.length,
            },
            {
                id: 2,
                value: 'sizeFilter',
                label: 'Size', totalItems: FILTER_SIZE_OPTIONS.length,
                selectedItems: sizeFilter.length,
            },
        ];
        return (
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <h3>FilterTags</h3>
                    <FilterTags
                        options={filterTagOptions}
                        resetFilter={this.resetFilterByName}
                        openFilter={this.openActiveFilter}
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <h3>Filter Example</h3>
                    <Button onClick={this.openFilter}>
                        Open filter
                    </Button>
                    <h4>{`{ isFilterOpen: ${isFilterOpen} `}</h4>
                    <h4>{`  activeFilter: ${activeFilter},`}</h4>
                    <h4>{`  membersFilter: ${membersFilter
                        .map(({ avatar, value, label }) => (`{ value: ${value}, label: ${label}), avatar: ${avatar} } }`))
                        .join(', ')}`}
                    </h4>
                    <h4>{`  statusFilter: ${statusFilter},`}</h4>
                    <h4>{`  sizeFilter: ${sizeFilter},`}</h4>
                    <h4>{`  }`}</h4>
                    <SidebarWrapper isOpen={isFilterOpen}>
                        {!activeFilter &&
                        <>
                            <FilterHeader
                                activeGroup={activeFilter}
                                closeFilterForm={this.closeFilter}
                                resetActiveGroup={this.resetActiveFilter}
                            />
                            <FilterGroups
                                options={filterOptions}
                                setActiveGroup={this.setActiveFilter}
                            />
                        </>}
                        {activeFilter === 'membersFilter' &&
                        <>
                            <FilterHeader
                                activeGroup="Members"
                                closeFilterForm={this.closeFilter}
                                resetActiveGroup={this.resetActiveFilter}
                            />
                            <FilterSearch
                                onSelect={this.setMembersFilter}
                                value={membersFilter}
                            />
                        </>}
                        {!!(activeFilter === 'statusFilter') &&
                        <>
                            <FilterHeader
                                activeGroup="Status"
                                closeFilterForm={this.closeFilter}
                                resetActiveGroup={this.resetActiveFilter}
                            />
                            <FilterList
                                options={FILTER_STATUS_OPTIONS}
                                onChange={this.setStatusFilter}
                                value={statusFilter}
                            />
                        </>}
                        {activeFilter === 'sizeFilter' &&
                        <>
                            <FilterHeader
                                activeGroup="Size"
                                closeFilterForm={this.closeFilter}
                                resetActiveGroup={this.resetActiveFilter}
                            />
                            <FilterList
                                options={FILTER_SIZE_OPTIONS}
                                onChange={this.setSizeFilter}
                                value={sizeFilter}
                                isSetAll
                            />
                        </>}
                    </SidebarWrapper>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>FilterHeader FilterGroups</h3>
                    <FilterHeader />
                    <FilterGroups
                        options={FILTER_GROUP_OPTIONS}
                        setActiveGroup={this.setActiveFilter}
                    />
                    <h4>{`{ activeFilter: ${activeFilter} }`}</h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>FilterHeader FilterSearch</h3>
                    <FilterHeader activeGroup="Members" />
                    <FilterSearch
                        onSelect={this.setMembersFilter}
                    />
                    <h4>{`{ membersFilter: ${membersFilter} }`}</h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} style={{ marginBottom: 8 }}>
                    <h3>FilterHeader FilterList</h3>
                    <FilterHeader
                        activeGroup="Status"
                    />
                    <FilterList
                        options={FILTER_STATUS_OPTIONS}
                        onChange={this.setStatusFilter}
                        value={statusFilter}
                    />
                    <h4>{`{ statusFilter: ${statusFilter} }`}</h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} style={{ marginBottom: 8 }}>
                    <h3>FilterHeader FilterList <i>isSetAll=true</i></h3>
                    <FilterHeader
                        activeGroup="Size"
                    />
                    <FilterList
                        options={FILTER_SIZE_OPTIONS}
                        onChange={this.setSizeFilter}
                        value={sizeFilter}
                        isSetAll
                    />
                    <h4>{`{ sizeFilter: ${sizeFilter} }`}</h4>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Filter);
