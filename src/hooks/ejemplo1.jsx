import React, { useState } from 'react';

const Ejemplo1 = () => {


    // Valor inicial para un contador
    const valorInicial = 0
    

    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@imaginagroup.com'
    }

    // Queremos que el VALORINICIAL y PERSONAINICIAL sean
    // parte del estado del componente para asi poder gestionar su cambio
    // y que este se vea reflejado en la vista del componente

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)



    // Funcion para actualizar el estado privado que contiene el contador
    function incrementarContador(){
      setContador(contador + 1)
    }

    // Funcion para actualizar el estado de persona en el componente
    function actualizarPersona(){
      setPersona({
        nombre: 'Julio',
        email: 'julio@gmail.com'
      })
    }



    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
}

export default Ejemplo1;
