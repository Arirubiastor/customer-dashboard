import Vue from 'vue';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

// -----------------TEST MAP

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

// ---------------------------