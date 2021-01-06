import Vue from 'vue';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

// import L from 'leaflet';
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

// import Vue from 'vue'

// import Vue2Leaflet from 'vue2-leaflet'

// const VueLeaflet = {

//   install(Vue, options) {
//     Vue.component('l-map', Vue2Leaflet.LMap)
//     Vue.component('l-marker', Vue2Leaflet.LMarker)
//     Vue.component('l-tile-layer', Vue2Leaflet.LTileLayer)
//   }

// };

// Vue.use(VueLeaflet);

// export default VueLeaflet;