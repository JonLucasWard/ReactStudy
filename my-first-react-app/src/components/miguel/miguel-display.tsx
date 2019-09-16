import * as React from 'react';

export class MiguelDisplay extends React.Component <any,any> {
    render () {
        return (
            <div className="miguel-display"
            style={{ fontFamily: (this.props.nClicks % 3 ? 'verdana' : 'cursive'),
                     fontSize: (this.props.nClicks % 2 ? '5px' : '15px')}}>
                <p>{this.props.text}</p> 
            </div>
        );
    }
}