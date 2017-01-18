import Navbar from './Navbar';
import {connect} from 'react-redux';
import {logOut} from '../../features/Login/actions'; 


const mapStateToProps = state => ({
    username: state.user.profile.username,
    avatar: state.user.profile.avatar
})

export default connect(mapStateToProps, {logOut})(Navbar);
