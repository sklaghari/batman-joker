import { createGlobalStyle } from "styled-components";
import backgroudImage from '../../public/images/background.jpg'
const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding:0;
    font-family:Roboto;
    color:white;
    height:auto;
    background-image: url(${backgroudImage});
    background-size:cover;
    background-attachment:fixed;
    background-repeat:no-repeat;
}
`
export default GlobalStyle