<template>
  <div class="workflow__container mb-md-5">
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
            <b-button
              block
              v-b-toggle="'accordion-' + index"
              variant="primary"
              class="button-accordion"
            >
              <b-row class="d-flex flex-row">
                <b-col class="text-left col-12 col-md-8">{{
                  itemWorkflow.stageVerbose
                }}</b-col>
                <b-col
                  class="text-left"
                  v-if="
                    itemWorkflow.accomplishedDate != null &&
                    itemWorkflow.accomplishedDate != ''
                  "
                >
                  Actual Date: <b>{{ itemWorkflow.accomplishedDate }}</b>
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
                    <b-list-group-item class="table-fields">
                      <b-row>
                        <b-col class="font-weight-bold pl-1 pl-md-4 pr-md-0"
                          >Status</b-col
                        >
                        <b-col class="font-weight-bold pl-0 pr-md-0 ml-md-5"
                          >Planned Date</b-col
                        >
                        <b-col class="actualDate-extraColumn font-weight-bold pl-0 ml-md-4" style="display: none;"
                          >Actual Date</b-col
                        >
                      </b-row>
                    </b-list-group-item>
                  </b-list-group>

                  <b-list-group>
                    <b-list-group-item class="table__first-level"
                      v-for="(itemStatusVerbose, index) in itemWorkflow.steps"
                      :key="index"
                    >
                      <b-row>
                        <!-- alarmDate = planned date, accomplishedDate = actual date -->
                        <b-col class="table__second-level-width pl-1 pl-md-4 ml-2 ml-md-0">
                          {{ itemStatusVerbose.statusVerbose }}</b-col
                        >
                        <b-col class="table__second-level"
                          v-if="
                            itemStatusVerbose.alarmDate != null &&
                            itemStatusVerbose.alarmDate != ''
                          "
                          >{{ itemStatusVerbose.alarmDate }}
                        </b-col>
                        <b-col class="table__second-level" v-else>{{ emptyString }}</b-col>
                        <b-col class="actualDate-extraColumn" style="display: none;"
                          v-if="
                            itemStatusVerbose.accomplishedDate != null &&
                            itemStatusVerbose.accomplishedDate != ''
                          "
                          >{{ itemStatusVerbose.accomplishedDate }}
                        </b-col>
                        <b-col class="actualDate-extraColumn" style="display: none;" v-else>{{ emptyString }}</b-col>
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
                        <b-col class="p-0 table-collapse mt-2">
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
                                    <b-icon
                                      icon="arrow-90deg-down"
                                      rotate="270"
                                      aria-label="Show Details"
                                      class="mr-2 mr-md-2 ml-1 ml-md-3"
                                      name="icon"
                                    ></b-icon>
                                    <b-col
                                      class="pl-0 pl-md-2"
                                      v-if="
                                        itemStepVerbose.stepVerbose != null &&
                                        itemStepVerbose.stepVerbose != ''
                                      "
                                    >
                                      {{ itemStepVerbose.stepVerbose }}
                                    </b-col>
                                    <b-col v-else>{{ emptyString }}</b-col>
                                    <b-col class="table__third-level"
                                      v-if="
                                        itemStepVerbose.alarmDate != null &&
                                        itemStepVerbose.alarmDate != ''
                                      "
                                    >
                                      {{ itemStepVerbose.alarmDate }}
                                    </b-col>
                                    <b-col class="table__third-level" v-else>{{ emptyString }}</b-col>

                                    <b-col class="actualDate-extraColumn__third-level" style="display: none;"
                                      v-if="
                                        itemStepVerbose.accomplishedDate != null &&
                                        itemStepVerbose.accomplishedDate != ''
                                      "
                                    >
                                      {{ itemStepVerbose.accomplishedDate }}
                                    </b-col>
                                    <b-col class="actualDate-extraColumn__third-level" style="display: none;" v-else>{{ emptyString }}</b-col>
                                  </b-row>
                                </b-list-group-item>
                              </b-list-group>
                            </b-card>
                          </b-collapse>
                        </b-col>
                      </b-row>
                    </b-list-group-item>
                  </b-list-group>
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
      fieldsTest: ["stepVerbose", "alarmDate"],
      visibleStageSteps: false,
      visibleStepVerbose: false,
      emptyString: "----",
    };
  },
};
</script>

<style lang="scss">
$primary: #cc092f ;

.accordion {
  font-size: 14px;
}

.p-1 {
  padding: 0rem !important;
}

.button-accordion {
  background-color: transparent;
  color: #212529; // gray-900
  font-size: 15px;
}

// .button-accordion:hover {
//   background-color: transparent;
//   color: #212529; // gray-900
//   border-width: 2px;
// }

.workflow__container {
  margin-bottom: 2rem;
}

.table-fields {
  // background-color: rgba($primary, .3)
  // background-color: rgb(223, 221, 221);
  background-color: #dee2e6;
}

.table__first-level {
  padding: 0.5rem 13px; 
}

.table__second-level {
  margin-left: 2.8rem;
}

.table__third-level {
  margin-left: 4px;
}

.actualDate-extraColumn {
  margin-left: 1.3rem;
}

.actualDate-extraColumn__third-level {
  margin-left: -1px;
}

.table-collapse {
  margin-bottom: -10px;
}

.table__second-level-width {
    width: 135px;
  }

@media (min-width: 768px) {
  .workflow__container {
    margin-bottom: 6rem !important;
  }
  .actualDate-extraColumn {
    display: block !important;
  }
  .actualDate-extraColumn__third-level {
    display: block !important;
  }
  .accordion {
  font-size: 16px;
}
.button-accordion {
  font-size: 16px;
}
.table__third-level {
  margin-left: -8px;
}
}
</style>