import VehicleActionTypes from './vehicles.enum';
import { Action, Vehicle } from './vehicles.interfaces';

const INITIAL_STATE = {
    vehicles: [],
    isFetching: false,
    errorMessage: '',
};

export interface ReducerState {
    vehicles: Vehicle[] | [];
    isFetching: boolean;
    errorMessage: string;
}

function vehiclesReducer(state: ReducerState = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case VehicleActionTypes.FETCH_VEHICLES_START: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case VehicleActionTypes.FETCH_VEHICLES_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                vehicles: action.payload,
            };
        }
        case VehicleActionTypes.FETCH_VEHICLES_FAILURE: {
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

export default vehiclesReducer;
