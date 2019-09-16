import * as React from 'react';

export default class BallComponent extends React.Component<any, any> {

    constructor(props: any) { // make a ball with inverted and size traits
        super(props);
        this.state = {
            inverted: false,
            size: 200
        };
    }

    invert() { // function to invert ball, simple change of state by copying object then re-assign
        this.setState({
            ...this.state,
            inverted: !this.state.inverted
        });
    }

    resize(e?: any) { // as above, but you can input a value for e. No clue what ? is for!!!
        this.setState({
            ...this.state,
            size: e.target.value
        })
    }

    render() { // make the ball
        return (
            <div>
                <div id="button-container">
                    <button
                        onClick={() => this.invert()}
                    >Invert</button>
                    <input type="number" onChange={(e) => this.resize(e)} value={this.state.size}/* as you type a value, ball size changes*/></input>

                </div>
                <div className={(this.state.inverted ? 'invert' : '') + ' ball-container'}>

                    <div
                        className="ball"
                        style={{ width: (this.state.size) + 'px', height: (this.state.size) + 'px' }}></div>
                </div>
            </div>
            // no clue where the actual "ball" is coming from
        );
    }
}
