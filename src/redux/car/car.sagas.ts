import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import CarActionTypes from './car.enum';
import { fetchCarSuccess, fetchCarFailure } from './car.actions';

type FetchCarsAction = {
    type: CarActionTypes.FETCH_CAR_START;
    payload: string;
};

function* fetchCarsAsync(action: FetchCarsAction) {
    const { payload } = action;
    try {
        const data = yield axios({
            method: 'get',
            url: `http://localhost:1234/api/vehicle/${payload}`,
            responseType: 'json',
        });
        const car = data.data.data.data;
        yield put(fetchCarSuccess(car));
    } catch (error) {
        yield put(fetchCarFailure(error.message));
    }
}

function* watchFetchCarsAsync() {
    yield takeLatest(CarActionTypes.FETCH_CAR_START, fetchCarsAsync);
}

export default function* carSagas() {
    yield all([call(watchFetchCarsAsync)]);
}
