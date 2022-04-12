import React from "react";
import { FormControl, TextField } from '@mui/material';
import { isEmptyObj } from '../utils';
import { getEmptyWordError } from '../model/authenticate';

function UserName({
  errors,
  isFullWidth,
  fieldName,
  placeholder,
  userName,
  onSetUserName,
  onSetErrors,
}) {
  return (
    <FormControl fullWidth={isFullWidth} >
      <TextField
        onBlur={() => onSetErrors(getEmptyWordError('userName', userName, errors))}
        id={fieldName}
        placeholder={placeholder}
        name={fieldName}
        variant="outlined"
        size={'small'}
        value={userName}
        InputLabelProps={{
          shrink: true,
        }}
        error={!isEmptyObj(errors.userName)}
        helperText={!isEmptyObj(errors.userName) ? errors.userName.emptyWord : ' '}
        onChange={(e) => onSetUserName(e.target.value)}
      />
    </FormControl>
  )
}

export default UserName;
