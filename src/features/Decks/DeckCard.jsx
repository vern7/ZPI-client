import React from 'react';
import {Card, CardHeader, CardTitle, CardText, RaisedButton, CardActions} from 'material-ui';
import {indigo500} from 'material-ui/styles/colors';


const cardStyles = {
  margin: '10px',
  backgroundColor: indigo500,
};

const titleStyle = {
  fontSize: '20px',
  // fontFamily: '"Dancing Script", Georgia, Times, serif',
  fontFamily: '"Roboto", sans-serif'

};

const DeckCard = ({name, description, creatorName, actionLabel, onAction}) => (

    <Card style={cardStyles} zDepth={5} >
      <CardHeader titleColor="white" titleStyle={titleStyle}
        title={name}
        />
      <CardText color="white">
        {description}
      </CardText>
      {creatorName?
        <CardText color="white" >
          {`by ${creatorName}`}
        </CardText>
        :
        null}
        <CardActions>
          <RaisedButton fullWidth label={actionLabel} onClick={onAction} />
        </CardActions>
      </Card>
);

export default DeckCard;
