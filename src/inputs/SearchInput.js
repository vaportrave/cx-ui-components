import React, { useCallback, useState, useRef } from "react";
import PropTypes from 'prop-types';
import cn from 'classnames';
import { InputAdornment, TextField } from "@material-ui/core";
import { Search, Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    searchField: {
        width: 365,
        height: 44,
        marginBottom: 10,
    },
    searchLabel: {
        color: '#666',
        fontFamily: 'HKNova',
        fontWeight: 400,
        fontSize: 13,
    },
    inputHeight: {
      height: 44,
    },
    clearIcon: {
      cursor: 'pointer'
    }
}));


function InputSearch({ value, onClear, label, disabled, onChange, onFocus, onBlur, inputRef, autoFocus, labelClass, ...props  }) {
    const classes = useStyles();

    const [focused, setFocused] = useState(false);

    const ref = useRef();
    const finalRef = inputRef || ref;

    const doFocus = useCallback((e) => {
        setFocused(true);
        onFocus && onFocus(e);
    }, [onFocus]);

    const doBlur = useCallback((e) => {
        setFocused(false);
        onBlur && onBlur(e);
    }, [onBlur]);

    const showSearchIcon = !focused && !value;
    const canClear = value && onClear && !disabled;

    const doClear = canClear && ((e) => {
        e.preventDefault();
        onClear && onClear(e);
        finalRef.current?.focus();
    });

    return (
        <>
            {label && <div className={cn(classes.searchLabel, labelClass)}>{label}</div>}
            <TextField
                disabled={disabled}
                autoFocus={autoFocus}
                value={value}
                type="text"
                inputRef={inputRef}
                className={classes.searchField}
                margin="dense"
                variant="outlined"
                onChange={onChange}
                InputProps={{
                    className: classes.inputHeight,
                    startAdornment: showSearchIcon && (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                    endAdornment: canClear && (
                      <InputAdornment onMouseDown={doClear}>
                        <Close className={classes.clearIcon} />
                      </InputAdornment>
                    ),
                    onFocus: doFocus,
                    onBlur: doBlur,
                }}
                inputRef={finalRef}
                {...props}
            />
        </>
    )
}

InputSearch.propTypes = {
  label: PropTypes.string,
  autoFocus: PropTypes.bool,
  daId: PropTypes.string,
  margin: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  inputRef: PropTypes.object,
};

export default InputSearch;
