<template>
  <div>
    <b-container class="mt-4">
      <b-tabs content-class="mt-3" justified active-nav-tab-class="font-weight-bold">
        <b-tab title="Status" active>
          <TabStatus :workflow="bookingData.workflow" />
        </b-tab>
        <b-tab title="Map" v-if="bookingData.latlng !=null && bookingData.latlng != ''" @shown="modalShown">
          <TabMap :coordsList="bookingData.latlng" :bookingNum="bookingData.booking" />
        </b-tab>
        <b-tab title="Details">
          <!-- <TabDetails :statusData="bookingData" /> -->
          <TabDetails :statusData="bookingData" :tramoBkg="bookingData.tramoBkg" />
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    bookingData: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      bookindData: this.bookingData
    }
  },
  methods: {
    modalShown() {
      setTimeout(() => {
        this.$refs.mymap.mapObject.invalidateSize();
      }, 100);
    },
  }
};
</script>

<style>
</style>