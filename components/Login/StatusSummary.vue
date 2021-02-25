<template>
  <div>
    <b-container class="mt-4 mt-md-5" align-v="center">
      <h1 class="index__title text-center">Track &amp; Trace</h1>
      <p class="text__input mt-0 mt-md-3 p-2 text-center">
        {{ formInstructions1 }}
      </p>
          <form class="booking__form mb-5 d-md-inline-flex text-center">
            <div class="group-input d-flex flex-column">
              <b-form-input
              class="booking-input__form d-inline border border-primary"
              v-model="bookingValidation"
              :placeholder="formPlaceholder"
              type="number"
              max="5"
              size="lg"
            ></b-form-input>
              <b-form-text class="form__help" id="input-live-help">{{ formHelp }}</b-form-text>
            </div>
            
              <b-button 
              :to="`/booking-details/?uuidBooking=${this.$route.query.uuidBooking}&nombreCliente=SchryverPruebas`"
              tag="nuxt-link"
              variant="outline-primary"
              class="mt-4 mb-4 ml-md-4 mt-md-0 mb-md-4"
              size="lg"
              @click.native="checkBooking()"
              >Validate</b-button>
          </form>

          <TabStatus class="mt-md-4" :workflow="bookingData.workflow" />

      <b-row>
        <b-col align-self="center mt-3 mt-md-4">
          <b-list-group class="details-table mb-3 mb-md-4">
          <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Main Transport</b-col>
          <b-col v-if="bookingData.movement != null && bookingData.movement != ''">{{ bookingData.movement }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.salesRepOrigin != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold"
            >Sales Representative Origin</b-col
          >
          <b-col>{{ bookingData.salesRepOrigin }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.opsExecOrigin != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Customer Service Origin</b-col>
          <b-col>{{ bookingData.opsExecOrigin }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.salesRepDestination != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Sales Representative Destination</b-col>
          <b-col>{{ bookingData.salesRepDestination }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.opsExecDestination != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Customer Service Destination</b-col>
          <b-col>{{ bookingData.opsExecDestination }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.salesRep != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Sales Representative</b-col>
          <b-col>{{ bookingData.salesRep }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item v-if="bookingData.opsExec != null">
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Customer Service</b-col>
          <b-col>{{ bookingData.opsExec }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Description of Goods</b-col
          >
          <b-col v-if="bookingData.descriptionGoodsBkg != null && bookingData.descriptionGoodsBkg != ''">{{ bookingData.descriptionGoodsBkg }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item>
        <b-row>
          <b-col cols="md-4" class="font-weight-bold">Incoterm</b-col>
          <b-col v-if="bookingData.incoterm != null && bookingData.incoterm != ''">{{ bookingData.incoterm }}</b-col>
          <b-col v-else>{{ emptyString }}</b-col>
        </b-row>
      </b-list-group-item>
            </b-list-group>

          
        </b-col>
      </b-row>
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
    workflow: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      bookingValidation: "",
      workflow: this.workflow,
      arrayDates: [],
      emptyString: '---',
      formInstructions: 'To see more information about this shipment enter the last 5 digits of the booking number',
      formInstructions1: 'Please input your booking number',
      formPlaceholder: 'ej. 12345',
      formHelp: 'Enter the last 5 digits of the booking number',
    };
  },
  computed: {
    lastDate() {
      // return new Date(Math.max(step.accomplishedDate.map(e => new Date(e.MeasureDate))));
    },
    test() {
      var data = this.workflow;
      var sorted = data.sort(function (a, b) {
        return Date.parse(b.accomplishedDate) - Date.parse(a.accomplishedDate);
      });
    },
  },
  methods: {
    checkBooking() {
      if (this.bookingValidation === this.bookingData.booking ) {
        alert('done!')
      }
    }
  },

  // Booking Validation
  watch: {
    booking(value) {
      this.booking = value;
      this.validateBooking(value);
    }
  },

};
</script>

<style lang="scss">
// .test {
//   height: calc(100vh - 176px);
// }

.index__title {
    font-size: 26px;
  }

.text__input {
  // font-weight: 500;
  font-size: 20px;
}

.booking__form {
  margin: auto !important;
  justify-content: center;
  width: 100%;

  // display: flex;
  // flex-direction: column;
}

.booking-input__form {
  max-width: 17rem;
}

.form__help {
  display: inline-block;
}

.group-input {
  align-items: center;
}

@media (min-width: 768px) {
  .index__title {
    font-size: 42px;
  }
  .text__input {
  // font-weight: 500;
  font-size: 22px;
}
}
</style>