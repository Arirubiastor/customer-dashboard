<template>
<b-container class="error-container d-flex flex-column align-items-center justify-content-center">
  <div class="text-center">
    <div>
      <div class="text-center mb-3">
        <b-spinner variant="primary" label="Text Centered"></b-spinner>
      </div>
      <h5 v-show="elementVisible">Loading Page...</h5>
    </div>
    <div v-show="!elementVisible">
      <h1>We couldn't find any information for this request.</h1>
      <a href="mailto:help@exikhan.com.mx" class="email-link">Get in touch: help@exikhan.com.mx</a>
    </div>
  </div>
</b-container>
</template>

<script>
export default {
  props: {
    bookingData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      elementVisible: true,
    }
  },

  created() {
    setTimeout(() => this.elementVisible = false, 5000)
  },

}
</script>

<style lang="scss" scoped>
html {
    margin-top: 0 !important;
}

body {
    background-color: #07889B !important; // blue teal;
}

.error-container {
    height: calc(100vh - 236px);
}
.email-link {
    color: gray;
}

// .email-link:hover {
//     color: $exikhan-color;
// }

// @media (min-width: 720px) { //medium
//     .error-container {
//         height: calc(100vh - 136px);
//     }
// }
</style>