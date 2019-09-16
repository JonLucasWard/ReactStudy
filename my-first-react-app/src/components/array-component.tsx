import * as React from 'react';
import { PersonComponent } from './array-persons/person-component';


export class ArrayComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { // starting array
            array: [
                { name: 'Stephon', id: 1, age: 23 },
                { name: 'Dionel', id: 2, age: 15 },
                { name: '"Sam"', id: 3, age: 35 }],
            inputValue: ''
        };
    }

    updateValue(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state, // copies all existing state properties
            inputValue: value // overwrites the inputValue property
        });
    }

    submitValue() {
        const name = this.state.inputValue;
        const age = Math.floor(Math.random() * 50);
        this.state.array.unshift({ // add new element to front of array, return new length
            name,
            age,
            id: this.state.array.length,
        });
        // const newArray = [, ...this.state.array]
        this.setState({
            ...this.state,
            inputValue: '',
        });
    }

    /*
        We want to render a list with these names, in the format of
        <ul>
            <li>{person data}</li>
        </ul>


    */
    render() {
        // Mapping each name from {name} -> <li>{name}</li>
        const nameList = this.state.array.map((n: any) =>
            (<li key={n.id}>{n.name}</li> /* set key and display name for all values in the array */)
        );

        const personComponentList = this.state.array.map((n: any) => { //second list of interface objects
            return (<PersonComponent key={n.id} id={n.id} name={n.name} age={n.age} />)
        });

        return (
            <div>
                <div>
                    <ul>
                        {nameList}
                    </ul>
                    <input type="text" onChange={/* on ANY change to page update value function*/(e) => this.updateValue(e)} value={this.state.inputValue}></input>
                    <button onClick={() => this.submitValue() /* create new list item with this */} >Submit</button>
                </div>

                <div id="person-container">
                    {personComponentList}
                </div>
            </div>

        );

    }
}