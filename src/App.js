

import styled from 'styled-components';
import Formulario from './components/Formulario';
import {useState, useEffect, Fragment} from  'react';
import axios from 'axios';
import Cotizacion from './components/Cotizacion';




const Contenedor = styled.div`

   display: flex;
   flex-direction: column;
   width: 100%;
   margin-top:20px;

   @media (max-width: 1200px){
   
     
    
  }
   
   
   
`;



const Heading = styled.h1`


color:rgb(236, 40, 138);
padding: 20px;
width: 100%;

`;

const ContenedorFlex = styled.div`
 
 display: flex;
 align-items: center;
 justify-content:space-evenly;
 width: 80%;
 margin: auto;

 @media (max-width: 1200px){
   display:flex;
   flex-direction: column;
   width: 100%;
   
}
 
`;

function App() {

  const[moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState ({});

  useEffect(()=>{

    const cotizarCriptomoneda = async () =>{

      //evitamos la ejecución la primera vez
    if (moneda ==='') return;

    //consultar la api para la cotizacion.
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    const resultado = await axios.get(url);

    guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);

    }

    cotizarCriptomoneda();

 },[moneda, criptomoneda]);

  return (

    <Fragment>
    <Heading>CryptoCris</Heading>
    <Contenedor>
      
    <ContenedorFlex>
      <Formulario
          guardarMoneda ={guardarMoneda}
          guardarCriptomoneda ={guardarCriptomoneda}
          

        />
         <Cotizacion
           resultado = {resultado}
        />
      </ContenedorFlex>
       
       
    </Contenedor>
    </Fragment>
 
  );
}

export default App;
