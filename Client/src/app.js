import React, {Component} from 'react'
import axios from 'axios'
import Authentication from './Components/Authentication/Authentication';


class App extends Component {
    state = {

    }

    render(){
       
        return(
            <React.Fragment>
                <Authentication />
            </React.Fragment>
        )
    }
}

export default App