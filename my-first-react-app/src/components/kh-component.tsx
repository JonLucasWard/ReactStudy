import * as React from 'react';
import { KHDisplay } from './kh/kh-display-component';
import { KHButton } from './kh/kh-button-component';

export class KHComponent extends React.Component<any, any> {

    constructor(props: any) { //make it and define state 0
        super(props);
        this.state = {
            clicks: 0
        }
    }

    increment(amount: number) { //increment function, add clicks
        this.setState({
            clicks: this.state.clicks + amount
        });
    }

    render() { //make the thing
        return (
            <div>
                <KHButton
                    increment={(x: number) => this.increment(x) /* make button with increment action call*/}
                    clicks={this.state.clicks}
                />
                <KHDisplay
                    clicks={this.state.clicks /*click div that displays state*/}
                />

            </div>


        )
    }
}