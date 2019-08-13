import VehicleActionTypes from './vehicles.enum';
import {
    StartAction,
    SuccessAction,
    FailureAction,
    Vehicle,
} from './vehicles.interfaces';

export const fetchVehiclesStart = (): StartAction => ({
    type: VehicleActionTypes.FETCH_VEHICLES_START,
});

export const fetchVehiclesSuccess = (data: Vehicle[]): SuccessAction => ({
    type: VehicleActionTypes.FETCH_VEHICLES_SUCCESS,
    payload: data,
});

export const fetchVehiclesFailure = (errorMessage: string): FailureAction => ({
    type: VehicleActionTypes.FETCH_VEHICLES_FAILURE,
    payload: errorMessage,
});
