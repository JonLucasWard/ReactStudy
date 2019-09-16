// Definition of actions as constants
export const clickerTypes = {
    CLICKER_UPDATE: 'CLICKER_UPDATE'
};

// Define what the action is composed of
// Action has a type and a payload.  The type defines the kind of action
// that has taken place, and is used by reducers to indicate how they should
// react to the action.  The payload holds data that the reducers may need
// to do their job.

// What is this? What is happening here?????
/*
updateClicks is an Action Creator! It creates actions and dispatches
those actions when called. This is the function our component will be able
to use to call an action.
*/
export const updateClicks = (amount: number) => (dispatch: any) => { // update clicks is called with a number, which calls dispatch
    dispatch({ // dispatch sends a payload with the original call
        payload: {
            amount
        },
        type: clickerTypes.CLICKER_UPDATE // it also associates that payload with a constant type
    })
} // type is for reducers to know what to do, payload is for functions to know what to use