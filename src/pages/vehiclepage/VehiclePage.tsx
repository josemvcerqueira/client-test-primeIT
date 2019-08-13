import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    vehicleId: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const VehiclePage: FC<Props> = ({ match: { params } }) => {
    const id = params.vehicleId;
    return <div>{id}</div>;
};

export default VehiclePage;
