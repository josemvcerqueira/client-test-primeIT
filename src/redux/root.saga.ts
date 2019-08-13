import { all, call } from 'redux-saga/effects';

import vehiclesSagas from './vehicles/vehicles.sagas';
import carSagas from './car/car.sagas';

export default function* rootSaga() {
    yield all([call(vehiclesSagas), call(carSagas)]);
}
