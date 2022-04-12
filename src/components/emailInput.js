import React from "react";
import { FormControl, TextField } from '@mui/material';
import { getErrorEmail } from '../model/authenticate';
import { isEmptyObj } from '../utils';

function EmailInput({
  errors,
  isFullWidth,
  fieldName,
  placeholder,
  email,
  onSetEmail,
  onSetErrors,
}) {
  return (
    <FormControl fullWidth={isFullWidth} >
      <TextField
        onBlur={() => onSetErrors(getErrorEmail(email, errors))}
        id={fieldName}
        placeholder={placeholder}
        name={fieldName}
        variant="outlined"
        size={'small'}
        value={email}
        InputLabelProps={{
          shrink: true,
        }}
        error={!isEmptyObj(errors.email)}
        helperText={!isEmptyObj(errors.email) ? errors.email.badEmail : ' '}
        onChange={(e) => onSetEmail(e.target.value)}
      />
    </FormControl>
  )
}

export default EmailInput;
