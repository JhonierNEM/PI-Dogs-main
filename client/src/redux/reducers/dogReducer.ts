import { ActionTypes } from "../actions/actionTypes";
import { Action } from "../actions";
import { DogState } from "./statesInterfaces.d";


const initialState:DogState = {
    allDogs: [],
    Dogs: [],
    oneDog: null
}

const reducer = (state: object = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload
            }
        
        case ActionTypes.SET_DOGS:
            return{
                ...state,
                Dogs: action.payload
            }
        case ActionTypes.GET_ONE_DOG:
            return {
                ...state,
                oneDog: action.payload
            }
        default:
            return { ...state }
    }
}

export default reducer;