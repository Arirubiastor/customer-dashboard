<template>
  <div class="mb-md-5">
    <b-container class="workflow__container mt-4 mb-4 mb-md-5">
      <!-- <b-container fluid class="mt-4"> -->
      <h2 class="mb-4">Shipment Milestones</h2>
      <!-- <p>{{ workflow }}</p> -->
      <div class="accordion" role="tablist">
        <b-card
          no-body
          class="mb-1"
          v-for="(itemWorkflow, index) in workflow"
          :key="index"
        >
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="'accordion-' + index" variant="primary" class="button-accordion">
              <b-row>
                <b-col cols="12" class="text-left">{{
                  itemWorkflow.stageVerbose
                }}</b-col>
                <b-col
                  class="text-left"
                  v-if="
                    itemWorkflow.accomplishedDate != null &&
                    itemWorkflow.accomplishedDate != ''
                  "
                >
                  Actual Date:<br />{{ itemWorkflow.accomplishedDate }}
                </b-col>
                <b-col class="text-left" v-else
                  >Actual Date: {{ emptyString }}</b-col
                >
              </b-row>
            </b-button>
          </b-card-header>
          <b-collapse
            :id="'accordion-' + index"
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="p-0">
              <b-card-text>
                <!-- {{ itemWorkflow.steps }}   -->
                <div>

                  <b-list-group>
                    <b-list-group-item>
                      <b-row>
                        <b-col class="font-weight-bold pl-1 pl-md-4">Status</b-col>
                        <b-col class="font-weight-bold pl-0">Planned Date</b-col>
                      </b-row>
                    </b-list-group-item>
                  </b-list-group>

                  <b-list-group>
                    <b-list-group-item
                      v-for="(itemStatusVerbose, index) in itemWorkflow.steps"
                      :key="index"
                    >
                      <b-row>
                        <b-col class="pl-1 pl-md-4">
                          {{ itemStatusVerbose.statusVerbose }}</b-col
                        >
                        <b-col
                          v-if="
                            itemStatusVerbose.accomplishedDate != null &&
                            itemStatusVerbose.accomplishedDate != ''
                          "
                          >{{ itemStatusVerbose.accomplishedDate }}
                          </b-col
                        >
                        <b-col v-else>{{ emptyString }}</b-col>
                        <b-button
                            v-b-toggle="'collapse-' + index"
                            @click="
                              itemStatusVerbose.index = !itemStatusVerbose.index
                            "
                            v-if="itemStatusVerbose.steps != null"
                            class="p-0 mr-1 mr-md-2"
                          >
                            <b-icon
                              icon="chevron-down"
                              aria-label="Show Details"
                              class="mr-0"
                              name="icon"
                            ></b-icon>
                          </b-button>
                          <b-button
                            v-b-toggle="'collapse-' + index"
                            @click="
                              itemStatusVerbose.index = !itemStatusVerbose.index
                            "
                            v-else
                            disabled
                            class="p-0 mr-1 mr-md-2"
                          >
                            <b-icon
                              icon="chevron-down"
                              aria-label="Show Details"
                              class="mr-0"
                              name="icon"
                            ></b-icon>
                          </b-button>
                      </b-row>
                      <b-row>
                        <b-col class="p-0">
                          <b-collapse :id="'collapse-' + index">
                            <b-card no-body>
                              <b-list-group>
                                <b-list-group-item
                                  v-for="(
                                    itemStepVerbose, index
                                  ) in itemStatusVerbose.steps"
                                  :key="index"
                                >
                                  <b-row>
                                    <b-col class="pl-0 pl-md-3"
                                      v-if="
                                        itemStepVerbose.stepVerbose != null &&
                                        itemStepVerbose.stepVerbose != ''
                                      "
                                    >
                                      {{ itemStepVerbose.stepVerbose }}
                                    </b-col>
                                    <b-col v-else>{{ emptyString }}</b-col>
                                    <b-col
                                      v-if="
                                        itemStepVerbose.alarmDate != null &&
                                        itemStepVerbose.alarmDate != ''
                                      "
                                    >
                                      {{ itemStepVerbose.alarmDate }}
                                    </b-col>
                                    <b-col v-else>{{ emptyString }}</b-col>
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
      emptyString: "----",
      // '0': false,
      // '1': false,
      // visibleBkgContenedor: false,
    };
  },
};
</script>

<style lang="scss">
.p-1 {
  padding: 0rem !important;
}

.button-accordion {
  background-color: transparent;
  color: #212529; // gray-900
}

// .button-accordion:hover {
//   background-color: transparent;
//   color: #212529; // gray-900
//   border-width: 2px;
// }

.workflow__container {
  margin-bottom: 8rem;
}
</style>