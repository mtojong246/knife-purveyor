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
            <GoogleMap center={{lat: 35.96638, lng: -78.52467}} zoom={18} mapContainerStyle={style()}><MarkerF onLoad={onLoad} position={{lat: 35.96638, lng: -78.52467}} /></GoogleMap>
        </div>
    )
}

export default Map;


