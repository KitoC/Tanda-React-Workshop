import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import styles from './styles.module.css';
let t;

class Login extends Component {
    state = { email: '', password: '', token: '' };

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit = () => {
        const { email, password } = this.state
        axios.post(
            "http://social.workshops.tanda.co/login",
            { email, password }
        ).then(res => {
            setTimeout(() => {
                this.setState({
                    token: res.data.token,
                });
            }, 1000);
        })
            .catch((e) => {
                console.log(e);
                alert('Login failed!')
            })
    }
    //same as constructor with super and this properties


    //rather than using a default value 
    //- we have control what goes in the DOM

    render() {
        const color = t ? 'aliceblue' : 'lightyellow';
        t = !t;
        return (
            <div style={{ backgroundColor: color }}>
                <h1>Tanda Social Network</h1>
                <input autoFocus onChange={this.onEmailChange} value={this.state.email} type="email" />
                <input onChange={this.onPasswordChange} value={this.state.password} type="password" />
                <button onClick={this.onSubmit}>Submit</button>
                {this.state.token && <p>You've been logged in!</p>}
            </div>
        )
    }

}

ReactDOM.render(
    <div className={styles.app}>
        <Login />
    </div>,
    document.getElementById('root')
);

registerServiceWorker();