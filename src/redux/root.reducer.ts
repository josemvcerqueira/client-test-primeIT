import { combineReducers } from 'redux';

import vehiclesReducer, { ReducerState } from './vehicles/vehicles.reducer';
import carReducer, { ReducerState as CarReducer } from './car/car.reducer';

export interface StoreState {
    previews?: ReducerState;
    car?: CarReducer;
}

const rootReducer = combineReducers<StoreState>({
    previews: vehiclesReducer,
    car: carReducer,
});

export default rootReducer;
