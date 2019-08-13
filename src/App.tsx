import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { connect, Connect } from 'react-redux';

import HomePageContainer from './pages/homepage/HomePage.container';
import VehiclePage from './pages/vehiclepage/VehiclePage';
import { fetchVehiclesStart } from './redux/vehicles/vehicles.actions';

interface Props {
    fetchInitialData?: Function;
}

const App: React.FC<Props> = ({ fetchInitialData }) => {
    useEffect(() => {
        if (typeof fetchInitialData === 'function') fetchInitialData();
    }, [fetchInitialData]);

    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePageContainer} />
                <Route path="/:vehicleId" component={VehiclePage} />
            </Switch>
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    fetchInitialData: dispatch(fetchVehiclesStart()),
});

export default connect<Connect>(
    null,
    mapDispatchToProps,
)(App);
