import { getAccordionActionsUtilityClass } from '@mui/material';
import { isEmptyObj } from '../../utils';
import { requestToken } from './authenticateApi';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateEmptyWord = word => {
  return word !== ""
}

const hasError = errors => {
  let isError = false;
  for(let error in errors) {
    if(!isEmptyObj(errors[error])) {
      isError = true;
      break;
    }
  }
  return isError;
}

export const getErrorEmail = (email, {...errors}) => {
  const BAD_EMAIL = "el email ingresado no es correcto";

  if(validateEmail(email)) {
    if( errors.email.badEmail) {
      delete errors.email.badEmail
    }
  } else {
    errors.email.badEmail = BAD_EMAIL;
  }
  return errors;
}

export const getEmptyWordError = (kind, word, {...errors}) => {
  const EMPTY_PASSWORD = "contraseña no válida";
  const EMPTY_USERNAME = "ingrese un nombre de usuario";

  if(validateEmptyWord(word)) {
    if( errors[kind].emptyWord) {
      delete errors[kind].emptyWord
    }
  } else {
    errors[kind].emptyWord = kind === 'password' ? EMPTY_PASSWORD : EMPTY_USERNAME;
  }
  return errors;
}

export const isValidLoginForm = (errors, email, password) => {
  return !hasError(errors) && !!validateEmail(email) && validateEmptyWord(password)
}

export const isValidSignupForm = (errors, email, password, userName) => {
  return !hasError(errors)
    && !!validateEmail(email)
    && validateEmptyWord(password)
    && validateEmptyWord(userName)
}

export const getAuthenticateUrl = requestToken => {
  return `https://api.themoviedb.org/3/account?api_key=e08815ebb9a68b5816a9e3ae26b751e1`
}

export const getAccountDetails = requestToken => {
  return `https://api.themoviedb.org/3/account?api_key=e08815ebb9a68b5816a9e3ae26b751e1`
}