import * as React from 'react';
import { thisExpression } from '@babel/types';

export class FunComponent extends React.Component<any, any> {
    constructor(props: any) { // make an object array of images
        super(props);
        this.state = {
            funImages: [],
        }
    }
    retrieveFunImage = async () => {
        const funImage: any = await fetch('https://source.unsplash.com/random'); // fetch to take a random image
        const newFunImages = this.state.funImages; // add image to a new state
        newFunImages.push(funImage.url); // push that image to the state array
        this.setState({ funImages: newFunImages }); // set it as a new state
    }
    handleClick = ((event: React.MouseEvent<HTMLButtonElement>) => { // click trigger
        alert("This game is really fun, are you sure you want to continue?"); //send alert
        setInterval(this.retrieveFunImage, 500); // get an image every half second
    });
    render() { // render the stuff
        return (
            <div>
                <button className='btn btn-primary' onClick={this.handleClick}>Click ME!!</button>
                {this.state.funImages.map((img: any) => <img src={img} width='250px' height='250px' />)/*have the state as a map set to the source of each image*/}

            </div>
        );
    }
}

export default FunComponent;