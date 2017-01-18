import React from 'react';
import {Card, CardHeader, CardTitle, CardMedia, CardText, RaisedButton, CardActions} from 'material-ui';
import {indigo500} from 'material-ui/styles/colors';
import Learn from 'material-ui/svg-icons/social/school';
import _ from 'lodash';

const cardStyles = {
    margin: '10px',
};


const DeckCard = ({name, description, creatorName, image, language, flag, mark, votes, actionLabel, onAction}) => (

    <Card style={cardStyles} zDepth={5} >
      <CardMedia
        overlay={<CardTitle title={name} subtitle={description} />}
      >
        <img src={`images/deckImages/${image}.jpg`} />

      <img
        src={`images/flags/${flag}.png`}
        alt={language}
        style={{position: 'absolute', top: '0', right:'12px', height: '50px', width: '42px', minHeight: '50px', minWidth: '42px'}}
      />

      </CardMedia>
      <CardText>
        <div style={{float: 'right', height: '18px', marginRight: '-8px'}}>
            <Learn style={{height: '18px', width: '18px'}} color={mark > 0.5 ? null : 'grey'}/>
            <Learn style={{height: '18px', width: '18px'}} color={mark > 1.5 ? null : 'grey'}/>
            <Learn style={{height: '18px', width: '18px'}} color={mark > 2.5 ? null : 'grey'}/>
            <Learn style={{height: '18px', width: '18px'}} color={mark > 3.5 ? null : 'grey'}/>
            <Learn style={{height: '18px', width: '18px'}} color={mark > 4.5 ? null : 'grey'}/>
            <span style={{fontWeight: 'bold', fontSize: '12px', lineHeight: '18px', verticalAlign: 'top', paddingLeft: '4px'}}>({votes})</span>
        </div>

        <div style={{float: 'left'}}>
            {creatorName ? `by ${creatorName}` : null}
        </div>

      </CardText>
      <CardActions>
        <RaisedButton primary fullWidth style={{marginTop: '5px'}} label={actionLabel} onClick={onAction} />
      </CardActions>
      </Card>
);

export default DeckCard;
