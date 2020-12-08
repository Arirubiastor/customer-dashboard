import Vue from 'vue'
import BookingHeader from '~/components/BookingDetails/BookingHeader.vue'
import BookingStatus from '~/components/BookingDetails/BookingStatus.vue'
import BookingWorkflow from '~/components/BookingDetails/BookingWorkflow.vue'
import StatusSummary from '~/components/Login/StatusSummary.vue'

Vue.component('booking-header', BookingHeader)
Vue.component('booking-status', BookingStatus)
Vue.component('booking-workflow', BookingWorkflow)
Vue.component('status-summary', StatusSummary)