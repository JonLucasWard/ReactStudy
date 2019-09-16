import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { clickerReducer } from '../reducers/clicker.reducer';
import * as index from '../reducers/index';
import * as clickAction from '../actions/clicker.actions';
import React from 'react'; //import react so the concept of a "component" is understood
import Enzyme, { shallow, EnzymeAdapter } from 'enzyme';
import { ClickerComponent, IClickerProps } from './clicker.component'; // import component and its props
import Adapter from "enzyme-adapter-react-16";
import { render, fireEvent, getByText, getByDisplayValue } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() });

//create a mock store of initial value
const store = createStore(index.state, {
    clicker: {
        clicks: 0
    },
    poke: {
        id: 25,
        name: 'pikachu',
        types: ['electric'],
        spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        inputValue: '25',
        loadingNewPoke: false
    }
}
);

//make starting props for Clicker component
const props: IClickerProps = {
    clicker: {
        clicks: 0
    },
    updateClicks: clickAction.updateClicks
    //above needs to know to call action dispatch and go to reducer, but how???
}

it('increments', () => {
    const { container } = render( //create test environment
        <Provider store={store}> {/*create store which component inherits from*/}
            <ClickerComponent {...props} /> {/*create component*/}
        </Provider>
    );

    const button = getByText(container, '+1'); // find button to increment, this succeeds
    const display = getByText(container, 'Clicks: 0'); //find display of increment, this succeeds
    fireEvent.click(button); //click button, no reason it should fail?

    console.log(store.getState()); //record the store's state after clicking, this shows no change!

    expect(display).toBe(<h2>Clicks: 1</h2>); //final test, want to see if button actually increments
})