import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import './map.styles.css';

const mobileStyle = {
    width: '70vw',
    height: '60vw'
};

const containerStyle = {
    width: '30vw',
    height: '20vw'
}

const style = () => {
    if (window.innerWidth > 480) {
        return containerStyle;
    } else {
        return mobileStyle;
    }
}


const onLoad = marker => {
    console.log('marker: ', marker)
}

const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
    })

    if(!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <div id="map">
            <GoogleMap center={{lat: 35.96638, lng: -78.52467}} zoom={18} mapContainerStyle={style()}>
                <MarkerF onLoad={onLoad} position={{lat: 35.96638, lng: -78.52467}} onClick={() => window.open("https://www.google.com/maps/place/35%C2%B057'59.0%22N+78%C2%B031'28.8%22W/@35.96638,-78.5272449,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.96638!4d-78.52467", "_blank", "noreferrer")}/>
            </GoogleMap>
        </div>
    )
}

export default Map;


