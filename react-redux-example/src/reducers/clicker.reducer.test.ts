import { clickerReducer } from './clicker.reducer';
import * as clickerActions from '../actions/clicker.actions';

/**
 * The following is a test of a single reducer respective of itself
 */

describe('clickerReducer works as intended', () => {

    it('clickerReducer should return its initial state', () => {
        //call clickerReducer function, passing in an undefined state (forces default) and no action payload
        expect(clickerReducer(undefined, {})).toEqual(
            {
                clicks: 0
            }
        );
    });

    test('should handle CLICKER_UPDATE', () => {
        expect(
            //no starting state for clickerReducer, it will default to initial (0 clicks)
            clickerReducer(undefined, {
                //following is data that should be had from CLICKER_UPDATE action
                payload: { amount: 1 }, //amount is dummy data used by reducer to update state
                type: 'CLICKER_UPDATE',
            })
        ).toEqual( //following is what the new reducer state should be
            {
                clicks: 1
            }
        );
    });
});