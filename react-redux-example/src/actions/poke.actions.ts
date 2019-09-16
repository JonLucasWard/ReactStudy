export const pokeTypes = { // make object of action types for reducer to understand later
    POKE_SEARCH_RESOLVED: 'POKE_SEARCH_RESOLVED',
    USER_SUBMIT_REQUEST: 'USER_SUBMIT_REQUEST',
    INPUT_UPDATE: 'INPUT_UPDATE'
};

export const pokeSearchResolved = // specific action
    (name: string, id: number, spriteUrl: string, types: string[]) => (dispatch: any) => { //pass in needed info, then it dispatches
        dispatch({
            payload: {
                name, id, spriteUrl, types
            },
            type: pokeTypes.POKE_SEARCH_RESOLVED
        });
    }

export const userSubmitRequest = () => (dispatch: any) => { // again, call function, calls dispatch, sends payload and type
    dispatch({
        payload: {
        },
        type: pokeTypes.USER_SUBMIT_REQUEST
    });
}

export const inputUpdate = (inputValue: string) => (dispatch: any) => { // as previous
    dispatch({
        payload: {
            inputValue
        },
        type: pokeTypes.INPUT_UPDATE
    });
}