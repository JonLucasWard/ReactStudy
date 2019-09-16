import React from 'react';
import Axios from 'axios';

interface IPokeState { // establishing an interface
    name: string,
    id: number,
    types: String[],
    imageUrl: string,
    inputValue: string
}

export class PokeComponent extends React.Component<any, IPokeState> { // passing in the interface as a prop
    constructor(props: any) {
        super(props);

        this.state = { // match state to desired interface
            name: '',
            id: 0,
            types: [],
            imageUrl: '',
            inputValue: ''
        };
    }

    updateValue(e: any) { // copy state then replace with input values
        const value = e.target.value;
        this.setState({
            ...this.state,
            inputValue: value
        });
    }

    searchPokemon() { // function to set url from what is passed in
        const url = `https://pokeapi.co/api/v2/pokemon/${this.state.inputValue}`;

        // Axios sends a GET request to the URL of the string passed to the
        // .get function.  This function returns a promise. We should call
        // .then to provide handling logic for when the promise resolves.
        // Alternatively, we could use async/await to handle the response.

        // We will receive a data payload from Axios - all we need to do is
        // map the payload properties we are interested in, to a new state object
        Axios.get(url).then(payload => {
            //payload.data.name
            //payload.data.id
            //payload.data.sprites.front_default
            //payload.data.types.map(o => o.type.name), there can be multiple types, so we map them out
            this.setState({
                ...this.state,
                name: payload.data.name,
                id: payload.data.id,
                imageUrl: payload.data.sprites.front_default,
                types: payload.data.types.map((o: any) => o.type.name)

            })
        });
    }

    render() {
        // Convert each pokemon type to a list item with the type string
        // within it
        const typeListing = this.state.types.map(type => { // display types from its map
            return (<li>{type}</li>)
        });

        return (
            <div>
                <div id="display-container">
                    {this.state.id && // only display h2 if id is truthy
                        <h2>#{this.state.id}: {this.state.name}</h2>
                    }
                    <ol>{typeListing}</ol>
                    <img src={this.state.imageUrl}></img>
                </div>
                <div id="poke-submit-container">
                    <input type="text"
                        value={this.state.inputValue}
                        onChange={(e: any) => this.updateValue(e)}></input>
                    <button onClick={() => this.searchPokemon()}>Submit</button>
                </div>
            </div>
        );
    }

}