import React, { useState } from 'react';



// Definiendo estilos en constantes:


// ? Estilos para usuario logeado
const loggedStyle = {
    color: 'white'
}

// ? Estilos para usuario no logeado
const unLoggedStyle = {
  color: 'tomato',
  fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Generamos un estado para el componente
    // y asi controlar si el usuario esta o no logueado

    const [logged, setLogged] = useState(false)

    const greetingUser = () => (<p>Hola, {props.name}</p>);
    const pleaseLogin = () => (<p>Please login</p>);

    return (
        <div style={ logged ? loggedStyle : unLoggedStyle }>
            { logged ? greetingUser() : pleaseLogin() }
            <button onClick={() => {
              console.log('Boton pulsado');
              setLogged(!logged);
            }}>
              { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
