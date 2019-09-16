import { IClickerState } from ".";
import { clickerTypes } from "../actions/clicker.actions";

// Defining initial state of clicker
const initialState: IClickerState = {
    clicks: 0
};

// Define the reducer for the clicker
// The reducer will determine which action has taken place
// and if it needs to, it will return a new state if the action
// requires it. If not, we will return the current state.
// Usually, we will switch on an action, and capture the various actions
// that we need to handle
export const clickerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case clickerTypes.CLICKER_UPDATE:
            return {
                ...state,
                clicks: state.clicks + action.payload.amount
            }
        default: break;
    }
    return state;
}