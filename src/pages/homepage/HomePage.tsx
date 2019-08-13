import React, { FC, useEffect } from 'react';
import { compose } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect, Connect, MapStateToProps } from 'react-redux';

import { Container, Title, Card, Preview, Photo } from './HomePage.styles';
import { createStructuredSelector } from 'reselect';
import { StoreState } from '../../redux/root.reducer';
import { selectVehicles } from '../../redux/vehicles/vehicles.selectors';
import { Vehicle } from '../../redux/vehicles/vehicles.interfaces';

interface OwnProps {}
interface Props extends RouteComponentProps {
    collection: Vehicle[];
}

const HomePage: FC<Props> = ({ collection, history }) => {
    useEffect(() => {}, [collection]);
    console.log(history);
    const handleClick = (id: string): void => history.push(`/${id}`);

    return (
        <Container>
            <Title>Check our preview!</Title>
            <Preview>
                {collection.map(car => (
                    <Card onClick={() => handleClick(car.id)} key={car.id}>
                        <Photo
                            src={`http://localhost:1234${car.media[0].url}`}
                            alt={car.media[0].name}
                        />
                        <div>
                            <span>Name: </span>
                            {car.media[0].name}
                        </div>
                        <div>
                            <span>Model Year: </span>
                            {car.modelYear}
                        </div>
                    </Card>
                ))}
            </Preview>
        </Container>
    );
};

const mapStateToProps: MapStateToProps<
    Connect,
    OwnProps,
    StoreState
> = createStructuredSelector<StoreState, OwnProps, Connect>({
    collection: selectVehicles,
});

export default compose(
    withRouter,
    connect<Connect>(mapStateToProps),
)(HomePage);
