import React from "react";
import { Button } from '@mui/material';

function InputButton({disabled, text, onClick}) {

  return(
    <Button
      variant="contained"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default InputButton;