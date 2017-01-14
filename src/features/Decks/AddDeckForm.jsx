import React from 'react';
import {TextField, RaisedButton, Slider} from 'material-ui';
import {indigo500} from 'material-ui/styles/colors';
import {Row,Col} from 'react-bootstrap';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import {browserHistory} from 'react-router';

const deckNameStyle = {
    fontFamily: '"Roboto", sans-serif',
    color: indigo500,
    textAlign: 'center',
};

export default class AddDeckForm extends React.Component {
    constructor () {
        super();
        this.submitForm = this.submitForm.bind(this);

        this.state = {
            name: '',
            description: '',
            difficulty: '',
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

    submitForm () {
        // if (!this.isValid()) return;
        this.props.onSubmit({...this.state, ownerId: this.props.userId});
        this.setState({
            name: '',
            description: '',
            difficulty: ''
        });
        browserHistory.push('/decks');
    }


    setValue (field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    }


    render () {

        return (
            <Row>

                <Row style={deckNameStyle}>
                <ArrowLeft style={{float: "left", height: "80px", width: "32px"}} onClick={browserHistory.goBack}/>
                <h1 >
                    New deck
                </h1>

                </Row>

                <Col mdOffset={3} md={6}>
                <div>
                    <TextField
                        fullWidth
                        name="name"
                        hintText="Name"
                        value={this.state.name}
                        onChange={this.setValue.bind(this, 'name')}
                    />
                    <br />
                    <TextField
                        fullWidth
                        name="description"
                        hintText="Description"
                        multiLine
                        value={this.state.description}
                        onChange={this.setValue.bind(this, 'description')}
                    />
                    <div style={{marginTop: '30px', fontFamily: '"Roboto", sans-serif'}}>
                        Difficulty 
                    </div>
                    <Slider 
                        name="difficulty"
                        step={0.2}
                        value={0.4}
                        onChange={this.setValue.bind(this, 'difficulty')}
                    />
                    <div style={{paddingTop: '30px'}}>
                        <RaisedButton label="Create deck" fullWidth secondary onClick={this.submitForm} />
                    </div>



                </div>
                </Col>
            </Row>


        );
    }
}
