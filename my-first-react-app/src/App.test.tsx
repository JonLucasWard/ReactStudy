// This is a test file using jest and enzyme, checks if renders fail
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => { // description then callback
  const div = document.createElement('div');
  ReactDOM.render(<App />, div); // render the main app with a div element
  ReactDOM.unmountComponentAtNode(div); // delete div element
});

//if it fails, it will say so
//run with npm test
