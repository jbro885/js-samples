// [START maps_control_simple]
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 },
    zoomControl: false,
    scaleControl: true,
  });
}
// [END maps_control_simple]
