import React, { useEffect } from 'react'
import './toastmessage.css'

const ToastMessage = ({response} ) =>{ 
  
  useEffect(() => {        
    setTimeout(() => {
      const toast = document.getElementById('toast');    
      toast.classList.toggle('disappear');
    }, 2000)
  }, [response])

  const ToastSuccess = () => {
    return(
      <div id="toast" className="messageWrapperSucess">
        <p>{ response.message }</p>
      </div>
    )
  }

  const ToastDanger = () => {
    return(
      <div id="toast" className="messageWrapperDanger">
        <p>{ response.errorMessage }</p>
      </div>
    )
  }
    return (     
      <>
      {
        !response ? null : 
        response.statusCode === 200 ? <ToastSuccess/> : <ToastDanger/>
      }
      </>
    )
}

export default ToastMessage;