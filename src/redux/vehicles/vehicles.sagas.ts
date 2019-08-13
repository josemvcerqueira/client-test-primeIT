import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import VehicleActionTypes from './vehicles.enum';
import { fetchVehiclesSuccess, fetchVehiclesFailure } from './vehicles.actions';

function* fetchVehiclesAsync() {
    try {
        const data = yield axios({
            method: 'get',
            url: 'http://localhost:1234/api/vehicle',
            responseType: 'json',
        });
        const { vehicles } = data.data.data.data;

        yield put(fetchVehiclesSuccess(vehicles));
    } catch (error) {
        yield put(fetchVehiclesFailure(error.message));
    }
}

function* watchFetchVehiclesAsync() {
    yield takeLatest(
        VehicleActionTypes.FETCH_VEHICLES_START,
        fetchVehiclesAsync,
    );
}

export default function* vehiclesSagas() {
    yield all([call(watchFetchVehiclesAsync)]);
}
