import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import Button from 'material-ui/Button';
import BlackboardButton from './blackboard-button';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {
  render() {
    return (
     <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Button variant="raised" color="primary">Primary</Button>
          <BlackboardButton />
        </p>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
