import React, { useState } from 'react';

const Cuadrado = () => {

  let red = Math.random()*(255- 0) + 0;
  let green = Math.random()*(255- 0) + 0;
  let blue = Math.random()*(255- 0) + 0;



  
  const colorBlack = {
    'width': '255px',
    'height': '255px',
    'backgroundColor': 'black'
  }
  
  const randomColor = {
    'width': '255px',
    'height': '255px',
    'backgroundColor': `rgb(${red}, ${green}, ${blue})`
  }

  const stopColor = {
    'width': '255px',
    'height': '255px',
    'backgroundColor': 'white'
  }

  
  const [color, setColor] = useState(colorBlack)




    return (
        <div
        onMouseEnter={() => setColor(randomColor)}
        onMouseOut={() => setColor(colorBlack)}
        onDoubleClick={() => setColor(stopColor)}
        style={color}>
            
        </div>
    );
}

export default Cuadrado;
