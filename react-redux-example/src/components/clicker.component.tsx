import { IClickerState, IState } from "../reducers";
import React from 'react';
import { updateClicks } from "../actions/clicker.actions";
import { connect } from "react-redux";

export interface IClickerProps { // interface should have states and function info
    // Data from state store
    clicker: IClickerState,
    // Action creators from the dispatcher
    updateClicks: (amount: number) => void;
}

export class ClickerComponent extends React.Component<IClickerProps, {}> { //make component passing in interface as props and an object as 
    // IClickerProps is the only data type allowed for our Properties
    // Objects is the only type allowed for our States
    // Send Store/Store State will allow any
    render() {// make the html with a clicks that tracks the props-click state, and a button that runs the update function
        return (
            <div>
                <h2>Clicks: {this.props.clicker.clicks}</h2>
                <button onClick={() => this.props.updateClicks(1)}>+1</button>
            </div>
        )
    }
}

// This function will convert state-store values to
// component properties
const mapStateToProps = (state: IState) => { // "unwinds" store information
    return {
        clicker: state.clicker
    }
}

// This object definition will be used to map action creators to
// properties
const mapDispatchToProps = {
    updateClicks: updateClicks
}


export default connect(mapStateToProps, mapDispatchToProps)(ClickerComponent);
