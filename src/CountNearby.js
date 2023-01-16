import CurCoord from './CurCoord';
import { useState } from "react";

const CountNearby = (props) => {

    const [closeToUserPoints, setCloseToUserPoints] = useState([]);

    const handlerCurrentCoord = (latitude, longitude) => {

        let keyCounter = 1;

        let keyNearbyLat = 'nearbyLat' + keyCounter.toString();
        let keyNearbyLon = 'nearbyLon' + keyCounter.toString();

        const placeholderSetOfPoints = [];

        props.latLon.forEach(individual_point => {
            if ((Math.abs(individual_point.Latitude - latitude) < 0.01) && 
                (Math.abs(individual_point.Longitude - longitude) < 0.01)) {
                    
                    // push the coordinates into the arr
                    placeholderSetOfPoints.push({[keyNearbyLat]: individual_point.Latitude, 
                                                 [keyNearbyLon]: individual_point.Longitude});

                    setCloseToUserPoints(placeholderSetOfPoints);

                    keyCounter = keyCounter + 1;
            }
        });

    };

    return (
        <div>
            <CurCoord onCurrentCoord = {handlerCurrentCoord} />
            <h2>List of nearest available taxis' coordinates</h2>
            <ul>
                {closeToUserPoints.map((item) => <li>{item.keyNearbyLat}, {item.keyNearbyLon}</li>)};
            </ul>
        </div> 
    );
};

export default CountNearby;