import React, { useState, useEffect } from 'react';

const Clock = () => {

    const initialTime = {
      fecha: new Date(),
      age: 0,
      name: 'Julio',
      lastName: 'Bolivar'
    }

    const [data, setData] = useState(initialTime)

    function tick(){
      setData({
        ...data, 
        age: data.age + 1,
        fecha: new Date(),

      })
    }

    useEffect(() => {
      const timerID = setInterval(() => {
        tick()
      }, 1000);


      return () => {
        clearInterval(timerID);
      };
    }, [data]);


    return (
        <div>
           <h2>Hola Actual: {data.fecha.toLocaleTimeString()}</h2>
           <h3>{data.name} {data.lastName}</h3>
           <h1>{data.age}</h1>
           <button onClick={tick}>Increase Age</button>
        </div>
    );
}

export default Clock;
