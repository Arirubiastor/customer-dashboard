<template>
  <div>
    <b-navbar type="dark" variant="primary" fixed="top">
      <b-navbar-brand class="ml-md-4">
        <!-- <b-img :src="bookingData.imageLogo" class="brand-image__header m-2"></b-img> -->
        <b-img src="https://track-trace-assets.s3-us-west-2.amazonaws.com/Schryver/white-logo.png" class="brand-image__header m-2"></b-img>
      </b-navbar-brand>
      <b-nav-text class="ml-auto mr-md-4">
        <b-navbar-text class="text-light font-weight-bold">Track &amp; Trace</b-navbar-text>
      </b-nav-text>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    bookingData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.brand-image__header {
  height: 2.3rem;
}
</style>