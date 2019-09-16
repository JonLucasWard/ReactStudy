import * as React from 'react';

export class JessicaDisplay extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            // This will change the style based on the value of
            // this.props.clicks based on the ternary operation below
            <div style={{ color: (this.props.time % 2 ? 'pink' : 'cyan') }}>
                <h3> {(this.props.time % 3 ? '¯\\_(ツ)_/¯' : '(╯°□°)╯︵ ┻━┻')}</h3>
                <br/>
                <p>{(this.props.time)}</p>
            </div>
        );
    }
}