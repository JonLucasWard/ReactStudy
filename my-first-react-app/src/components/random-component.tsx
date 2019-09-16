import * as React from 'react';
import { RandomDisplay } from './random/random-display';
import { RandomButton } from './random/random-button';

export class RandomComponent extends React.Component<any, any> {

    constructor(props: any) { //state with number of clicks
        super(props);
        this.state = {
            clicks: 0
        }
    }

    change(amount: number) { // add to click state number
        this.setState({
            clicks: this.state.clicks + amount
        });
    }

    render() {
        return (
            <div>
                {/* display number of clicks and then run change function with an input of x*/}
                <RandomDisplay clicks={this.state.clicks} />
                <RandomButton
                    change={(x: number) => this.change(x)}
                    clicks={this.state.clicks} />
                {/* <ClickerButton change={this.change.bind(this)} /> */}
            </div>
        )
    }
}


export default RandomComponent;