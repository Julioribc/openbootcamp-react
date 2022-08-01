import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Julio')


    function showMessage(text){
      alert(`Message received: ${text} `)
    }


    function updateName(newName){
      console.log(name)
      setName(newName)
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    );
}

export default Father;
