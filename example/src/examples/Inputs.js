import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MoreVert from '@material-ui/icons/MoreVert';
import { Typography, Grid, Divider } from '@material-ui/core'
import {
    AutocompleteAsync,
    InputText,
    Checkbox,
    Button,
    InputPassword,
    InputStepper,
    InputSelectButton,
    InputSelect,
    DatePickerController,
} from 'cx-ui-components'
import styles from './styles';


const RADIO_OPTIONS = [
    { id: 0, value: 'radio_use_own_email', label: 'use own email', text: 'If you already have a dedicated email address for all your requests for example, you can set up your account here for no additional cost.' },
    { id: 1, value: 'radio_create_cx_email', label: 'create cx email', text: 'If you haven\'t email for requests yet, we can provide a bespoke dedicated email address costing £3.00 + VAT per month.' },
];

const SORT_OPTIONS = [
    { id: 0, value: 'SORT_BY_DATE', label: 'Sort by date' },
    { id: 1, value: 'SORT_BY_PRICE', label: 'Sort by price' },
];

const WEAKNESS_STATUSES = ['Weak', 'Average', 'Strong'];
const passwordMessage = 'Your password should contain at least 8 characters, 1 capital letter and 1 number.';

function getSteps() {
    return [{ title: 'CREATE EMAIL' }, { title: 'SET PASSWORD' }, { title: 'SET UP EMAIL' }];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'CREATE EMAIL';
        case 1:
            return 'SET PASSWORD';
        case 2:
            return 'SET UP EMAIL';
        default:
            return 'DEFAULT VIEW';
    }
}


class Inputs extends Component {
    state = {
        sortBy: 'SORT_BY_DATE',
        autocomplete: {},
        location: {},
        search: {},
        text: '',
        password: '',
        isChecked: false,
        selectRadio: 'radio_create_cx_email',
        isSwitchSelected: false,
        startDate: null,
        endDate: null,
        date: null,
        activeStep: 0,
    };

    handleNext = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    setAutocomplete = (newValue) => this.setState({ autocomplete: newValue });

    setLocation = (newValue) => this.setState({ location: newValue });

    setSearch = (newValue) => this.setState({ search: newValue });

    setSortBy = (newValue) => this.setState({ sortBy: newValue });

    setText = (newValue) => this.setState({ text: newValue });

    setPassword = (newValue) => this.setState({ password: newValue });

    setIsChecked = (newValue) => this.setState({ isChecked: newValue });

    setSelectRadio = (newValue) => this.setState({ selectRadio: newValue });

    setIsSwitchSelected = (newValue) => this.setState({isSwitchSelected: newValue });

    onChangeDateRange = (startDate, endDate) => {
        this.setState({ startDate, endDate });
    };

    onChangeSingleDate = (date) => {
        this.setState({ date });
    };

    render() {
        const { classes } = this.props;
        const { sortBy, autocomplete, text, isChecked, selectRadio,
            password, activeStep, startDate, endDate, date, search, location } = this.state;
        const steps = getSteps();

        return (
            <Grid container className={classes.container}>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>InputText</h3>
                    <InputText
                        label="Label"
                        value={text}
                        onChange={this.setText}
                    />
                    <h4>{`{ text: ${text} }`}</h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>InputText info message</h3>
                    <InputText
                        label="Label"
                        value={text}
                        onChange={this.setText}
                        info="Info message"
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>InputText error message</h3>
                    <InputText
                        label="Label"
                        value={text}
                        onChange={this.setText}
                        error="Error message"
                    />
                </Grid>



                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <h3>InputSelectButton</h3>
                </Grid>
                <Grid item xs={8} md={4} lg={3} className={classes.divider}>
                    <h4>{`{ sortBy: ${sortBy} }`}</h4>
                </Grid>
                <Grid item xs={4} md={4} lg={3} className={classes.divider}>
                    <InputSelectButton
                        label={<MoreVert />}
                        options={SORT_OPTIONS}
                        value={sortBy}
                        onChange={this.setSortBy}
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <h3>InputSelectButton <i>isShowToggleIcon</i></h3>
                </Grid>
                <Grid item xs={8} md={4} lg={3} className={classes.divider}>
                    <h4>{`{ sortBy: ${sortBy} }`}</h4>
                </Grid>
                <Grid item xs={4} md={4} lg={3} className={classes.divider}>
                    <InputSelectButton
                        label="Sort"
                        isShowToggleIcon
                        options={SORT_OPTIONS}
                        value={sortBy}
                        onChange={this.setSortBy}
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <h3>InputSelect</h3>
                </Grid>
                <Grid item xs={4} md={4} lg={3} className={classes.divider}>
                    <InputSelect
                        label="Sort"
                        options={SORT_OPTIONS}
                        value={sortBy}
                        onChange={this.setSortBy}
                    />
                    <h4>{`{ sortBy: ${sortBy} }`}</h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <h3>InputSelect error message</h3>
                </Grid>
                <Grid item xs={4} md={4} lg={3} className={classes.divider}>
                    <InputSelect
                        error="Error message"
                        label="Sort"
                        options={SORT_OPTIONS}
                        value={sortBy}
                        onChange={this.setSortBy}
                    />
                    <h4>{`{ sortBy: ${sortBy} }`}</h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>AutocompleteAsync</h3>
                    <AutocompleteAsync
                        onSelect={this.setAutocomplete}
                    />
                    <h4>
                        {autocomplete && Object.keys(autocomplete).length
                            ? `{ value: ${autocomplete.value},
                               label: ${autocomplete.label},
                               avatar: ${autocomplete.avatar} }`
                            : '{}'
                        }
                    </h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>AutocompleteAsync Search icon</h3>
                    <AutocompleteAsync
                        iconSearch
                        onSelect={this.setSearch}
                    />
                    <h4>
                        {search && Object.keys(search).length
                            ? `{ value: ${search.value},
                               label: ${search.label},
                               avatar: ${search.avatar} }`
                            : '{}'
                        }
                    </h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>AutocompleteAsync Location icon</h3>
                    <AutocompleteAsync
                        iconLocation
                        onSelect={this.setLocation}
                    />
                    <h4>
                        {location && Object.keys(location).length
                            ? `{ value: ${location.value},
                               label: ${location.label},
                               avatar: ${location.avatar} }`
                            : '{}'
                        }
                    </h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>

                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.divider}>
                    <h3>InputPassword</h3>
                    <InputPassword
                        label="Label"
                        value={password}
                        onChange={this.setPassword}
                    />
                    <h4>{`{ password: ${password} }`}</h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>InputPassword info message</h3>
                    <InputPassword
                        label="Label"
                        value={password}
                        onChange={this.setPassword}
                        info="Info message"
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                    <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                        <h3>InputPassword error message</h3>
                        <InputPassword
                            label="Label"
                            value={password}
                            onChange={this.setPassword}
                            error="Error message"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                    <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                        <h3>InputPassword with weakness block</h3>
                        <InputPassword
                            label="Label"
                            value={password}
                            weaknessStatuses={WEAKNESS_STATUSES}
                            passwordMessage={passwordMessage}
                            onChange={this.setPassword}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>InputCheckbox</h3>
                    <Checkbox
                        label="Checkbox input"
                        value={isChecked}
                        onChange={this.setIsChecked}
                    />
                    <h4>{`{ isChecked: ${isChecked} }`}</h4>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>InputCheckbox error message</h3>
                    <Checkbox
                        label="Checkbox input"
                        value={isChecked}
                        onChange={this.setIsChecked}
                        error="Error message"
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={12} lg={12} className={classes.mb}>
                    <h3>InputStepper with number icons</h3>
                    <InputStepper
                        numberIcons
                        steps={steps}
                        activeStep={activeStep}
                    />
                    <div>
                        {activeStep === steps.length ? (
                            <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Typography className={classes.instructions}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Button onClick={this.handleReset} className={classes.button}>
                                    Reset
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                </div>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={12} lg={12} className={classes.mb}>
                    <h3>InputStepper with</h3>
                    <InputStepper
                        steps={steps}
                        activeStep={activeStep}
                    />
                    <div>
                        {activeStep === steps.length ? (
                            <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Typography className={classes.instructions}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Button onClick={this.handleReset} className={classes.button}>
                                    Reset
                                </Button>
                            </div>
                        ) : (
                            <div>
                                <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                </div>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>DatePicker Range</h3>
                    <DatePickerController
                        type="RANGE"
                        dateFrom={startDate}
                        dateTo={endDate}
                        minimumNights={0}
                        onChangeDate={this.onChangeDateRange}
                        noBorder
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>DatePicker Range with input</h3>
                    <DatePickerController
                        type="INPUT_RANGE"
                        dateFrom={startDate}
                        dateTo={endDate}
                        minimumNights={0}
                        onChangeDate={this.onChangeDateRange}
                        noBorder
                        startDatePlaceholderText={"Start Date"}
                        endDatePlaceholderText={"End Date"}
                        startDateId="start-date"
                        endDateId="end-date"
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
                <Grid item xs={12} md={4} lg={3} className={classes.mb}>
                    <h3>Single DatePicker with input</h3>
                    <DatePickerController
                        type="SINGLE"
                        date={date}
                        onChangeDate={this.onChangeSingleDate}
                        placeholder="Date"
                    />
                </Grid>
                <Grid item xs={12} className={classes.divider}>
                    <Divider />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Inputs);
