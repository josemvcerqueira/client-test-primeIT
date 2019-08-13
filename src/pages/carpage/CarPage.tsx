import React, { FC, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect, Connect, MapStateToProps } from 'react-redux';

import { StoreState } from '../../redux/root.reducer';
import { Car } from '../../redux/car/car.interfaces';
import { selectCar } from '../../redux/car/car.selectors';
import { Container, Title } from './CarPage.styles';
import { Dispatch } from 'redux';
import { fetchCarStart } from '../../redux/car/car.actions';

interface MatchParams {
    vehicleId: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    car: Car;
    fetchCarData: Function;
}

const CarPage: FC<Props> = ({
    match: { params },
    car,
    fetchCarData,
    history,
}) => {
    const id = params.vehicleId;

    useEffect(() => {
        if (typeof fetchCarData === 'function') fetchCarData(id);
    }, [id, fetchCarData]);

    const handleClick = () => history.push('/');

    const { price, meta, description } = car;

    return (
        <Container>
            {car ? (
                <>
                    <Title>{id}</Title>
                    <span>Description</span>
                    {description}
                    <span>Passengers</span>
                    {meta.passengers}
                    <span>Drive Train</span>
                    {meta.drivetrain.join(' ')}
                    <span>Body Styles</span>
                    {meta.bodystyles.join(' ')}
                    <span>Emissions</span>
                    {meta.emissions.template} with a value of{' '}
                    {meta.emissions.value}
                    <span>price</span>
                    {price}
                    <button onClick={handleClick}>Home</button>
                </>
            ) : (
                <Title>Loading...</Title>
            )}
        </Container>
    );
};

const mapStateToProps: MapStateToProps<
    Connect,
    MatchParams,
    StoreState
> = createStructuredSelector<StoreState, MatchParams, Connect>({
    car: selectCar,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchCarData: (id: string) => dispatch(fetchCarStart(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CarPage);
