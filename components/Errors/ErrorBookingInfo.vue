<template>
<b-container class="error-container d-flex flex-column align-items-center justify-content-center">
  <div class="text-center">
    <h1>We couldn't find any information for this request.</h1>
    <a href="mailto:help@exikhan.com.mx" class="email-link">Get in touch: help@exikhan.com.mx</a>
  </div>
</b-container>
</template>

<script>
export default {

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