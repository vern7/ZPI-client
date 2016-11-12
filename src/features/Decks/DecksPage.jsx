import React from 'react';
import {connect} from 'react-redux';
import {getUserId} from '../../api/user';
import Decks from './Decks';
import {fetchAllDecks} from '../../api/decks';
import {receiveDecks} from './duck';

class DecksPage extends React.Component {

    componentDidMount () {
        this.fetchDecks();
    }

    componentDidUpdate () {
        this.fetchDecks();
    }

    fetchDecks () {
        fetchAllDecks().then(decks => this.props.receiveDecks(decks));
    }

    render () {
        return (
            <Decks {...this.props} />
        );
    }
}



const mapStateToProps = state => ({
    myDecks: state.decks.filter(deck => deck.ownerId === getUserId()),
    otherDecks: state.decks.filter(deck => deck.ownerId !== getUserId())
});

// shorthand notation for map actions to props 
export default connect(mapStateToProps, {receiveDecks})(DecksPage);
