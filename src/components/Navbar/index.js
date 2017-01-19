import Navbar from './Navbar';
import {connect} from 'react-redux';
import {logOut} from '../../features/Login/actions'; 


const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, {logOut})(Navbar);
