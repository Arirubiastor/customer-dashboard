<template>
  <div>
    <h1>Track &amp; trace</h1>
    <h2>{{ bookingDetails.booking }}</h2>
    <h2>{{ bookingDetails.shipper }}</h2>
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
