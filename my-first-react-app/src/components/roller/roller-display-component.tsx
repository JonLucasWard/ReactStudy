import * as React from 'react';

export class RollerDisplay extends React.Component<any, any> {
    constructor(props: any) { // take in props from parent component when made
        super(props);
    }

    render() {
        return (
            // make word display that changes color depending on passed prop, and then display said prop
            <div style={{ color: (this.props.result == 20 ? 'green' : this.props.result == 1 ? 'red' : 'black') }}>
                {this.props.result}
            </div>
        );
    }
}