import React from 'react';
import {browserHistory} from 'react-router';
import DeckView from './DeckView';
import {connect} from 'react-redux';
import {getUserId} from '../../api/user';
import {deleteDeck} from './actions';
import {saveCards, loadCards} from '../Cards/actions';
import _ from 'lodash';

class DeckViewPage extends React.Component {

    componentDidMount () {
        this.props.loadCards(this.props.deck._id);
    }

    render () {
        return (
            <DeckView {...this.props} />
        );
    }
}

const onDelete = (deckId) => {
    browserHistory.push('/decks');
    deleteDeck(deckId);
};

const mapStateToProps = (state, ownProps) => {
    const deck = _.find(state.deck.decks, deck => deck._id == ownProps.params.deckId);
    const isOwner = getUserId() === deck.ownerId;
    return {
        deck,
        isOwner,
        isFetching: state.card.isFetching
    };
};



export default connect(mapStateToProps, {
    onDelete,
    onSynchronize: saveCards,
    loadCards
})(DeckViewPage);
