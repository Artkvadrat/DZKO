import React from "react";
import './ErrorBoundary.css';
import error from '../../img/Icons/Error.png';

const ErrorBoundary = () => {
    return (
        <div className='container error'>
            <img src={error} alt="Error"/>
            <h2>Oooops...</h2>
            <h4>Something going wrong</h4>
            <h4>We try to fix it</h4>
        </div>
    )
};

export default ErrorBoundary;