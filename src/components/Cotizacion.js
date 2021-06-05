import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
width:60%;
transition: ease-in-out .7;
@media (max-width: 1200px){
    width: 60%;
    margin-bottom: 50px;
    
  }

  @media (max-width: 700px){
      display: flex;
      flex-direction: column;
      gap:5px;
      width:100%;
  }
     
`;

const Datos = styled.p`
 
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: transparent;
 border:solid 1px white;
 margin-left: 10px;
 height: 125px;
 padding: 5px;
 width: 40%;
 color: white;
 transition: ease-in-out .4s;

 :hover{
    box-shadow:0 5px 5px rgba(194, 14, 89, 0.5);
    transform:translateY(-5px);
 }
 
`;

const Precio = styled.span`
 font-weight:bold;
`


const Cotizacion = ({resultado}) => {

    if(Object.keys(resultado).length === 0) return null;

    

    return ( 
         <ResultadoDiv>
             <Datos>El precio es: <Precio>{resultado.PRICE}</Precio></Datos>
             <Datos>El precio mas alto del dia: <Precio>{resultado.HIGHDAY}</Precio></Datos>
             <Datos>El precio mas bajo del dia: <Precio>{resultado.LOWDAY}</Precio></Datos>
             <Datos>Variación de las últimas 24h: <Precio>{resultado.CHANGEPCT24HOUR}</Precio></Datos>
             <Datos>Última actualización: <Precio>{resultado.LASTUPDATE}</Precio></Datos>
         </ResultadoDiv>

     );
}
 
export default Cotizacion;