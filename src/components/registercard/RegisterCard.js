import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import "./registercard.css";

const RegisterCard = ({ signUpUser }) => {
  const [isFetching, setIsFetching] = useState(false);

  const SignUpCardBody = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [initialAmount, setInitialAmount] = useState("");
    const [username, setUsername] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();      
      const formElement = document.getElementById('formElement');      
      const formData = new FormData();
      formData.set('file', formElement.files[0]);

      setIsFetching(true);
      const data = { email, password, initialAmount, username };
      await signUpUser(data, formData);      
      setIsFetching(false);
      
    };

    return (
      <div className="registerCardContainer">
        <form onSubmit={handleSubmit} className="registerCardForm" id="  " action="">
          <h1 className="registerCardTitle">Crear Cuenta Nueva:</h1>

          <div className="inputsContainer">
            <div className="formInputs">
              <p className="registerCardSpan">Email: </p>
              <input
                value={email}
                className="registerCardInput"
                type="email"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="registerCardSpan">Password: </p>
              <input
                value={password}
                className="registerCardInput"
                type="password"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
        
            <div className="formInputs">
              <p className="registerCardSpan">Nombre Usuario: </p>
              <input
                value={username}
                className="registerCardInput"
                placeholder="Username..."
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="registerCardSpan">Dinero Inicial: </p>
              <input
                value={initialAmount}
                className="registerCardInput"
                placeholder="Initial amount..."
                onChange={(e) => setInitialAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="inputFileContainer">
            <p>Foto de Perfil</p>
            <input id="formElement" className="inputFile" type="file" />
          </div>
          <button type="submit" className="registerCardSignUpButton">
            Registrarse
          </button>
        </form>
        <div className="signUpWrapper">
          <p>
            Ya tienes una cuenta??{" "}
            <Link className="signUpLink" to="/">
              Inicia sesion!!!
            </Link>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="registerCardWrapper">
      {isFetching ? <Spinner message="Cargando" /> : <SignUpCardBody />}
    </div>
  );
};
export default RegisterCard;
