import * as React from 'react';

export class ClickerDisplay extends React.Component<any, any> { // display stuff
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            // This will change the style based on the value of
            // this.props.clicks based on the ternary operation below
            <div style={{ color: (this.props.clicks % 5 ? 'blue' : 'red') }}>
                {this.props.clicks}
            </div>
        );
    }
}