import Navbar from './Navbar';
import {connect} from 'react-redux';
import {logOut} from '../../features/Login/actions'; 


const mapStateToProps = state => ({
    username: state.user.profile.username,
})

export default connect(mapStateToProps, {logOut})(Navbar);
