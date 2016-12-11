import React from 'react';
import {TextField, RaisedButton, Slider, SelectField, MenuItem} from 'material-ui';
import {Row,Col} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class AddDeckForm extends React.Component {
    constructor () {
        super();
        this.submitForm = this.submitForm.bind(this);

        this.state = {
            name: '',
            description: '',
            difficulty: '',
            language: ''
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
            difficulty: '',
            language: ''
        });
        browserHistory.push('/decks');
    }


    setValue (field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);

    }

    setLanguage = (event, index, value) => this.setState({language: value});

    renderLanguages() {
      return this.props.languages.map((language) => (
        <MenuItem key={language._id.$oid} value={language._id.$oid} primaryText={language.language} />
      ));
    }

    render () {

        return (
            <Row>
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
                    <SelectField
                        name="language"
                        floatingLabelText="Language"
                        value={this.state.language}
                        onChange={this.setLanguage}
                    >
                      {this.renderLanguages()}
                    </SelectField>

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
