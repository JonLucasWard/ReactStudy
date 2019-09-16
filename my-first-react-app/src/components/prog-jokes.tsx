import React from 'react';
import Axios from 'axios' // using axios!
import '../App.css'

interface Jokes { // make joke template

    type: string,
    joke: string,
    setup: string,
    delivery: string,
    id: number

}

export class ProgJokes extends React.Component<any, Jokes>{ // set up state similar to interface and accept it
    constructor(props: any) {
        super(props);
        this.state =
            {
                type: '',
                joke: '',
                setup: '',
                delivery: '',
                id: 0,
            }
    }

    handlePunchline() {
        const url = 'https://sv443.net/jokeapi/category/Programming';

        Axios.get(url).then(payload => { // get function to joke api, if only 1 payload comes in then set it to the state
            if (payload.data.type === 'single') {
                this.setState({
                    setup: '',
                    delivery: '',
                    type: payload.data.type,
                    joke: payload.data.joke,
                    id: payload.data.id
                });
            }
            else { // else set a delivery?
                this.setState({
                    joke: '',
                    type: payload.data.type,
                    setup: payload.data.setup,
                    delivery: payload.data.delivery,
                    id: payload.data.id
                });
            }

        });
    }

    render() { // make some displays, on a click make the request to the API then display the resulting info
        return (
            <div className="display-container">
                <h2 className="goodOleStuff">Wanna hear a Joke?</h2>

                <button className="goodOleStuff" onClick={() => this.handlePunchline()}>Yea!</button>


                <h6 className="goodOleStuff">{this.state.setup}</h6>
                <h5 className="goodOleStuff">{this.state.joke}</h5>
                <h6 className="goodOleStuff">{this.state.delivery}</h6>



            </div>
        )
    };


}