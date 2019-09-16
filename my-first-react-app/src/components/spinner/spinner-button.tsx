import * as React from 'react';

export class SpinnerButton extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button
                    // Binds a function to the click event using React, when clicked, run increment by 1
                    onClick={() => this.props.increment(1)}
                    className="btn btn-primary"
                >Spin Faster</button>
            </div>


        )
    }
}