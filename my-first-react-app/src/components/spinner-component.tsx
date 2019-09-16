import React from 'react';
import logo from '../assets/logo.svg';
import { SpinnerButton } from './spinner/spinner-button';

export class SpinnerComponent extends React.Component<any, any> {

    constructor(props: any) { // have state with a starting speed state
        super(props);
        this.state = {
            speed: 5
        }
    }

    increment(amount: number) {
        if (this.state.speed <= 1) { // if speed is less than 1, multiply it by .9
            this.setState({
                speed: this.state.speed * .9
            });
        } else {
            this.setState({ // increase speed (subtracted, higher numbers are slower) by 1 per click
                speed: this.state.speed - amount
            });
        }
    }

    render() { // run spin animation and just keep increasing it with increment
        return (
            <div className="App">
                <img style={{ animation: `App-logo-spin ${this.state.speed}s linear infinite` }} src={logo} className="App-logo" alt="logo" />
                <SpinnerButton
                    increment={(x: number) => this.increment(x)} />
            </div>
        );
    }
}