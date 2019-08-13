import VehicleActionTypes from './vehicles.enum';

export interface Vehicle {
    id: string;
    url: string;
    modelYear: string;
    media: [{ [key: string]: string }];
}

export interface StartAction {
    type: VehicleActionTypes.FETCH_VEHICLES_START;
}

export interface SuccessAction {
    type: VehicleActionTypes.FETCH_VEHICLES_SUCCESS;
    payload: Vehicle[];
}

export interface FailureAction {
    type: VehicleActionTypes.FETCH_VEHICLES_FAILURE;
    payload: string;
}

export type Action = StartAction | SuccessAction | FailureAction;
