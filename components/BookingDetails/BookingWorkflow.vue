<template>
  <div>
    <h2 class="m-4">Booking Workflow</h2>
    <b-container fluid class="mt-4">
      <b-table hover :items="items" responsive="sm">

      <template #thead-top="data">
        <b-tr>
          <!-- <b-th colspan="2"><span class="sr-only">Name and ID</span></b-th> -->
          <b-th variant="secondary">Pre Carriage</b-th>
          <b-th variant="primary" colspan="3">Accomplished Date</b-th>
        </b-tr>
      </template>

      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
      </template>

      <template #row-details="row">
        <b-table :items2="items2" :fields2="fields2">

        </b-table>
        <!-- <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>{{ row.item.age }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card> -->
      </template>
    </b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
        fields: ['pre_carriage', 'accomplished_date'],
        items: [
          { isActive: true, pre_carriage: 'Dickerson', accomplished_date: 'Macdonald' },
          { isActive: false, pre_carriage: 'Larsen', accomplished_date: 'Shaw' },
          {
            isActive: false,
            age: 89,
            first_name: 'Geneva',
            last_name: 'Wilson',
            _showDetails: true
          },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ],
        fields2: ['status_verbose', 'alarm_date'],
        items2: [
          {isActive: true, status_verbose: 'Shipping advice', alarm_date: '---'}
        ]
      }
    }
}
</script>

<style>

</style>