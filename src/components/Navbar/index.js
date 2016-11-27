import Navbar from './Navbar';
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    username: state.user.profile.username,
})

export default connect(mapStateToProps)(Navbar);
