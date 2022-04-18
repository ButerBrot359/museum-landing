mapboxgl.accessToken = 'pk.eyJ1IjoiYnV0ZXJicm90MzU5IiwiYSI6ImNrdWpvMXd2dzE0dzUycG5tNms2MG1reHkifQ.TmzqTsxnLhz_nMYi-TlYiw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/buterbrot359/ckujos0rlaijt18mripelimj7',
  center: [2.3364, 48.86091],
  zoom: 15.5
});
const marker1 = new mapboxgl.Marker({ color: 'black'})
.setLngLat([2.3364, 48.86091])
.addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: '#757575'})
.setLngLat([2.3333, 48.8602])
.addTo(map);
const marker3 = new mapboxgl.Marker({ color: '#757575'})
.setLngLat([2.3397, 48.8607])
.addTo(map);
const marker4 = new mapboxgl.Marker({ color: '#757575'})
.setLngLat([2.3330, 48.8619])
.addTo(map);
const marker5 = new mapboxgl.Marker({ color: '#757575'})
.setLngLat([2.3365, 48.8625])
.addTo(map);
map.addControl(new mapboxgl.NavigationControl());