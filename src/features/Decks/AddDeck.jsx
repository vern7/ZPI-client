import React from 'react';
import {connect} from 'react-redux';
import AddDeckForm from './AddDeckForm';
import {createDeck, loadLanguages} from './actions';

class AddDeck extends React.Component {

    componentDidMount () {
        this.props.loadLanguages();
    }

    render () {
        return (<AddDeckForm {...this.props} />);
    }
}

const mapDispatchToProps = dispatch => ({
    loadLanguages: () => dispatch(loadLanguages()),
    onSubmit: (doc) => dispatch(createDeck(doc))
});

const mapStateToProps = state => ({
    userId: state.user.profile.userId,
    languages: state.deck.languages,
    isFetching: state.deck.isFetching
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
