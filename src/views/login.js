import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import Button from "../components/button";
import { isValidLoginForm } from '../model/authenticate';

function Login() {
  const initialErrors = {
    email: {},
    password: {}
  }
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');
  const [enabled, setEnabled] = useState(true);
  const [errors, setErrors] = useState(initialErrors);
  const navigate = useNavigate();

  useEffect(() => {
    setEnabled(isValidLoginForm(errors, email, password))
  }, [email, password, errors]);

  return(
    <>
      <h1>Inicia sesión</h1>
      <p>¡Qué bueno tenerte de vuelta!</p>
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
        text="Entrar"
        disabled={!enabled}
      />
      <p>¿Aún no tienes cuenta?&nbsp;
        <Link href="#" onClick={() => navigate("/signup")}>
          Regístrate
        </Link>
      </p>
    </>
  )
}

export default Login;
