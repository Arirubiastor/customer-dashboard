<template>
  <div>
    <b-container>
      <b-card-group deck>
      <b-card no-body class="p-2" border-variant="primary" align="center">
        <b-card-header class="pt-1 pt-md-2">Booking</b-card-header>
        <p class="font-weight-bold mb-2 mt-2 mt-md-3">
          {{ bookingData.booking }}
        </p>
      </b-card>
      <b-card no-body class="p-2" border-variant="primary" align="center">
        <b-card-header class="pt-1 pt-md-2">Shipper</b-card-header>
        <p class="font-weight-bold mb-2 mt-2 mt-md-3">
          {{ bookingData.shipper }}
        </p>
      </b-card>
      <b-card no-body class="p-2" border-variant="primary" align="center">
        <b-card-header class="pt-1 pt-md-2">Consignee</b-card-header>
        <p class="font-weight-bold mb-2 mt-2 mt-md-3">
          {{ bookingData.consignee }}
        </p>
      </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    bookingData: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style lang="scss">


</style>