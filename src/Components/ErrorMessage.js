import React from 'react';
import './ErrorMessage.css'
const ErrorMessage = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">

        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button className='btn btn-secondary ' id='closeModal' onClick={props.onClose}>Okay</button>
      </div>
    </div>
  );
};

export default ErrorMessage;