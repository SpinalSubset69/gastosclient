import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import "./logincard.css";
import  { IsValidToken }  from "../../api/FetchPlan";

const LoginCard = ({ SignInUser }) =>{
  const [isFetching, setIsFetching] = useState(false);  

  useEffect(() => {    
    async function fetchToken() {
      const validatedToken = await IsValidToken();
      if(validatedToken){
        window.location = '/home'
      }
    }
    fetchToken();
  }, []);

  const LoginCardBody = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();    
      setIsFetching(true);
      const data = { email, password };
      await SignInUser(data);
      setIsFetching(false);    
    };

    return (
      <div className="loginCardContainer">
        <form onSubmit={handleSubmit} className="loginCardForm" action="">
          <h1 className="loginCardTitle">Gastos App</h1>
          <p className="loginCardSpan">Email: </p>
          <input
            value={email}
            className="loginCardInput"
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="loginCardSpan">Password: </p>
          <input
            value={password}
            className="loginCardInput"
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginCardLogInButton">
            Log In
          </button>
        </form>
        <div className="signUpContent">
          <p>
            No tienes una cuenta aun??{" "}
            <Link className="signUpLink" to="/signup">
              Crea una cuenta!!!
            </Link>
          </p>
        </div>        
      </div>
    );
  };

  return (
    <div className="loginCardWrapper">
      {isFetching ? <Spinner message="Cargando" /> : <LoginCardBody />}
    </div>
  );
}

export default LoginCard;