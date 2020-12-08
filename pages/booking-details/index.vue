<template>
  <div>
    <h1>Booking Details</h1>
    <h2>Booking Number: {{ bookingDetails.booking }}</h2>
    <h2>Shipper: {{ bookingDetails.shipper }}</h2>
    <h2>Consignee: {{ bookingDetails.consignee }}</h2>
    <b-button tag="nuxt-link" to="/" variant="outline-primary">Back to login</b-button>
  </div>
</template>

<script>
import data from '~/static/bookingData.json'

export default {
  data() {
    return {
      bookingDetails: [],
    }
  },
  asyncData ({ params }) {
    console.log(data)
    return {bookingDetails:data}
  }
}
</script>