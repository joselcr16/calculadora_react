import React from "react";
import logoReactLogo from '../imagenes/logo-react.jpg';
import '../App.css';

const Logo = (props) => (
    <div className="logoreact-logo-contenedor">
        <img 
            src = {logoReactLogo}
            className="logoreact-logo"
            alt="Logo de React"
        />
        {props.imgLogo}
    </div>
);

export default Logo;