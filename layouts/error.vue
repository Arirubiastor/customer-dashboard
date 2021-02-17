<template>
  <container class="error-container d-flex flex-column align-items-center justify-content-center">
    <div class="text-center p-3">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>We couldn't find any information for this request.</h1>
      <a href="mailto:help@exikhan.com.mx" class="email-link">Get in touch: help@exikhan.com.mx</a>
      <!-- <NuxtLink to="/">Home page</NuxtLink> -->
    </div>
  </container>
</template>

<script>
export default {
  props: ["error"],
  layout: "blog", // you can set a custom layout for the error page
};
</script>

<style lang="scss" scoped>
$exikhan-color: #ff3700;

html {
    margin-top: 0 !important;
}
.error-container {
    height: calc(100vh - 236px);
}
.email-link {
    color: gray;
}

.email-link:hover {
    color: $exikhan-color;
}

// @media (min-width: 720px) { //medium
//     .error-container {
//         height: calc(100vh - 136px);
//     }
// }
</style>