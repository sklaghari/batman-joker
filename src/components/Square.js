import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background-color: rgba(255,255,255,0.8);
border: 5px solid black;
box-shadow:0 0 10px #9ecaed;
text-align:center;
@media (min-width:320px) and (max-width:480px){
    width:110px;
    height:110px;
}
`
const Img = styled.img`
border:0
@media (min-width:320px) and (max-width:480px){
    width: 80px; 
    height: 80px; 
    margin:0  
  }
`
const Sqaure = ({onClick,value}) => (
<Button onClick={onClick}>
    <Img height='100px' width='100px' src={value}/>    
</Button>
)

export default Sqaure;