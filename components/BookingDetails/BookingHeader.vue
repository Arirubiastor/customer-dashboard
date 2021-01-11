<template>
  <div>
    <b-container>
      <b-card-group deck>
        <b-card no-body class="p-2" border-variant="primary" align="center">
          <b-card-header class="pt-1 pt-md-2 d-inline">
          <b-icon
            icon="box"
            variant="primary"
            style="width: 20px; height: 20px"
            class="d-inline mr-2"
          ></b-icon>
            Booking
          </b-card-header>
          <p class="font-weight-bold mb-2 mt-2 mt-md-3">
            {{ bookingData.booking }}
          </p>
        </b-card>
        <b-card no-body class="p-2" border-variant="primary" align="center">
          <b-card-header class="pt-1 pt-md-2">
            <b-icon
            icon="box-arrow-right"
            variant="primary"
            style="width: 20px; height: 20px"
            class="d-inline mr-2"
          ></b-icon>
            Shipper
          </b-card-header>
          <p class="font-weight-bold mb-2 mt-2 mt-md-3">
            {{ bookingData.shipper }}
          </p>
        </b-card>
        <b-card no-body class="p-2" border-variant="primary" align="center">
          <b-card-header class="pt-1 pt-md-2">
            <b-icon
            icon="box-arrow-in-right"
            variant="primary"
            style="width: 20px; height: 20px"
            class="d-inline mr-2"
          ></b-icon>
            Consignee
          </b-card-header>
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
    },
  },
};
</script>

<style lang="scss">
</style>