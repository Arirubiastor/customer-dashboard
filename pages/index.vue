<template>
  <div>
    <h1 class="text-center">Login page</h1>
    <StatusSummary :bookingData="bookingData" />
    <b-button tag="nuxt-link" to="/booking-details" variant="outline-primary">Booking Details</b-button>
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
    console.log(data)
    return {bookingData:data}
  }

  // async asyncData () {
  //   const {data} = await axios.get('jsonObject')
  //   console.log('Data:' + data)
  //   return {data}

  // },

  // async asyncData({ params, $http }) {
  //     const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
  //     return { post }
  //   },
}
</script>

<style>

</style>
