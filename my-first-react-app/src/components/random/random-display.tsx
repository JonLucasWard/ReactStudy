import * as React from 'react';
import duck from '../../assets/duck.jpg';
import dude from '../../assets/standguy.jpg';

export class RandomDisplay extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            // This will change the style based on the value of
            // this.props.clicks based on the ternary operation below
            // every click change between image if number is even or odd. Change text if it's divisible by 5 or not

            <div style={{ color: (this.props.clicks % 5 ? 'blue' : 'red') }}>
                <img src={(this.props.clicks % 2 ? dude : duck)} />

            </div>
        );
    }
}
export default RandomDisplay;