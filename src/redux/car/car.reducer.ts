import CarActionTypes from './car.enum';
import { Action, Car } from './car.interfaces';

const INITIAL_STATE = {
    car: '',
    isFetching: false,
    errorMessage: '',
};

export interface ReducerState {
    car: Car | string;
    isFetching: boolean;
    errorMessage: string;
}

function carReducer(state: ReducerState = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case CarActionTypes.FETCH_CAR_START: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case CarActionTypes.FETCH_CAR_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                car: action.payload,
            };
        }
        case CarActionTypes.FETCH_CAR_FAILURE: {
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        }
        default:
            return state;
    }
}

export default carReducer;
