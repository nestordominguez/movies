import React from "react";
import { FormControl, TextField } from '@mui/material';
import { getEmptyWordError } from '../model/authenticate';
import { isEmptyObj } from '../utils';

function PasswordInput({
  errors,
  isFullWidth,
  fieldName,
  placeholder,
  password,
  onSetPassword,
  onSetErrors,
}) {
  return(
    <FormControl fullWidth={isFullWidth} >
      <TextField
        onBlur={() => onSetErrors(getEmptyWordError('password', password, errors))}
        id={fieldName}
        placeholder={placeholder}
        name={fieldName}
        variant="outlined"
        size={'small'}
        value={password}
        InputLabelProps={{
          shrink: true,
        }}
        error={!isEmptyObj(errors.password)}
        helperText={!isEmptyObj(errors.password) ? errors.password.emptyWord : ' '}
        onChange={(e) => onSetPassword(e.target.value)}
        type="password"
      />
    </FormControl>
  )
}

export default PasswordInput;