import * as React from 'react';

export default class SumButton extends React.Component<any, any> { // export SumButton, component class, accepts any type to be passed in 

    constructor(props: any) { // constructor of component
        super(props); // import properties from React.Component
        this.state = {
            val: this.props.val
        }
    } // state is from parent component

    public render() { // make the button
        return (
            <button
                className="btn btn-secondary btn-md"
                onClick={() => this.props.add(this.state.val)}
                style={{ margin: '5px' }}
            >{this.state.val}</button> // button uses add function of its parent component and applies a margin+style
        );
    }
}
