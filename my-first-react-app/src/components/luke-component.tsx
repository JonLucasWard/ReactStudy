import * as React from 'react';

export class LukeComponent extends React.Component<any, any> {
    constructor(props: any) { //make component, set number of possible iterations
        super(props);
        this.state = {
            iterations: 0,
        }
    }

    increment() { //add one to state
        this.setState({
            iterations: this.state.iterations + 1
        });
    }

    divCounter(number: number) {
        if (number == 1) { // if number is one, set fontsize to number of iterations
            return (
                <div style={{ fontSize: number + 'px' }}>1</div>
            )
        } else if (number > 1) { // if number is greater than one, add font size -1
            return (<div><div style={{ fontSize: number + 'px' }}>{number}</div>
                {this.divCounter(number - 1) /* display font with size equal to # iterations*/}
            </div>
            )
        }
    }

    render() {
        return (
            <div id="addon">
                <p>You will see what is happening after 5 clicks</p>
                <button
                    // Binds a function to the click event using React, when clicked, increment function
                    onClick={() => this.increment()}
                    className="btn btn-primary"
                >Click Me!!!</button>
                {this.divCounter(this.state.iterations)}
            </div>
        )
    }
}