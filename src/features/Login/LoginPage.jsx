import React from 'react';
import {TextField, RaisedButton, FlatButton} from 'material-ui';
import {yellow700} from 'material-ui/styles/colors';
import {Col} from 'react-bootstrap';

const headerStyle = {
    color: yellow700,
    fontFamily: '"Dancing Script", Georgia, Times, serif',
};

export default class LoginPage extends React.Component {
    constructor () {
        super();
        this.submitForm = this.submitForm.bind(this);
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

    submitForm (ev) {
        ev.preventDefault();
        if (!this.isValid()) {
            return;
        }
        const {username, password} = this.state;
        console.log(`login with: ${username} , ${password}`);

    // login action

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

    componentWillMount () {
        // ugly hacks
        document.body.style.backgroundImage = 'url(/images/background1.jpg)';
        document.body.style.backgroundSize = '100%';
        document.body.style.backgroundRepeat = 'no-repeat';

    }
    componentWillUnmount () {
        // ugly hacks
        document.body.style.backgroundImage = null;
    }


    render () {


        return (
            <div>
                <Col mdOffset={4} md={4}>
                    <div style={headerStyle}>
                        <h1>Log in to Flash Learn</h1>
                    </div>
                    <TextField
                        inputStyle={{color: 'white'}}
                        name="username"
                        floatingLabelText="Username"
                        value={this.state.username}
                        floatingLabelStyle={headerStyle}
                        onChange={this.setValue.bind(this, 'username')}
                    />
                    <br />
                    <TextField
                        inputStyle={{color: 'white'}}
                        name="password"
                        floatingLabelText="Password"
                        type="password"
                        floatingLabelStyle={headerStyle}
                        value={this.state.password}
                        onChange={this.setValue.bind(this, 'password')}
                    />
                    <div style={{paddingTop: '30px'}}>
                        <RaisedButton label="Log in" primary onClick={this.submitForm} />
                    </div>
                    <div style={{paddingTop: '20px', paddingLeft: '100px', fontFamily: '"Dancing Script", Georgia, Times, serif',}}>
                        <div style={{color: yellow700}}>
                        or
                        </div>
                        <FlatButton label="Sign up" secondary linkButton href={'/signup'} />
                    </div>
                </Col>
            </div>


        );
    }
}
