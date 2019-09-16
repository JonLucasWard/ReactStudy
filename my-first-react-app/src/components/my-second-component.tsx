import * as React from 'react';

/**
 * This is an example of a function component.
 * A function component is a component consisting of
 * a single function, that is the render method.
 *
 */
const SecondComponent: React.FC = () => { // immediately make SecondComponent
    return (
        <div>
            <h3>This is my second component!</h3>
        </div>
    );
}

export default SecondComponent;