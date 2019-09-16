import * as React from 'react';
import { ClickerDisplay } from './clicker/clicker-display-component'; // import other components
import { ClickerButton } from './clicker/clicker-button-component';

/**
 * General state, state management
 * Communication and updating of state, between parent and child components
 *
 * (Stateful) components will have values attached to their state.
 * This state value can be accessed via this.state.key.
 *
 * When we initialize the component, for instance, using the constructor,
 * we can assign an initial state. Afterwords, we should never directly mutate
 * the state. State is immutable. Instead, we pass a new state to the setState
 * function, to move from one immutable state to the next.
 *
 * The reason for this is that if we mutate the state directly React will not
 * know that the state has changed, and therefore cannot know to rerender content.
 *
 */
export class ClickerComponent extends React.Component<any, any> {

    constructor(props: any) { // set initial state
        super(props);
        this.state = {
            clicks: 0
        }
    }

    increment(amount: number) { // function that adds to clicks state
        this.setState({
            clicks: this.state.clicks + amount
        });
    }

    render() { // make the clicker
        return (
            <div>
                {/* <div>{this.state.clicks}</div> */}
                <ClickerDisplay clicks={this.state.clicks /* add clicker display with a clicks value*/} />
                <ClickerButton
                    increment={(x: number) => this.increment(x)/*make clicker button passing in these values*/}
                    clicks={this.state.clicks} />
                {/* <ClickerButton increment={this.increment.bind(this)} /> */}
            </div>
        )
    }
}