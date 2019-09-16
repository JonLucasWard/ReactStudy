import { pokeTypes } from "../actions/poke.actions";


const initialState = { // set initial state of this component
    id: 25,
    name: 'pikachu',
    types: ['electric'],
    spriteUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    inputValue: '25',
    loadingNewPoke: false
};

export const pokeReducer = (state = initialState, action: any) => { // reducer is called with state (initial) and an action type
    switch (action.type) { // state changes depending on action and associated payload
        case pokeTypes.INPUT_UPDATE:
            return { //spread original state then replace changes
                ...state,
                inputValue: action.payload.inputValue
            }

        case pokeTypes.USER_SUBMIT_REQUEST:
            return {
                ...state,
                loadingNewPoke: true
            }

        case pokeTypes.POKE_SEARCH_RESOLVED:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                types: action.payload.types,
                spriteUrl: action.payload.spriteUrl,
                loadingNewPoke: false
            }

        default: break;
    }
    return initialState;
}