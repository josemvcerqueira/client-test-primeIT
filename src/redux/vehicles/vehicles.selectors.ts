import { createSelector } from 'reselect';

import { Vehicle } from './vehicles.interfaces';
import { ReducerState } from './vehicles.reducer';

type State = { [key: string]: ReducerState };

const selectVehiclesState = <State, ReducerState>(state: {
    [key: string]: ReducerState;
}): ReducerState => state.previews;

export const selectVehicles = createSelector<
    State,
    ReducerState,
    Vehicle[] | []
>(
    [selectVehiclesState],
    (previews: ReducerState): Vehicle[] | [] =>
        previews ? previews.vehicles : [],
);

export const selectIsVehiclesFetching = createSelector<
    State,
    ReducerState,
    boolean
>(
    [selectVehiclesState],
    (previews: ReducerState): boolean => previews.isFetching,
);
