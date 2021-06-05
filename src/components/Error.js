import styled from '@emotion/styled'

const MensajeError = styled.p`
  background-image: linear-gradient(45deg, #f3666a 0%, #fad0c4 99%, #fad0c4 100%);
  padding: 3px;
  color: whitesmoke;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight:bold;
  text-align:center;
  border-radius:5px;
  width: 90%;
  
`

const  Error = ({mensaje}) => {
    return (
        <MensajeError>{mensaje}</MensajeError>
      );
}
 
export default  Error;