import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'red',
  },
};

function BlackboardButton() {
  return <Button>Push me!</Button>;
}

export default withStyles(styles)(BlackboardButton);
