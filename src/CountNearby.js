import CurCoord from './CurCoord';
import { useState } from "react";

const CountNearby = (props) => {

    console.log(props.latLon);

    const [closeToUserPoints, setCloseToUserPoints] = useState([]);
    
    const handlerCurrentCoord = (latitude, longitude) => {

        console.log(latitude, longitude);

        for (let individual_point in props.latLon) {
            if ((Math.abs(individual_point.Latitude - latitude) < 0.01) && 
                (Math.abs(individual_point.Longitude - longitude) < 0.01)) {
                    const placeholderPoint = {...closeToUserPoints, 
                            nearbyLatitude: individual_point.Latitude, 
                            nearbyLongitude: individual_point.Longitude};
                    setCloseToUserPoints(placeholderPoint);
                    console.log(closeToUserPoints);
            }
        }

    };

    return (
        <div>
            <CurCoord onCurrentCoord = {handlerCurrentCoord} />
            <p>{closeToUserPoints}</p>
        </div>
        
    );
};

export default CountNearby;