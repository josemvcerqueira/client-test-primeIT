import { FC } from 'react';
import { compose } from 'redux';
import { connect, Connect, MapStateToProps } from 'react-redux';
import { StoreState } from '../../redux/root.reducer';
import { createStructuredSelector } from 'reselect';

import HomePage from './HomePage';
import withLoading from '../components/withLoading';
import { selectIsVehiclesFetching } from '../../redux/vehicles/vehicles.selectors';

interface OwnProps {}

const mapStateToProps: MapStateToProps<
    Connect,
    OwnProps,
    StoreState
> = createStructuredSelector<StoreState, OwnProps, Connect>({
    isFetching: selectIsVehiclesFetching,
});

const HomePageContainer = compose<FC>(
    connect(mapStateToProps),
    withLoading,
)(HomePage);

export default HomePageContainer;
