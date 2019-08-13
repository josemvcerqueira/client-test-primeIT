import CarActionTypes from './car.enum';
import {
    Car,
    FailureAction,
    StartAction,
    SuccessAction,
} from './car.interfaces';

export const fetchCarStart = (id: string): StartAction => ({
    type: CarActionTypes.FETCH_CAR_START,
    payload: id,
});

export const fetchCarSuccess = (data: Car): SuccessAction => ({
    type: CarActionTypes.FETCH_CAR_SUCCESS,
    payload: data,
});

export const fetchCarFailure = (errorMessage: string): FailureAction => ({
    type: CarActionTypes.FETCH_CAR_FAILURE,
    payload: errorMessage,
});
