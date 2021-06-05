import { Fragment, useState } from "react";
import styled from '@emotion/styled';



const Label = styled.label`
  
  color:black;
  font-weight:bold;
  font-size: 1.5rem;
  margin-top: 2rem;
  display: block;
  margin-bottom:1rem;
  width: 90%;


`;

const Selection = styled.select`
    position: relative;
    overflow: hidden;
    display: block;
    width:80%;
    height:40px;
    border: none;
    border-bottom: solid 1px black;
    font-size: 16px;
    margin-bottom:1rem;
    outline: none;
    border-inline-style: none;
    font-family: 'Poppins', sans-serif;
    
    

`;




const useCriptomoneda = (label, stateInicial, opciones) => {

    //State de nuestro custom hook

    const [state, actualizarState] = useState(stateInicial);
    
    const SelectCripto =() =>(
         <Fragment>
             <Label>{label}</Label>
             <Selection
              onChange = { e => actualizarState(e.target.value)}
              value ={state}
             >
                 <option value ="">--Seleccione--</option>
                 {opciones.map(opcion =>(
                     <option key ={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                 ))}
             </Selection>
         </Fragment>

    );

    //Retornar state, interfaz y funcion que modifica el state.
    return [state, SelectCripto, actualizarState];

    
}
 
export default useCriptomoneda;