import React from 'react';
import logo from './logo.svg';
import Button from 'material-ui/Button';

export default function Header() {
  return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Button variant="raised" color="secondary">Secondary</Button>
        </header>
  );
}
