<template>
  <div>
    <h1 class="text-center">Booking Details</h1>
    <BookingHeader :bookingData="bookingData" />
    <BookingStatus :bookingData="bookingData" />
    <BookingWorkflow :workflow="bookingData.workflow[0]" />
    <b-button tag="nuxt-link" to="/" variant="outline-primary">Back to login</b-button>
  </div>
</template>

<script>
import data from '~/static/bookingData.json'

export default {
  data() {
    return {
      bookingData: [],
    }
  },
  asyncData ({ params }) {
    // console.log(data)
    return {bookingData:data}
  }
}
</script>