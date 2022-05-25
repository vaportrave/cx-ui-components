import React from 'react';
import PropTypes from 'prop-types';
import {
    Stepper,
    Step,
    StepButton,
    withStyles,
} from '@material-ui/core';
import cx from 'classnames';
import { StepIcon, NumberStepIcon } from './StepperCustomIcons';

const styles = () => ({
    stepperRoot: {
        background: 'none',
    },
    stepText: {
        marginTop: '-10px',
        fontFamily: 'HKNova;',
        fontSize: 13,
        fontWeight: 300,
        color: '#666',
    },
    numberStepText: {
        fontFamily: 'HKNova',
        fontSize: 16,
        fontWeight: 600,
    },
});

const CustomStepper = ({ steps, activeStep, classes, numberIcons }) => {
    return (
        <Stepper
            activeStep={activeStep}
            alternativeLabel
            classes={{ root: classes.stepperRoot }}
        >
            {steps && steps.map((step, index) => {
                const completed = index < activeStep;
                const active = index === activeStep;
                return (
                    <Step key={step.title}>
                        <StepButton
                            icon={numberIcons ? (
                                <NumberStepIcon
                                    completed={completed}
                                    active={active}
                                    step={index + 1}
                                />
                            ) : (
                                    <StepIcon
                                        completed={completed}
                                        active={active}
                                    />
                                )}
                        >
                            <div className={cx(classes.stepText, { [classes.numberStepText]: numberIcons })}>
                                {step.title}
                            </div>
                        </StepButton>
                    </Step>
                );
            })}
        </Stepper>
    );
};

CustomStepper.propTypes = {
    activeStep: PropTypes.number,
    steps: PropTypes.array,
    classes: PropTypes.object,
    numberIcons: PropTypes.bool,
};

export default withStyles(styles)(CustomStepper);
