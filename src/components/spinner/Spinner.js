import React from 'react'
import spinnerImg from './../../assets/icons/cargando.png'
import './spinner.css'

const Spinner = ({ message }) =>{
    return (
        <div className="spinnerWrapper">
        <img
          className="spinner"
          src={spinnerImg}
          alt=""
        />
        <h2>{ message }...</h2>
      </div>
    )
}

export default Spinner;