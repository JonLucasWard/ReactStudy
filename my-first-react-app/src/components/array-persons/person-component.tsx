import React from 'react';

interface IPersonProps { // template to put people in, id is key for arrays to prevent conflicts
    id: number,
    name: string,
    age: number
};

export class PersonComponent extends React.Component<IPersonProps, any> { // make a new component using the template
    constructor(props: IPersonProps) { // the props come from the template
        super(props);
    }

    render() {
        return ( // make div with info from the template that is passed in
            <div className="person-box">
                <h3>{this.props.name}</h3>
                <div>ID: {this.props.id}</div>
                <div>Age: {this.props.age}</div>
            </div>
        );
    };
}