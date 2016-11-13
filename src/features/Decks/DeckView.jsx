import React from 'react';
import {AddCard, CardsTable} from '../Cards';
import {Row, Col} from 'react-bootstrap';
import {indigo500} from 'material-ui/styles/colors';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Synchro from 'material-ui/svg-icons/action/cached';
import {FlatButton} from 'material-ui';
import Loader from '../../components/Loader';


const headerStyle = {
    marginLeft: '50px',
    marginTop: '10px',
    color: indigo500,
    fontFamily: '"Roboto", sans-serif'
};

const deckNameStyle = {
    fontFamily: '"Roboto", sans-serif',
    color: indigo500,
    textAlign: 'center',
};

const buttonStyle = {
    margin: 12,
};



export default class DeckView extends React.Component {

    constructor () {
        super();
        this.renderCardsTable = this.renderCardsTable.bind(this);
    }

    renderCardsTable () {
        if (this.props.isFetching) {
            return <Loader />;
        }
        return (
            <CardsTable
                deckId={this.props.deck._id}
                cards={this.props.deck.cards}
                eraseable={this.props.isOwner}
                isFetching={this.props.isFetching}
            />
        );
    }

    render () {
        return (
            <div>
                <Row style={deckNameStyle}>
                <h1 >
                    {this.props.deck.name}
                </h1>
                <FlatButton
                    label="synchronize"
                    primary={true}
                    style={buttonStyle}
                    icon={<Synchro />}
                    onClick={this.props.onSynchronize}
                    />
                {this.props.isOwner?
                    <FlatButton
                    label="delete deck"
                    onClick={this.props.onDelete}
                    secondary={true}
                    style={buttonStyle}
                    icon={<DeleteIcon />}
                    />
                : null}
                
                </Row>
                {this.props.isOwner ?
                <div>
                    <Row>
                    <h2 style={headerStyle}>
                        Add new card
                    </h2>
                    </Row>
                    <Row style={{marginBottom: '60px'}}>
                    <Col mdOffset={3} md={5}>
                        <AddCard deckId={this.props.deck._id} />
                    </Col>
                    </Row>
                </div>
                :
                null
                }
                <Row>
                    <h2 style={headerStyle}>
                    Cards to learn
                    </h2>
                </Row>
                <Row style={{marginTop: '20px'}}>
                    {this.renderCardsTable()}
                </Row>

            </div>
    );
  }
}
