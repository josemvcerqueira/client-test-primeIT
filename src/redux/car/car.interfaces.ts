import CarActionTypes from './car.enum';

export interface Car {
    id: string;
    description: string;
    price: string;
    meta: {
        passengers: number;
        drivetrain: string[];
        bodystyles: string[];
        emissions: { template: string; value: number };
    };
}

export interface StartAction {
    type: CarActionTypes.FETCH_CAR_START;
    payload: string;
}

export interface SuccessAction {
    type: CarActionTypes.FETCH_CAR_SUCCESS;
    payload: Car;
}

export interface FailureAction {
    type: CarActionTypes.FETCH_CAR_FAILURE;
    payload: string;
}

export type Action = StartAction | SuccessAction | FailureAction;
