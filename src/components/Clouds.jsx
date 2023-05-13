import React, { useState } from 'react';

const Clouds = ({nubes}) => {
  const [nubesDescripcion, setnubesDescripcion] = useState(initialState)
  
  switch (nubes) {
    case valor1:
        setnubesDescripcion('Descripción de nubes para valor1');
      break;
    case valor2:
        setnubesDescripcion('Descripción de nubes para valor2');
      break;
    // ...
    case valorN:
        setnubesDescripcion('Descripción de nubes para valor3');
      break;
    default:
        setnubesDescripcion('Descripción de nubes para valor4');
      break;
  }
  
  return (
    <div>
      {/* {nubesDescripcion} */}
    </div>
  )
}

export default Clouds;
