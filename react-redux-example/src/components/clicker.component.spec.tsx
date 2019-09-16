// for testing the clicker, enzyme just "understands" react where jest wont

import React from 'react'; //import react so the concept of a "component" is understood
import Enzyme, { shallow, EnzymeAdapter } from 'enzyme';
import { ClickerComponent, IClickerProps } from './clicker.component'; // import component and its props
import Adapter from "enzyme-adapter-react-16";
/**
 * Enzyme is a testing package for React applications produced by Airbnb.
 *
 * Enzyme is able to render React components in both complete and shallow states and
 * provide us a simple toolset to make assertions against the rendered state.
 */
Enzyme.configure({ adapter: new Adapter() });

//for devs, describe the following series of tests
describe('<ClickerComponent />', () => {
    // #region Starting Values
    //dummy props to use for tests
    const props: IClickerProps = {
        clicker: {
            clicks: 100
        },
        updateClicks: jest.fn((number: number) => props.clicker.clicks + number)
    }
    //dummy component with props passed in, shallow means it won't run any child components if it calls any
    const clicker = shallow(<ClickerComponent {...props} />);
    // #endregion


    //an actual test, describe it then use a callback
    test('renders, with appropriate HTML', () => {
        expect(clicker.exists()).toBe(true); //exists at all, there is SOME HTML being rendered

        //The following tests various tags that should be on the component
        expect(clicker.exists('div')).toBe(true);
        expect(clicker.exists('h2')).toBe(true);
        expect(clicker.exists('button')).toBe(true);
        expect(clicker.exists('audio')).toBe(false); // and one that doesn't exist

        //Test that HTML is ordered appropriately
        //childAt treats all HTML as an array. Where 0 is the first tag within a given tag from find('TagName')
        //type() is a function that just returns the tag as is, doesn't take in any params
        //so it's doing "Find a 'div', then pick a child tag at position X, return that tag and check it against this other tag"
        expect(clicker.find('div').childAt(0).type()).toEqual('h2');
        expect(clicker.find('div').childAt(1).type()).toEqual('button');
        expect(clicker.find('div').childAt(0).type()).not.toEqual('h3'); //and one that doesn't exist
    });


    test('function is called when button is clicked', () => {
        clicker.find('button').simulate('click');
        expect(props.updateClicks).toHaveBeenCalledTimes(1);
    });

    test('that when clicks are 100 then displays 100 in component', () => {

        // expect that we see 100 rendered in the correct location
        // find(..) which can find a rendered element using CSS-like syntax
        expect(clicker.contains((<h2>Clicks: 100</h2>))).toBe(true);


    })
});