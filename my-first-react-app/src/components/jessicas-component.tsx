import * as React from 'react';
import { JessicaButton } from './jessica/jessica-button-component';
import { JessicaDisplay } from './jessica/jessica-display-component';
import Axios from 'axios';

interface IDigiState { //template for received information
    id: number,
    name: string,
    imageurl: string,
    level: string
}

export class JessicaComponent extends React.Component<any, any> {

    constructor(props: any) { //make component
        var d = new Date(); //make a date
        var n = d.getSeconds(); //get seconds of...what??
        super(props);
        this.state = { // the state is this object
            time: n,
            id: 0,
            name: '',
            url: '',
            level: ''
        }
    }
    change() { // change function makes a new data, seconds, and adds time to the date. I THINK its checking ping
        var d = new Date();
        var n = d.getSeconds();
        this.setState({
            time: n
        });
    }
    updateValue(e: any) { // add a value to the id state
        const value = e.target.value;
        this.setState({
            ...this.state,
            id: value
        });
    }
    logState() { // function to console log the state
        console.log(this.state);
    }
    searchDigimon() { //function to get digimon
        const url = `https://digimon-api.herokuapp.com/api/digimon/id/${this.state.id}`; //digi api + url
        console.log(url);
        Axios.get(url).then(payload => { // get url then set the state equal to the payload
            console.log(payload);
            this.setState({
                ...this.state,
                name: payload.data[0].name,
                id: payload.data[0].id,
                url: payload.data[0].img,
                level: payload.data[0].level
            })

        });
        console.log(this.state);
    }
    render() { // make thing
        return (
            <div>
                <JessicaDisplay time={this.state.time} /* display the time of the state*/ />
                <JessicaButton change={() => this.change() /* when clicked, use change function*/} />
                <div id="display-container">
                    {this.state.id && // only display h2 if id is truthy
                        <h2>#{this.state.id}: {this.state.name}</h2>
                    }
                    <div>{this.state.level}</div>
                    <img src={this.state.url}></img>
                </div>
                <div id="digi-submit-container">
                    <input type="number" min="1" step="1"
                        value={this.state.inputValue}
                        onChange={(e: any) => this.updateValue(e)}></input>
                    <button onClick={() => this.searchDigimon()}>Submit</button>
                </div>
            </div>
        );
    }
}

export default JessicaComponent;