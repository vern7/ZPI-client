import {connect} from 'react-redux';
import AddDeckForm from './AddDeckForm';
import {createDeck} from './actions';

const mapDispatchToProps = dispatch => ({
    onSubmit: (doc) => dispatch(createDeck(doc))
});

const mapStateToProps = state => ({
    userId: state.user.profile.userId,
});


export default connect(mapStateToProps, mapDispatchToProps)(AddDeckForm);
