import CurCoord from './CurCoord';
import { useState } from "react";

const CountNearby = (props) => {

    const [closeToUserPoints, setCloseToUserPoints] = useState({});

    const handlerCurrentCoord = (latitude, longitude) => {

        props.latLon.forEach(individual_point => {
            if ((Math.abs(individual_point.Latitude - latitude) < 0.01) && 
                (Math.abs(individual_point.Longitude - longitude) < 0.01)) {
                    const placeholderSetOfPoints = {...closeToUserPoints}
                    placeholderSetOfPoints.append({nearbyLatitude: individual_point.Latitude, 
                                                   nearbyLongitude: individual_point.Longitude});
                    setCloseToUserPoints(placeholderSetOfPoints)
            }
        });

    };

    return (
        <div>
            <CurCoord onCurrentCoord = {handlerCurrentCoord} />
            <p>{closeToUserPoints[0]}</p>
        </div>
        
    );
};

export default CountNearby;