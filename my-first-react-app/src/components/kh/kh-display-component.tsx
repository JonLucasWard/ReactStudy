import * as React from 'react';

export class KHDisplay extends React.Component<any, any> {
    constructor(props: any) { // make component
        super(props);
    }

    render() { //display component
        return (
            // This will change the style based on the value of
            // this.props.clicks based on the ternary operation below
            <div style={{ // various styles depend on clicks
                backgroundColor: (this.props.clicks % 3 ? "red" : "yellow"),
                fontFamily: (this.props.clicks % 5 ? "cursive" : "arial"),
                fontSize: (this.props.clicks % 3 ? 50 : 100)
            }}>
                <div style={{
                    visibility: (this.props.clicks % 3 ? "visible" : "hidden"),
                    backgroundColor: (this.props.clicks % 2 ? "green" : "blue")
                }}> Hello!!!!!!!!!</div>
                <div style={{
                    visibility: (this.props.clicks % 5 ? "visible" : "hidden"),
                    backgroundColor: (this.props.clicks % 3 ? "pink" : "orange")
                }}> =)  =)    =)</div>
                {this.props.clicks}
            </div>

        );
    }
}