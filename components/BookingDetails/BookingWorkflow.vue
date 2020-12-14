<template>
  <div>
    <b-container class="mt-4">
      <!-- <b-container fluid class="mt-4"> -->
      <h2 class="m-4">Booking Workflow</h2>

      <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="primary">
          <b-row>
            <b-col cols="12" class="text-left">
              statusVerbose 1
            </b-col>
            <b-col class="text-left">
              Accomplished Date:<br>{{ workflow.accomplishedDate }}
            </b-col>
          </b-row>
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="primary">
          <b-row>
            <b-col cols="12" class="text-left">
              statusVerbose 2
            </b-col>
            <b-col class="text-left">
              Accomplished Date: {{ workflow.accomplishedDate }}
            </b-col>
          </b-row>
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <b-table
                hover
                :items="items"
                :fields="fields"
                responsive="sm"
              ></b-table>
              <!-- if statusVerbose has steps, show the plus/details button OR if statusVerbose.steps = Null, don't show details button -->
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="primary">
          <b-row>
            <b-col cols="12" class="text-left">
              statusVerbose 3
            </b-col>
            <b-col class="text-left">
              Accomplished Date: {{ workflow.accomplishedDate }}
            </b-col>
          </b-row>
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="primary">
          <b-row>
            <b-col cols="12" class="text-left">
              statusVerbose 4
            </b-col>
            <b-col class="text-left">
              Accomplished Date: {{ workflow.accomplishedDate }}
            </b-col>
          </b-row>
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ text }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="primary">
          <b-row>
            <b-col cols="12" class="text-left">
              statusVerbose 5
            </b-col>
            <b-col class="text-left">
              Accomplished Date: {{ workflow.accomplishedDate }}
            </b-col>
          </b-row>
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>test</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>

      <!-- <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            variant="primary"
          >
            <b-row class="d-flex align-items-center">
              <b-col>{{ workflow.stageVerbose }}</b-col>
              <b-col>Accomplished Date: {{ workflow.accomplishedDate }}</b-col>
              <b-button v-b-toggle.accordion-1 class="p-0 mr-4">
                <b-icon icon="plus-square" aria-label="Show Details"></b-icon>
              </b-button>
            </b-row>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-table
                hover
                :items="items"
                :fields="fields"
                responsive="sm"
              ></b-table>
              <b-button v-b-toggle.collapse-1-inner size="sm">
                <b-icon icon="plus-square" aria-label="Show Details"></b-icon>
              </b-button>
              <b-collapse id="collapse-1-inner" class="mt-2">
                <b-card>
                  <b-table
                hover
                :items="items"
                :fields="fields"
                responsive="sm"
              ></b-table>
                </b-card>
              </b-collapse>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div> -->
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
      fields: ["status_verbose", "alarm_date"],
      items: [
        { status_verbose: "Shipping advice", alarm_date: "---" },
        { status_verbose: "Shipping advice", alarm_date: "---" },
      ],
      tests: [{ status_verbose: "test", alarm_date: "---" }],
    };
  },
};
</script>

<style>
</style>