import React from 'react';
import Greeting from './Greeting';

function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        }else{
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        let notiCount = 1;

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}

                {isLoggedIn &&
                <div>
                    <h5>{new Date().toLocaleDateString()}</h5>
                    {/* {notiCount > 0 &&
                    <h5>{'New noti : ' + notiCount}</h5>}
                    <h5>{'How are you today?'}</h5> */}
                    {notiCount > 0?
                    <h5>{'New noti : ' + notiCount}</h5>
                    // : <h5>{'No notification'}</h5>}
                    :null}
                </div>}
            </div>
        );
    }
}

export default LoginControl;