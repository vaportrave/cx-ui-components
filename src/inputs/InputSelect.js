import React from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Arrow from '@material-ui/icons/KeyboardArrowDown'
import cn from 'classnames'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormHelperText from '@material-ui/core/FormHelperText'
import Warn from '@material-ui/icons/Warning'
import { makeStyles } from '@material-ui/styles'

const useOutlinedInputStyles = makeStyles(() => ({
  root: {
    '& $notchedOutline': {
      borderColor: '#d8d8d8'
    },
    '&$focused $notchedOutline': {
      borderColor: '#666'
    }
  },
  focused: {},
  notchedOutline: {}
}));

const useStyles = makeStyles((theme) => ({
  optionRoot: {
    color: '#282837',
    borderBottom: 'none',
    fontSize: 14,
    paddingLeft: 16,
    paddingRight: 16,
    fontWeight: 500,
  },
  optionSelected: {
    color: theme.palette.primary.contrastText,
    backgroundColor: `${theme.palette.primary.main} !important`
  },
  errorMessage: {
    display: 'flex',
    alignItems: 'center'
  },
  errorIcon: {
    color: theme.palette.error.main,
    marginRight: theme.spacing(0.75),
    fontSize: theme.typography.fontSize * 1.33
  },
  select: {
    borderColor: 'red',
    backgroundColor: 'red'
  },
  error: {
    '& fieldset': {
      borderColor: '#f22053 !important'
    }
  },
  placeholder: {
    color: '#888'
  },
  placeholderOption: {
    border: 'none',
    backgroundColor: 'transparent !important',
    paddingLeft: 16,
    paddingRight: 16,
  }
}));

const InputSelect = ({
  daId,
  options,
  label = '',
  required,
  placeholder = '',
  error = '',
  hideLabel,
  value = '__none__',
  listItemDaId,
  onChange,
  optionRef,
  className,
  ...rest
}) => {
  const classes = useStyles();

  const outlinedInputClasses = useOutlinedInputStyles();

  const handleChangeSelect = ({ target: { value } }) => {
    onChange(value)
  };

  const itemDaId = option => (typeof listItemDaId === 'function' ? listItemDaId(option.value) : listItemDaId)

  if (options.length) {
    return (
      <FormControl variant='outlined'>
        <InputLabel>
          {!!label && !hideLabel && label}

          {required && (
            <span className={classes.required}>*</span>
          )}
        </InputLabel>
        <Select
          variant='outlined'
          value={value}
          onChange={handleChangeSelect}
          IconComponent={props => <Arrow className={`${props.className} ${classes.arrow}`} />}
          input={
            <OutlinedInput
              error={!!error}
              labelWidth={0}
              classes={outlinedInputClasses}
            />
          }
          className={cn(className, { [classes.error]: error })}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            }
          }}
          classes={{
            selectMenu: cn({ [classes.placeholder]: value === '__none__' })
          }}
          da-id={daId}
          {...rest}
        >
          {placeholder && (
            <MenuItem disabled value='__none__' className={classes.placeholderOption}>
              {placeholder}
            </MenuItem>
          )}

          {options.map(option => (
            <MenuItem
              da-id={itemDaId(option)}
              classes={{ root: classes.optionRoot, selected: classes.optionSelected }}
              key={option.value}
              value={option.value}
              ref={optionRef}
            >
              {option.label}
            </MenuItem>))}
        </Select>
        {error && typeof error === 'string' &&
          <FormHelperText className={classes.error}>
            <span className={classes.errorMessage}>
              <Warn className={classes.errorIcon} />
              {error}
            </span>
          </FormHelperText>}
      </FormControl>
    )
  }

  return null
};

InputLabel.propTypes = {
  classes: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  required: PropTypes.bool,
  hideLabel: PropTypes.bool,
  daId: PropTypes.string,
  input: PropTypes.object,
  emptyValue: PropTypes.any
};

export default InputSelect
