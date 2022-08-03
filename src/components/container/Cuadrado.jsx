import React, { useState } from 'react';

const Cuadrado = () => {

  let red = Math.random()*(255- 0) + 0;
  let green = Math.random()*(255- 0) + 0;
  let blue = Math.random()*(255- 0) + 0;



    const [color, setColor] = useState(true)

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





    return (
        <div
        onMouseEnter={() => setColor(false)}
        onMouseOut={() => setColor(true)}
        onDoubleClick={() => console.log('Double Click')}
        style={color ? colorBlack : randomColor}>
            
        </div>
    );
}

export default Cuadrado;
