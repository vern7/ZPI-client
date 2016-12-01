import React from 'react';
import {connect} from 'react-redux';
import Decks from './Decks';
import {loadDecks} from './actions';

class DecksPage extends React.Component {

    componentDidMount () {
        this.props.loadDecks();
    }

    render () {
        return (
            <Decks {...this.props} />
        );
    }
}


// @TODO use selectors
const mapStateToProps = state => ({
    myDecks: state.deck.decks.filter(deck => deck.ownerId === state.user.profile.userId && !deck.favorite),
    otherDecks: state.deck.decks.filter(deck => deck.ownerId !== state.user.profile.userId && !deck.favorite),
    favoriteDecks: state.deck.decks.filter(deck => deck.favorite),
    isFetching: state.deck.isFetching,
});

export default connect(mapStateToProps, {loadDecks})(DecksPage);
