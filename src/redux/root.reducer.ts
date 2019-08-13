import { combineReducers } from 'redux';

import vehiclesReducer, { ReducerState } from './vehicles/vehicles.reducer';

export interface StoreState {
    previews?: ReducerState;
}

const rootReducer = combineReducers<StoreState>({
    previews: vehiclesReducer,
});

export default rootReducer;
