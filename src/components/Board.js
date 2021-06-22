import React, {useState} from 'react'
import Square from './Square'
import styled from 'styled-components'
const Grid = styled.div `
display:grid;
grid-template-columns:repeat(3,1fr);
width:350px;
height:350px;
margin-top:20px;
@media (min-width:320px) and (max-width:480px){
  width:330px;
  height:330px;
  font-size:20px;
  font-weight:800;
  margin-top:5px;
  }
`
const Board = ({squares,onClick}) =>  {
    return (
      <Grid>
        {squares.map((square, i)=>(
            <Square key={i} value={square} onClick={()=>onClick(i)}/>
        ))}
      </Grid>
    );  
}
export default Board;
