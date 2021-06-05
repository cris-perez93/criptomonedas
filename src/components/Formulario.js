import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import {useEffect, useState} from 'react'
import axios from 'axios';
import Error from './Error';
import Imagen from '../imagen.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  
  @media (max-width: 1200px){
   margin-bottom :50px ;
   display: flex;
   flex-direction: column;
   width: 100%;
   justify-content:;
   align-items:center;
   margin-top: 10px;
   

  }

  
  

  
  `;

const Form = styled.form`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background-color: white;
  width: 50%;
  padding: ;
  @media (max-width: 1200px){
    width: 70%;
    
  }
  
          
            
    
`;

const CryptoImage = styled.img`
  width: 50%;
  
  @media (max-width: 1200px){
    width: 70%;
    
  }
`;


const Boton = styled.input`
  background: #222;
  height: 40px;
  width: 70%;
  border: none;
  color: #eee;
  font-size: 40px;
  position: relative;
  transition: 1s;
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  outline:none;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
 

  &:hover {
    background-color:rgba(236, 40, 138, 0.836);
    
    
    

  }
  
`

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {

  // state del listado de criptomonedas

  const [ listacripto, guardarCriptomonedas] = useState ([]);
  const [error, guardarError]= useState(false);

  const Monedas = [
    {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
    {codigo: 'MXN', nombre: 'Peso Mexicano'},
    {codigo: 'EUR', nombre: 'Euro'},
    {codigo: 'GBP', nombre: 'Libra'}
  ];
  
    // Utilizar useMoneda
    const [moneda, SelectMonedas,] = useMoneda('Elige tu moneda', '', Monedas);

    //Utilizar Criptomoneda

    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto);

    //Ejecutar llamado a la API
    useEffect(()=>{
        const consultarAPI = async ()=> {
           const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

           const resultado =await axios.get(url);
           guardarCriptomonedas(resultado.data.Data);
        }

         
        

        consultarAPI();
    },[]);

    //submit
    const cotizarMoneda = e => {
      e.preventDefault();

      //validar
      if(moneda ==='' || criptomoneda ===''){
        guardarError(true);
        return;
      }

      //pasar los datos al componente principal

      guardarError(false);
      guardarMoneda(moneda);
      guardarCriptomoneda(criptomoneda);

    }

    return (
      <Container>
         <CryptoImage src={Imagen}/>
        <Form
         onSubmit = {cotizarMoneda}
        >
          
           {error ? <Error mensaje="Todos los campos son obligatorios"/>: null}

           <SelectMonedas />

           <SelectCripto />

            <Boton
              type ="submit"
              value="Calcular"
            />

        </Form>
        </Container>
      );
}
 
export default Formulario;