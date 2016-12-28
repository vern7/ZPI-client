import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {TextField, RaisedButton, FlatButton} from 'material-ui';
import {yellow700} from 'material-ui/styles/colors';
import {Col} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {logIn} from './actions';
import {logInFacebook} from './actions';
import Loader from '../../components/Loader';


const headerStyle = {
    fontFamily: '"Dancing Script", Georgia, Times, serif',
    textAlign: 'center',
};

class LoginPage extends React.Component {
    constructor () {
        super();
        this.submitForm = this.submitForm.bind(this);
        this.loginRequest = this.loginRequest.bind(this);
        this.state = {
            username: '',
            password: ''
        };
    }

    isValid () {
        let form = this.state;
        for (let prop in form) {
            if (form[prop] === '') {
                return false;
            }
        }
        return true;
    }

    // to extract from file
    loginRequest (username, password) {
        this.props.logIn(username, password);
    }

    submitForm (ev) {
        ev.preventDefault();
        if (!this.isValid()) {
            return;
        }
        const {username, password} = this.state;
        console.log(`login with: ${username} , ${password}`);

        this.loginRequest(username, password);

        this.setState({
            username: '',
            password: '',
        });

    }

    setValue (field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    }

    responseFacebook = (response) => {
      this.props.logInFacebook(response.accessToken);
    }

    render () {


        return (
            <div style={{backgroundColor: 'white', textAlign: 'center'}}>
                <Col mdOffset={4} md={4}>
                    <div style={headerStyle}>
                        <h1>Log in</h1>
                    </div>
                    <TextField
                        name="username"
                        floatingLabelText="Username"
                        value={this.state.username}
                        floatingLabelStyle={headerStyle}
                        onChange={this.setValue.bind(this, 'username')}
                    />
                    <br />
                    <TextField
                        name="password"
                        floatingLabelText="Password"
                        type="password"
                        floatingLabelStyle={headerStyle}
                        value={this.state.password}
                        onChange={this.setValue.bind(this, 'password')}
                    />
                    <div>
                        <div style={{paddingTop: '30px'}}>
                            <RaisedButton label="Log in" primary onClick={this.submitForm} style={{width: '180px'}}/>
                        </div>
                        <div style={{paddingTop: '10px'}}>
                            <FacebookLogin
                                buttonStyle={ { fontSize: 12, padding: '9px 14px' } }
                                icon="fa-facebook"
                                size="medium"
                                appId="1690726437904491"
                                fields="name,email,picture"
                                callback={this.responseFacebook} />
                        </div>
                    </div>
                    <div style={{paddingTop: '20px', fontFamily: '"Dancing Script", Georgia, Times, serif',}}>
                        <div style={{color: yellow700}}>
                        or
                        </div>
                        <FlatButton label="Sign up" secondary onClick={() => browserHistory.push('welcome/signup')} />
                    </div>
                    {this.props.isLoggingIn ? <Loader /> : null}
                </Col>
            </div>


        );
    }
}

const mapStateToProps = state => ({
    isLoggingIn: state.user.isLoggingIn,
});

export default connect(mapStateToProps, {logIn, logInFacebook})(LoginPage);
