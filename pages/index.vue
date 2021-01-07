<template>
  <div>
    <StatusSummary :bookingData="bookingData" />
  </div>
</template>

<script>
import data from '~/static/bookingData.json'
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

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
