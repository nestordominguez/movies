import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import { useDispatch } from 'react-redux';
import UserName from "../components/userName";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import Button from "../components/button";
import { isValidSignupForm, getAuthenticateUrl } from '../model/authenticate';
import { getToken } from '../model/authenticate/authenticateSlice';

function SignUp({requestToken, shouldRedirect}) {
  const initialErrors = {
    userName: {},
    email: {},
    password: {}
  };
  const [userName, setUserName] = useState('');
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');
  const [enabled, setEnabled] = useState(true);
  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    setEnabled(isValidSignupForm(errors, email, password, userName))
  }, [email, password, errors, userName]);

  useEffect(() => {
    if(shouldRedirect && requestToken) {
      window.location.href = getAuthenticateUrl(requestToken);
    }
  }, [shouldRedirect, requestToken]);

  return(
    <>
      <h1>Regístrate</h1>
      <p>¡Disfruta de una experiencia personalizada!</p>
      <UserName
        userName={userName}
        placeholder="Nombre de usuario"
        fieldName="UserName"
        onSetUserName={username => setUserName(username)}
        onSetErrors={(e) => setErrors(e)}
        errors={errors}
        isFullWidth={false}
      />
      <EmailInput
        email={email}
        placeholder="Correo electrónico"
        fieldName="Email"
        onSetEmail={email => setEamil(email)}
        onSetErrors={(e) => setErrors(e)}
        errors={errors}
        isFullWidth={false}
      />
      <PasswordInput
        password={password}
        placeholder="Contraseña"
        fieldName="Password"
        onSetPassword={password => setPassword(password)}
        onSetErrors={(e) => setErrors(e)}
        errors={errors}
        isFullWidth={false}
      />
      <Button
        text="Registrarse"
        disabled={!enabled}
        onClick={() => dispatch(getToken())}
      />
      <p>¿Ya tienes cuenta?&nbsp;
        <Link href="#" onClick={() => navigate("/login")}>
          Inicia sesión
        </Link>
      </p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    requestToken: state.authenticate.request_token,
    shouldRedirect: state.authenticate.shouldRedirect,
  }
}

export default connect(mapStateToProps)(SignUp);
