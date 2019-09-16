import * as React from 'react';

/**
 * This is an example of a class constructor that extends React.Component.
 *
 * Properties, or 'props', are values passed from the containing element
 * to the child element.
 *
 * If we have a constructor, we must pass props to the super constructor.
 *
 */
export class FirstComponent extends React.Component<any, any> {

    constructor(props: any) { // console log props object, it has a lot....
        console.log(props);

        // Registering the properties will allow them to be correctly processed
        // and they will then be accessible from `this.props`
        super(props);
    }

    render() {
        // We can utilize this.props.name to retrieve the name stored in props
        console.log(this.props.name);
        return (
            <div>
                <h3 id="first">Hello {this.props.name}!</h3>
                <p>This is my first component!</p>
            </div>
        );
    } // just display Hello World
}