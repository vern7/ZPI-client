import DeckView from './DeckView';
import {connect} from 'react-redux';
import {getUserId} from '../../api/user';
import {deleteDeck} from './actions';
import {saveCards} from '../Cards/actions';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
    const deck = _.find(state.decks.decks, deck => deck._id == ownProps.params.deckId);
    const isOwner = getUserId() === deck.ownerId;
    return {
        deck,
        isOwner,
    };
};

export default connect(mapStateToProps, {onDelete: deleteDeck, onSynchronize: saveCards})(DeckView);
