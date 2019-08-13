import { createSelector } from 'reselect';

import { Car } from './car.interfaces';
import { ReducerState } from './car.reducer';

type State = { [key: string]: ReducerState };

const selectCarState = <State, ReducerState>(state: {
    [key: string]: ReducerState;
}): ReducerState => state.car;

export const selectCar = createSelector<State, ReducerState, Car | string>(
    [selectCarState],
    (car: ReducerState): Car | string => {
        if (car) return car.car;
        return '';
    },
);

export const selectIsVehiclesFetching = createSelector<
    State,
    ReducerState,
    boolean
>(
    [selectCarState],
    (car: ReducerState): boolean => car.isFetching,
);
