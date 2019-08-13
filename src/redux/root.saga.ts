import { all, call } from 'redux-saga/effects';

import vehiclesSagas from './vehicles/vehicles.sagas';

export default function* rootSaga() {
    yield all([call(vehiclesSagas)]);
}
