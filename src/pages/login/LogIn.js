import React, { useState } from 'react'
import LoginCard from '../../components/logincard/LoginCard'
import './login.css'
import { SignIn } from '../../api/FetchPlan';
import ToastMessage from '../../components/toastmessage/ToastMessage';

const LogIn = () => {
    const [toastResponse, setToastResponse] = useState(null);

    const SignInUser = async (data) => {
        const response = await SignIn(data);      
        if(response.token){
            localStorage.setItem('token', response.token);
            window.location = '/home';
            return;
          }
          setToastResponse(response);
    }

    return (
        <div className="loginWrapper">
            <LoginCard SignInUser={SignInUser}/>
            <div className="toastContainer">
            {toastResponse ? <ToastMessage response={toastResponse}/> : null}
                </div>            
        </div>
    )
}

export default LogIn;
