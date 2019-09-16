import * as React from 'react';

export default class NumClear extends React.Component<any, any> {

    public render() { // make a button
        return (
            <div>
                <button
                    className="btn btn-warning"
                    onClick={() => this.props.clear()}
                    style={{ margin: '5px' }}
                >Clear</button>

            </div>
        );
    }
} // calls the clear() command from the parent component
