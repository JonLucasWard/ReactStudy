import * as React from 'react';

export class MiguelButton extends React.Component <any,any> {
    render () {
        return (
            <div>
                <button className="miguel-button" 
                onClick={()=>this.props.addText('Hi')}>
                    Hi
                </button>
            </div>
        );
    }
}