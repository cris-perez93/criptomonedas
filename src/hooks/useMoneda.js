import { Fragment, useState,  } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
  
  color:black;
  font-weight:bold;
  font-size: 1.5rem;
  margin-top: 2rem;
  display: block;
  margin-bottom:1rem;

 


`;

const Select = styled.select`
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




const useMoneda = (label, stateInicial, opciones) => {

    //State de nuestro custom hook

    const [state, actualizarState] = useState(stateInicial);
    
    const Seleccionar =() =>(
         <Fragment>
             <Label>{label}</Label>
             <Select
              onChange = { e => actualizarState(e.target.value)}
              value ={state}
             >
                 <option value ="">--Seleccione--</option>
                 {opciones.map(opcion =>(
                     <option key ={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                 ))}
             </Select>
         </Fragment>

    );

    //Retornar state, interfaz y funcion que modifica el state.
    return [state, Seleccionar, actualizarState];

    
}
 
export default useMoneda;