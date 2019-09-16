import * as React from 'react';

export class MiguelButtonFlush extends React.Component <any,any> {
    render () {
        return (
            <div>
                <button className="miguel-button-flush" 
                onClick={()=>this.props.flush()}>Flush</button>
            </div>
        );
    }
}