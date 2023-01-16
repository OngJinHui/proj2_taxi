import CurCoord from './CurCoord';

const CountNearby = (props) => {

    console.log(props.latLon);

    let close_to_user_points = [];
    
    const handlerCurrentCoord = (latitude, longitude) => {

        console.log(latitude, longitude);

        for (let individual_point in props.latLon) {
            if ((Math.abs(individual_point.Latitude - latitude) < 0.01) && 
                (Math.abs(individual_point.Longitude - longitude) < 0.01)) {
                    close_to_user_points.push(individual_point);
                    // console.log(close_to_user_points);
            }
        }

    };

    return (
        <div>
            <CurCoord onCurrentCoord = {handlerCurrentCoord} />
            <p>{close_to_user_points}</p>
        </div>
        
    );
};

export default CountNearby;