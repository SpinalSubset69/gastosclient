import React, { useState } from 'react'
import { FetchCreateUser, UploadImg } from '../../api/FetchPlan'
import RegisterCard from '../../components/registercard/RegisterCard'
import ToastMessage from '../../components/toastmessage/ToastMessage';
import './signup.css'

const SignUp = () => {
    const [toastResponse, setToastResponse] = useState(null);

    const signUpUser = async(data, formData) => {            
        if (isNaN(data.initialAmount)) {
            const response = {
              statusCode: 400,
              errorMessage: "Ingrese una cantidad numerica",
            };
            setToastResponse(response);
            return;
          }          

        const response = await FetchCreateUser(data);                                         

        if(response.data){
                await UploadImg(formData, response.data._id);
            localStorage.setItem('token', response.token);
            window.location = '/home';
            return;
        }        

        if(response.errorMessage.includes('E11000')){
            const response = {
                statusCode: 400,
                errorMessage: "EL correo ya se encuentra en uso",
              };
              setToastResponse(response);
              return;
        }        

        if(response.errorMessage){
            setToastResponse(response);
            return;
        }
    
    }  

    return (
        <div className="signupWrapper">              
            <RegisterCard signUpUser ={ signUpUser }/>
            {toastResponse  ? <ToastMessage response={toastResponse}/> : null}     
        </div>
    )
}

export default SignUp;