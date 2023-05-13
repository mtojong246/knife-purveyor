import './map.styles.css';
import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "AIzaSyB1COhDrkOUQzSm_BOfap0sFdSznXyR91Y",
  version: "weekly",
});

const mapOptions = {
  center: {
    lat: 35.96638,
    lng: -78.52467
  },
  zoom: 18
};



const Map = () => {
  
  loader
  .load()
  .then((google) => {
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const marker = new google.maps.Marker({
        position: mapOptions.center,
        map,
        title: 'Knife Purveyor, Inc'
    })
    const contentString = 
        '<div id="content">' +
        '<span>Knife Purveyor, Inc.</span>' +
        '<br/><a href="https://www.google.com/maps/place/100+Siena+Office+Park+Rd,+Wake+Forest,+NC+27587/@35.9663691,-78.5272491,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac517ec9130e2f:0x185d2242dfdc1159!8m2!3d35.9663691!4d-78.5246742!16s%2Fg%2F11ncmngg2h" target="_blank" rel="noopener noreferrer">View on Google Maps</a>' +
        '</div';
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        ariaLabel: 'Knife Purveyor, Inc'
    })
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
        })
    })
  })
  .catch(e => {
    console.log(e)
  });


    return (
        <div className='map'>
            <div id="map"></div>
        </div>
    )
}

export default Map;


