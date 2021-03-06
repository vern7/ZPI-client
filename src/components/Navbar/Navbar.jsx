import React from 'react';
import {
    AppBar,
    MenuItem,
    IconButton,
    Snackbar,
    FlatButton,
    Drawer,
    Avatar,
    Divider} from 'material-ui';
import MenuIcon from 'material-ui/svg-icons/navigation/menu'; 
import AddBundleIcon from 'material-ui/svg-icons/action/note-add'; 
import ViewBundlesIcon from 'material-ui/svg-icons/action/view-module'; 
import AccountBox from 'material-ui/svg-icons/action/account-box';
import Learn from 'material-ui/svg-icons/social/school';
import Create from 'material-ui/svg-icons/content/create';
import {browserHistory} from 'react-router';

import './styles.css';

export default class Navbar extends React.Component {

    constructor () {
        super();
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
        this.handleSnackbarOpen = this.handleSnackbarOpen.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleBadgeClick = this.handleBadgeClick.bind(this);


        this.state = {
            open: false,
            openReport:false,
            snackbarOpen: false,
        };

    }

    closeNavbar = () => {
        this.setState({
            open: false
        });
    }

    goToHomePage = () => {
        browserHistory.push('/home');
        this.closeNavbar();
    }

    goToAddDeck = () => {
        browserHistory.push('/addDeck');
        this.closeNavbar();
    }

    goToDecks = () => {
        browserHistory.push('/decks');
        this.closeNavbar();
    }

    handleLogout () {
        this.props.logOut();
        localStorage.removeItem('user');
    }

    handleOpenMenu (event) {
        event.preventDefault();
        this.setState({
            open: !this.state.open,
        });
    }

    handleRequestClose () {
        this.setState({
            open: false,
        });
    }

    handleSnackbarClose () {
        this.setState({
            snackbarOpen: false
        });
    }

   handleSnackbarOpen () {
        this.setState({
          snackbarOpen: true
        });
   }


   handleBadgeClick () {
       console.log('handleBadgeClick');
   }

    render () {


        const userNameStyle = {
          textAlign: 'center',
          marginLeft: '25px'
        };

        const buttonStyle = {
        backgroundColor: 'transparent',
        color: '#9C27B0',
        paddingTop: '10px',
      };

      const avatarStyle = {
        width: '80px',
        height: '80px',
        position: 'absolute',
        top: '5px',
        left: '20px',

      };


        const titleStyle = {
          color: '#3F51B5',
          fontFamily: '"Dancing Script", Georgia, Times, serif',
          fontSize: '40px',
          textAlign: 'center'
          
        }


        const draweTitleStyle = {
          color: '#3F51B5',
          fontFamily: '"Dancing Script", Georgia, Times, serif',
          fontSize: '25px',
          textAlign: 'center'
          
        }

        debugger;

        return (
            
          <div className="app-bar">
            <AppBar
                zDepth={this.props.notLogged ? 0 : 1}
                showMenuIconButton={!this.props.notLogged}
                title={this.props.title}
                titleStyle={titleStyle}
                className="app-bar"
                iconElementLeft={this.props.notLogged ? null : <IconButton onClick={this.handleOpenMenu}><MenuIcon /></IconButton>}
                iconElementRight={this.props.notLogged ? null : <FlatButton label="Log out" style={buttonStyle} onClick={this.handleLogout}/> }
            >   

            </AppBar >
            
                {this.props.user.profile && this.props.user.profile.username ? 
                        <Drawer
                            docked={false}
                            width={300}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({open})}
                        >
                            <MenuItem style={{textAlign: 'center', marginTop: '20px'}} disabled={true}><span style={draweTitleStyle}>Flash Learn</span></MenuItem>
                            <MenuItem style={{textAlign: 'center', marginTop: '20px'}} disabled={true}> <Avatar style={avatarStyle} size={200} src={this.props.user.profile.avatar === '' ? '/images/defaultAvatar.jpg' : this.props.user.profile.avatar} /> </MenuItem>
                            <MenuItem style={userNameStyle} disabled={true}>{this.props.user.profile.username}</MenuItem>
                            <Divider style={{marginBottom: '50px', marginTop:'10px'}}/>
                            <MenuItem onClick={this.goToHomePage} primaryText="My profile" leftIcon={<AccountBox />} />
                            <MenuItem onClick={this.goToAddDeck} primaryText="Add deck" leftIcon={<AddBundleIcon />} />
                            <MenuItem onClick={this.goToDecks} primaryText="Discover decks" leftIcon={<ViewBundlesIcon />} />
                            <MenuItem onClick={this.handleClickMenuItem} primaryText="Compose path" leftIcon={<Create />} href="/addPath"/>
                            <MenuItem onClick={this.handleClickMenuItem} primaryText="Explore paths" leftIcon={<Learn />} href="/paths"/>


                        </Drawer>
                        :
                        null
                }
              



            <Snackbar
                open={this.state.snackbarOpen}
                message="Ups! Funkcjonalność jeszcze nie dostępna."
                autoHideDuration={3000}
                onRequestClose={this.handleSnackbarClose}
            />
        </div>
        );
      }
}

Navbar.defaultProps = {
    title: 'Flash Cards',
};
