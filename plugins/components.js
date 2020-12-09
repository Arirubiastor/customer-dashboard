import Vue from 'vue'
import BookingHeader from '~/components/BookingDetails/BookingHeader.vue'
import BookingStatus from '~/components/BookingDetails/BookingStatus.vue'
import BookingWorkflow from '~/components/BookingDetails/BookingWorkflow.vue'
import StatusSummary from '~/components/Login/StatusSummary.vue'
import TabStatus from '~/components/BookingDetails/BookingStatus/TabStatus.vue'
import TabMap from '~/components/BookingDetails/BookingStatus/TabMap.vue'
import TabDetails from '~/components/BookingDetails/BookingStatus/TabDetails.vue'
// import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

Vue.component('booking-header', BookingHeader)
Vue.component('booking-status', BookingStatus)
Vue.component('booking-workflow', BookingWorkflow)
Vue.component('status-summary', StatusSummary)
Vue.component('tab-status', TabStatus)
Vue.component('tab-map', TabMap)
Vue.component('tab.details', TabDetails)
// Vue.component('l-map', LMap);
// Vue.component('l-tile-layer', LTileLayer);
// Vue.component('l-marker', LMarker);