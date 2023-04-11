import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import './map.styles.css';

const containerStyle = {
    width: '30vw',
    height: '20vw'
};


const onLoad = marker => {
    console.log('marker: ', marker)
}

const Map = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyB1COhDrkOUQzSm_BOfap0sFdSznXyR91Y'
    })

    if(!isLoaded) {
        return <div>Loading...</div>
    }

    return (
        <div id="map">
            <GoogleMap center={{lat: 35.96638, lng: -78.52467}} zoom={18} mapContainerStyle={containerStyle}><MarkerF onLoad={onLoad} position={{lat: 35.96638, lng: -78.52467}} /></GoogleMap>
        </div>
    )
}

export default Map;



//AIzaSyDrBZ9xW7plD65dpJ1QC8bkzUNnVDTaTc0

//35.96639491120095, -78.52467373274929