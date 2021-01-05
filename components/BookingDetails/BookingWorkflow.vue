<template>
  <div>
    <b-container class="mt-4">
      <!-- <b-container fluid class="mt-4"> -->
      <h2 class="m-4">Booking Workflow</h2>
      <!-- <p>{{ workflow }}</p> -->
      <div class="accordion" role="tablist">
        <b-card
          no-body
          class="mb-1"
          v-for="(itemWorkflow, index) in workflow"
          :key="index"
        >
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="'accordion-' + index" variant="primary">
              <b-row>
                <b-col cols="12" class="text-left">{{
                  itemWorkflow.stageVerbose
                }}</b-col>
                <b-col class="text-left">
                  Accomplished Date:<br />{{ itemWorkflow.accomplishedDate }}
                </b-col>
              </b-row>
            </b-button>
          </b-card-header>
          <b-collapse
            :id="'accordion-' + index"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="p-0">
              <b-card-text>
                <!-- {{ itemWorkflow.steps }}   -->
                <div>

                  <!-- FUNCIONA PARCIALMENTE -->
                  <!-- <b-table
                    hover
                    :fields="fields"
                    :items="itemWorkflow.steps"
                    responsive="sm"
                  >
                    <template #cell(details)="row">
                      <b-button
                        size="sm"
                        @click="row.toggleDetails"
                        class="mr-2"
                      >
                        {{ row.detailsShowing ? "Hide" : "Show" }} Details
                      </b-button>
                    </template>

                    <template #row-details="row">
                      <b-card no-body>
                        <table class="table table-bordered">
                          <tbody
                          v-for="(itemStatusVerbose, index) in itemWorkflow.steps"
                          :key="index">
                            <tr>
                              <th scope="col">1</th>
                              <td>{{ itemStatusVerbose.steps }}</td>
                              <td>
                                <b-list-group v-for="test in itemStatusVerbose.steps" :key="test">
                                <b-list-gtoup-item>
                                  {{ test.stepVerbose }}
                                </b-list-gtoup-item>
                                <b-list-gtoup-item>
                                  {{ test.alarmDate }}
                                </b-list-gtoup-item>
                              </b-list-group>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        </b-card>
                    </template>
                  </b-table> -->

                  <!-- <b-list-group>
                        <b-list-group-item>
                          <b-row>
                            <b-col>Status Verbose:</b-col>
                            <b-col>Alarm Date:</b-col>
                            <b-col>{{ itemStatusVerbose.steps }}</b-col>
                          </b-row>
                        </b-list-group-item>
                      </b-list-group> -->

                  <!-- FUNCIONA PARCIALMENTE -->

                  <!-- TEST -->

                  <b-list-group>
                    <b-list-group-item>
                      <b-row>
                        <b-col>Status Verbose</b-col>
                        <b-col>Alarm Date</b-col>
                      </b-row>
                    </b-list-group-item>
                  </b-list-group>

                  <b-list-group>
                    <b-list-group-item
                      v-for="(itemStatusVerbose, index) in itemWorkflow.steps"
                      :key="index"
                    >
                      <b-row>
                        <b-col class="p-0">
                          <b-button v-b-toggle="'collapse-' + index" @click="itemStatusVerbose.index = !itemStatusVerbose.index"
                            v-if="itemStatusVerbose.steps != null">
                            <!-- <b-icon
                              v-if="!itemStatusVerbose.index"
                              icon="plus-square"
                              aria-label="Show Details"
                              class="mr-0"
                            ></b-icon>
                            <b-icon
                              v-else
                              icon="dash-square"
                              aria-label="Hide Details"
                              class="mr-0"
                            ></b-icon> -->
                            <b-icon
                              icon="chevron-down"
                              aria-label="Show Details"
                              class="mr-0"
                              name="icon"
                            ></b-icon>
                          </b-button>
                          <b-button v-b-toggle="'collapse-' + index" @click="itemStatusVerbose.index = !itemStatusVerbose.index" v-else disabled>
                            <b-icon
                              icon="chevron-down"
                              aria-label="Show Details"
                              class="mr-0"
                              name="icon"
                            ></b-icon>
                          </b-button>
                          {{ itemStatusVerbose.statusVerbose }}</b-col
                        >
                        <b-col>{{ itemStatusVerbose.accomplishedDate }}</b-col>
                      </b-row>
                      <b-row>
                        <b-col class="p-0">
                          <b-collapse :id="'collapse-' + index">
                            <b-card no-body>
                              <b-list-group>
                                <b-list-group-item v-for="(itemStepVerbose, index) in itemStatusVerbose.steps" :key="index">
                                  <b-row>
                                    <b-col>
                                      {{ itemStepVerbose.stepVerbose }}
                                    </b-col>
                                    <b-col>
                                      {{ itemStepVerbose.alarmDate }}
                                    </b-col>
                                  </b-row>
                                </b-list-group-item>
                              </b-list-group>
                            </b-card>
                          </b-collapse>
                        </b-col>
                      </b-row>
                    </b-list-group-item>
                  </b-list-group>

                  <!-- <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Status Verbose</th>
                          <th scope="col">Alarm Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(itemStatusVerbose, index) in itemWorkflow.steps"
                          :key="index"
                        >
                          <td>{{ itemStatusVerbose.statusVerbose }}</td>
                          <td>{{ itemStatusVerbose.alarmDate }}</td>
                          <b-button
                            block
                            class="p-3 font-weight-bold text-left"
                            :class="visibleStepVerbose ? null : 'collapsed'"
                            :aria-expanded="
                            visibleStepVerbose ? 'true' : 'false'"
                            aria-controls="collapse-stepVerbose"
                            @click="visibleStepVerbose = !visibleStepVerbose"
                          >
                            <b-icon
                              v-if="!visibleStepVerbose"
                              icon="plus-square"
                              aria-label="Show Details"
                              class="mr-0"
                            ></b-icon>
                            <b-icon
                              v-else
                              icon="dash-square"
                              aria-label="Hide Details"
                              class="mr-0"
                            ></b-icon>
                          </b-button>
                          <b-collapse
                            id="collapse-stepVerbose"
                            v-model="visibleStepVerbose"
                          >
                            <div>
                              <b-list-group>
                                <b-list-group-item v-for="itemStepVerbose in itemStatusVerbose.steps" :key="itemStepVerbose">
                                  <b-row>
                                    <b-col>{{ itemStepVerbose.stepVerbose }}</b-col>
                                    <b-col>{{ itemStepVerbose.alarmDate }}</b-col>
                                  </b-row>
                                </b-list-group-item>
                              </b-list-group>
                            </div>
                          </b-collapse>
                        </tr>
                      </tbody>
                  </table> -->
                  <!-- TEST -->
                </div>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <!-- if statusVerbose has steps, show the plus/details button OR if statusVerbose.steps = Null, don't show details button -->
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    workflow: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fields: ["statusVerbose", "alarmDate", "details"],
      // items: [
      //   { status_verbose: "Shipping advice", alarm_date: "---" },
      //   { status_verbose: "Shipping advice", alarm_date: "---" },
      // ],
      fieldsTest: ["stepVerbose", "alarmDate"],
      visibleStageSteps: false,
      visibleStepVerbose: false,
      // '0': false,
      // '1': false,
      // visibleBkgContenedor: false,
    };
  },
  // computed: {
  //   isEmpty: ({StatusSteps})
  // }
};
</script>

<style>
</style>