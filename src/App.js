import React, {Component} from 'react';
import './App.css';
import {Grid,Row,Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { purple500, indigo500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from './components/Navbar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const getAppBarColor = (notLogged) => notLogged ? '#F5F5F5' : 'white';  

const muiTheme = (notLogged) => {
    const appBarColor = notLogged? '#F5F5F5' : 'white';
    console.log(appBarColor);
    return getMuiTheme({
        palette: {
          textColor: indigo500,
          primary1Color: indigo500,
          accent1Color: purple500,

        },
        appBar: {
          height: 80,
          color: appBarColor,
          textColor: 'black'
        },
    });
}

class App extends Component {
    render () {
      return (
        <MuiThemeProvider muiTheme={muiTheme(this.props.route.notLogged)}>
          <div className="main">

            <div >
              <Navbar notLogged={this.props.route.notLogged} />
            </div>

            <div style={{marginTop: '0px'}}>
              <Grid >
                <Row>
                  <Col smOffset={1} md={10} mdOffset={1} >
                    <div className="app-content">
                      {this.props.children}
                    </div>
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        </MuiThemeProvider>
      );
    }
}

export default App;


