import * as React from 'react';

export class ClickerButton extends React.Component<any, any> { // button for clicker
    render() {
        return (
            <div>
                <button
                    // Binds a function to the click event using React
                    onClick={() => this.props.increment(1) /*calls up to parent component's increment*/}
                    className="btn btn-primary"
                >Click</button>
                {
                    // This will conditionally display the second button only
                    // when the expression 'this.props.clicks > 15' is true
                    this.props.clicks > 15 &&
                    <button
                        // Binds a function to the click event using React
                        onClick={() => this.props.increment(5)}
                        className="btn btn-primary"
                    >Big Click</button>
                }

            </div>


        )
    }
}