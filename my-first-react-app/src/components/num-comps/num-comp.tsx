import * as React from 'react';
import SumButton from './num-btn-comp';
import NumDisplay from './num-disp-comp';
import NumClear from './num-clear-comp';

export default class NumComp extends React.Component<any, any> {

    constructor(props: any) { // make component, state is from React.Component
        super(props);
        this.state = {
            sum: 0
        }
    } // set state to be a sum of 0

    add(val: number) {
        this.setState({
            sum: this.state.sum + val
        });
    } // function to take in a number and add it to the sum state, set new state

    clear() {
        this.setState({
            sum: 0
        });
    } // clear function, set state back to 0

    public render() { // make display that was imported with sum buttons
        return (
            <div>
                <NumDisplay sum={this.state.sum} />
                <div>
                    <SumButton val={7}
                        sum={this.state.sum /* each button holds/'knows' current state so sum keeps increasing */}
                        add={(x: number) => this.add(x)} />
                    <SumButton val={8}
                        sum={this.state.sum}
                        add={(x: number) => this.add(x)} />
                    <SumButton val={9}
                        sum={this.state.sum}
                        add={(x: number) => this.add(x)} />
                </div>
                <div>
                    <SumButton val={4}
                        sum={this.state.sum}
                        add={(x: number) => this.add(x)} />
                    <SumButton val={5}
                        sum={this.state.sum}
                        add={(x: number) => this.add(x)} />
                    <SumButton val={6}
                        sum={this.state.sum}
                        add={(x: number) => this.add(x)} />
                </div>
                <div>
                    <SumButton val={1}
                        sum={this.state.sum}
                        add={(x: number) => this.add(x)} />
                    <SumButton val={2}
                        sum={this.state.sum}
                        add={(x: number) => this.add(x)} />
                    <SumButton val={3}
                        sum={this.state.sum}
                        add={(x: number) => this.add(x)} />
                </div>
                <NumClear
                    clear={() => this.clear()} />

            </div>
        );
    }
}
