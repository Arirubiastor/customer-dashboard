<template>
  <div>
    <b-navbar type="dark" variant="primary" fixed="top">
      <b-navbar-brand class="ml-md-4">
        <!-- <b-img :src="bookingData.imageLogo" class="brand-image__header m-2"></b-img> -->
        <!-- <b-img src=`https://track-trace-assets.s3-us-west-2.amazonaws.com/Schryver/white-logo.png` class="brand-image__header m-2"></b-img> -->
        <b-img :src="`https://track-trace-assets.s3-us-west-2.amazonaws.com/${this.$route.query.nombreCliente}/white-logo.png`" class="brand-image__header m-2"></b-img>
      </b-navbar-brand>
      <b-nav-text class="ml-auto mr-md-4">
        <b-navbar-text class="header-title text-light">Track &amp; Trace</b-navbar-text>
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
  height: 2rem;
}
.header-title {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
}
</style>