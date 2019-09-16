import * as React from 'react';

export class KHButton extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button
                    // Make a button and set increment to one
                    onClick={() => this.props.increment(1)}
                    className="btn btn-primary"
                >Click!!!!!!!!!!!</button>

            </div>


        )
    }
}