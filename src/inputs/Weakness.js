import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const VALUE_LENGTH = 8;

const weakColor = '#F22053';
const averageColor = '#FF8107';
const strongColor = '#82BC2F';

const styles = {
  weaknessStatusContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 12,
  },
  dashesContainer: {
    display: 'flex',
    flex: 3,
  },
  dash: {
    flex: 1,
    marginRight: 4,
    height: 5,
    backgroundColor: '#D8D8D8'
  },
  weakBg: {
    backgroundColor: weakColor
  },
  averageBg: {
    backgroundColor: averageColor
  },
  strongBg: {
    backgroundColor: strongColor
  },
  weakColor: {
    color: weakColor
  },
  averageColor: {
    color: averageColor
  },
  strongColor: {
    color: strongColor
  },
  weaknessStatus: {
    textAlign: 'left',
    fontSize: '13px',
    fontFamily: 'HKNova',
    lineHeight: '19px',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

const getWeaknessStatusValue = (value) => {
  const isContainMinLength = value && value.length >= VALUE_LENGTH;
  const hasCapitalLetter = /\w*[A-Z]\w*/g.test(value);
  const hasOneNumber = /\w*[0-9]\w*/g.test(value);
  return [
    isContainMinLength,
    hasCapitalLetter,
    hasOneNumber
  ]
    .filter(item => item)
    .length;
};

const getWeaknessStatusTextAndClass = (weaknessValue, weaknessStatuses) => {
  const preparedValue = weaknessValue > 0 ? weaknessValue - 1 : 0;
  const classes = ['weakColor', 'averageColor', 'strongColor'];
  return {
    weaknessStatusClass: classes[preparedValue],
    weaknessStatusText: weaknessStatuses[preparedValue]
  }
};

const Weakness = ({ value, classes, weaknessStatuses }) => {

  const passwordWeaknessValue = getWeaknessStatusValue(value);
  const {
    weaknessStatusClass,
    weaknessStatusText
  } = getWeaknessStatusTextAndClass(passwordWeaknessValue, weaknessStatuses);

  return (
    <div className={classes.weaknessStatusContainer}>
      <div className={classes.dashesContainer}>
        <div className={
          cx(
            classes.dash,
            {
              [classes.weakBg]: [0, 1].includes((passwordWeaknessValue)),
              [classes.averageBg]: passwordWeaknessValue === 2,
              [classes.strongBg]: passwordWeaknessValue === 3
            }
          )}
        />
        <div className={
          cx(
            classes.dash,
            {
              [classes.averageBg]: passwordWeaknessValue === 2,
              [classes.strongBg]: passwordWeaknessValue === 3
            }
          )}
        />
        <div className={
          cx(
            classes.dash,
            {
              [classes.strongBg]: passwordWeaknessValue === 3
            }
          )}
        />
      </div>
      <div className={cx(classes[weaknessStatusClass], classes.weaknessStatus)}>{weaknessStatusText}</div>
    </div>
  )
};

Weakness.propTypes = {
  value: PropTypes.string,
  weaknessStatuses: PropTypes.array,
  classes: PropTypes.object,
};

export default withStyles(styles)(Weakness);
