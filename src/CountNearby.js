import CurCoord from './CurCoord';

const CountNearby = (props) => {
    const handlerCurrentCoord = (latitude, longitude) => {
        let close_to_user_points = [];

        // for (individual_point in props.latLon) {
        //     if ((Math.abs(individual_point.Latitude - latitude) < 0.001) && 
        //         (Math.abs(individual_point.Longitude - longitude) < 0.001)) {
        //             close_to_user_points.push(individual_point);
        //     }
        // }

    };

    return (
        <div>
            <CurCoord onCurrentCoord = {handlerCurrentCoord} />
            {/* <p>{close_to_user_points}</p> */}
        </div>
        
    );
};

export default CountNearby;