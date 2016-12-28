import React from 'react';
import {TextField, Divider} from 'material-ui';
import {Row,Col} from 'react-bootstrap';
import {indigo500} from 'material-ui/styles/colors';
import {browserHistory} from 'react-router';
import _ from 'lodash';
import DeckCard from './DeckCard';
import Loader from '../../components/Loader';
// import Synchro from 'material-ui/svg-icons/action/cached';

class Decks extends React.Component {

    constructor () {
        super();
        this.renderMyDecks = this.renderMyDecks.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked (deckId) {
        browserHistory.push(`/deck/${deckId}`);
    }

   renderMyDecks () {
     if (this.props.isFetching) {
       return <Loader />;
     }
      return this.props.myDecks.map((deck) => (
          <Col key={deck._id.$oid} md={4}>
              <DeckCard key={deck._id} name={deck.name} creatorName={'Not Logged'} actionLabel={'Edit'}
                description={deck.description} image={deck.image} language={deck.language.language} flag={deck.language.image} mark={deck.mark} votes={deck.votes}
                onAction={_.partial(this.buttonClicked, deck._id.$oid)} />
          </Col>
      ));
   }

   renderOtherDecks(decks) {
     if (this.props.isFetching) {
       return <Loader />;
     }
     return decks.map((deck) => (
       <Col key={deck._id.$oid} md={4}>
         <DeckCard key={deck._id} name={deck.name} creatorName={'Not Logged'} actionLabel={'View'}
           description={deck.description} image={deck.image} language={deck.language.language} flag={deck.language.image} mark={deck.mark} votes={deck.votes}
           onAction={_.partial(this.buttonClicked, deck._id.$oid)} />
       </Col>
     ));
   }

  render() {
    const headerStyle = {
      marginLeft: '50px',
      fontSize: '30px',
      marginTop: '10px',
      marginBottom: '50px',
      color: indigo500,
      // fontFamily: '"Dancing Script", Georgia, Times, serif',
      fontFamily: '"Roboto", sans-serif'

    };
    return (
      <div>
        <Row>
          <Col md={7}>
            <h1 style={headerStyle}>
              Favorites
            </h1>
          </Col>

          <Col md={5}>
            <TextField
              hintText="Search"
            />
          </Col>
        </Row>
        <Row>
          {this.renderOtherDecks(this.props.favoriteDecks)}
        </Row>
        
        <Row style={{marginTop: '50px'}}>
          <Divider />
        </Row>
        <Row>
          <h1 style={headerStyle}>
            My decks
          </h1>
        </Row>
        <Row>
          {this.renderMyDecks()}
        </Row>
        <Row style={{marginTop: '50px'}}>
          <Divider />
        </Row>
        
        <Row>
          <Col md={7}>
            <h1 style={headerStyle}>
              See also bundles created by others
            </h1>
          </Col>

          <Col md={5}>
            <TextField
              hintText="Search"
            />
          </Col>
          
        </Row>
        <Row>
          {this.renderOtherDecks(this.props.otherDecks)}
        </Row>
      </div>

    );
  }
}

Decks.defaultProps = {
    myDecks: [],
    otherDecks: [],
};


export default Decks;
