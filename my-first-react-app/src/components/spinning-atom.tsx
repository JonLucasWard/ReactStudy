import *  as React from 'react';
//This is Ed not sure who also did a spinning Atom but I updated your import to share my file in assets to fix error
import logo from '../assets/logo.svg';
export class SpinningAtom extends React.Component<any, any> {
  constructor(props: any) { //set state with a speed object
    super(props)
    this.state = { speed: 5 };
  }

  updateSpeed() { // change speed by a factor of 0.9 (smaller numbers are faster)
    this.setState({ speed: this.state.speed * 0.9 });
  }

  render() { //when clicked increase speed, note difference in how animation is typed compared to other spinner
    return (
      <div>
        <button onClick={() => this.updateSpeed()} value='faster'>Faster</button>
        <img src={logo} className="App-logo" alt="logo" style={{ animation: "App-logo-spin infinite " + this.state.speed + "s linear" }} />

      </div>
    );
  }
}