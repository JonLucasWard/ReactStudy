import * as React from 'react';

export class JessicaButton extends React.Component<any, any> {
    render() { //make thing
        return (
            <div>
                <button //It's a button
                    // Binds a function to the click event using React
                    onClick={() => this.props.change()}
                    className="btn btn-primary"
                >Click</button>

            </div>


        )
    }
}