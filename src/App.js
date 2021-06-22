import React, {Fragment} from 'react'
import Game from './components/Game'
import GlobalStyle from './theme/globalStyles';
const App = () =>  {
    return (
        <Fragment>
            <GlobalStyle/>
            <Game/>
        </Fragment>
    );  
}
export default App;
