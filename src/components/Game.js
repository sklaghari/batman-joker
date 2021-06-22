import React, {useState} from 'react'
import Board from './Board'
import CalculateWinner from './helperFunction'
import styled,{css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp,faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube,faGithub,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons' 
import joker from '../../public/images/joker.png'
import batman from '../../public/images/Batman.png'
import useAudio from '../newHooks/useAudio'
import backgroundMusic  from '../../public/sounds/background.mp3'
import jokerLaugh from '../../public/sounds/joker.wav'
import batmanVictory from '../../public/sounds/batman.wav'
import Audio from '../components/Audio'
const Wrapper = styled.div `
display:grid;
grid-column-gap:0;
grid-row-gap:0;
`
const TopContainer = styled.div `
display:grid;
grid-template-columns:repeat(12,1fr);
grid-column-gap:0;
`
const SocialMediaDiv = styled.div`
grid-column-start:1;
gri.column-end:3;
margin:0;
display:flex;
align-items:center;
justify-content:center;
@media (min-width:320px) and (max-width:480px){
grid-column-start:1;
grid-column-end:12;
}
`
const H2 = styled.h2`
grid-column-start:3;
grid-column-end:10;
display:flex;
align-items:center;
justify-content:center;
font-size:62px;
font-weight:800;
text-transform:uppercase;
margin:0;
font-family: 'Raleway',sans-serif; 
background: -webkit-linear-gradient(#cb218e, #333);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
@media (min-width:320px) and (max-width:480px){
  grid-column-start:1;
  grid-column-end:13;
  font-size:32px;
  font-weight:800;
}
`
const SpeakerDiv = styled.div`
grid-column-start:11;
grid-column-end:13;
display:flex;
align-items:center;
justify-content:center;
margin:0;
@media (min-width:320px) and (max-width:480px){
  display:none;
}
`
const SpeakerDivSmall = styled.div`
@media (min-width:481px){
  display:none;
}
@media (min-width:320px) and (max-width:480px){
  grid-column-start:11;
  grid-column-end:13;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0;
}`
const MiddleContainer = styled.div `
display:grid;
grid-template-columns:repeat(12,1fr);
grid-column-gap:0;
`
const H5 = styled.h5`
grid-column-start:1;
grid-column-end:13;
display:flex;
align-items:center;
justify-content:center;
font-size:32px;
font-weight:800;
text-transform:uppercase;
margin:0;
font-family: 'Raleway',sans-serif; 
background: -webkit-linear-gradient(#cb218e, #333);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
@media (min-width:320px) and (max-width:480px){
  font-size:20px;
  font-weight:800;
  margin-top:5px;
  }
`
const BoardDiv = styled.div `
display:grid;
align-self:center;
justify-self:center;
grid-column-gap:0;
grid-row-gap:0;
`
const BottomDiv = styled.div `
display:grid;
grid-template-columns:repeat(12,1fr);
grid-column-gap:0;
grid-row-gap:0;
@media (min-width:320px) and (max-width:480px){
  grid-template-columns:repeat(3,1fr);
  }
`
const Ul = styled.ul`
list-style-type:none;
`
const Button  = styled.button `
width:110px;
height:50px;
font-size:14px;
border:none;
outline:none;
color:#fff;
cursor:pointer;
border-radius:10px;
background-color #3f0d12;
background-image linear-gradient(315deg, #3f0d12 0%, #a71d31 74%);
@media (min-width:320px) and (max-width:480px){
  width:60px;
  height:40px;
  font-size:11px;
  border-radius:5px;
  }  
`
const SocialButton = styled.a `
padding:8px;
font-size:20px;
margin:5px;
width:16px;
height:16px;
text-decoration:none;
border-radius:20%;
color:white;
display:flex;
align-items:center;
justify-content:center;
${props=>
props.facebook && 
css`
background: #3B5998;
color: white;
`}
${props=>
  props.twitter && 
  css`
  background: #55ACEE;
  color: white;
`}
${props=>
  props.youtube && 
  css`
  background: #bb0000;
  color: white;
`}
${props=>
  props.instagram && 
  css`
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  -webkit-text-fill-color: transparent;
  color: white;
`}
${props=>
  props.github && 
  css`
  background: #333;
  color: white;
`}
`


const Game = () =>  {
 const [playing,toggle] = useAudio(backgroundMusic)
 const [history, setHistory] = useState([Array(9).fill(null)])
 const [stepNumber, setStepNumber] = useState(0)
 const [xIsnext,setXIsNext] = useState(true)
 const winner = CalculateWinner(history[stepNumber])
 let status;
 if(winner && winner!=='Draw'){
  status = winner + ' : wins'
}
else if(winner && winner == 'Draw'){
  status = ' Draw '
}
else{
  status = 'Next Move : ' + (xIsnext? 'Joker' : 'Batman')
}
 const handleClick=(i)=>{
    const timeInHistory = history.slice(0, stepNumber+1)
    const current  = timeInHistory[stepNumber]
    const squares = [...current]
    if(squares[i] || winner){
      return
    }
    squares[i] = xIsnext ? joker : batman
    setHistory([...timeInHistory,squares])
    setStepNumber(timeInHistory.length)
    setXIsNext(!xIsnext)
  }
  const jumpTo = step =>{
    setStepNumber(step)
    setXIsNext(step%2 === 0)
  }
  const listOfMoves=()=>(
    history.map((_step, move)=>{
      const destination = move? 'Go to move' + move : 'Start Game'
      return(
        <Ul>
          <li key ={move}>
            <Button onClick={()=>jumpTo(move)}>{destination}</Button>
          </li>
        </Ul>
      )
    })
  )
  const renderSound = () =>{
    if(winner==='Joker'){
      return(
        <Audio sound={jokerLaugh}/>
      )
    }
    else if(winner==='Batman'){
      return(
        <Audio sound={batmanVictory}/>
      )
    }
  }
  

    return (
      <Wrapper>
        <TopContainer>
          <SocialMediaDiv>
            <SocialButton facebook href='https://www.facebook.com/sklaghari/' target ='_blank'>
              <FontAwesomeIcon icon={faFacebook}/>
            </SocialButton>
            <SocialButton twitter href='https://twitter.com/sklaghari' target ='_blank'>
              <FontAwesomeIcon icon={faTwitter}/>
            </SocialButton>
            <SocialButton youtube href='' target ='_blank'>
              <FontAwesomeIcon icon={faYoutube}/>
            </SocialButton>
            <SocialButton instagram href='https://www.instagram.com/sklaghari/' target ='_blank'>
              <FontAwesomeIcon icon={faInstagram}/>
            </SocialButton>
            <SocialButton github href='https://github.com/sklaghari' target ='_blank'>
              <FontAwesomeIcon icon={faGithub}/>
            </SocialButton>
            <SpeakerDivSmall onClick={toggle}>{playing?<FontAwesomeIcon icon={faVolumeUp} size='1x'/>
            :<FontAwesomeIcon icon={faVolumeMute} size='1x'/>}</SpeakerDivSmall>
          </SocialMediaDiv>
          <H2>Gotham City</H2>
          <SpeakerDiv onClick={toggle}>{playing?<FontAwesomeIcon icon={faVolumeUp} size='2x'/>:<FontAwesomeIcon icon={faVolumeMute} size='2x'/>}</SpeakerDiv>
        </TopContainer>
        <MiddleContainer><H5>{status}</H5></MiddleContainer>
        <BoardDiv><Board onClick={i =>handleClick(i)} squares={history[stepNumber]} /></BoardDiv>
        <BottomDiv>{listOfMoves()}</BottomDiv>
        <div>{renderSound()}</div>
      </Wrapper>
    );  
}
export default Game;
