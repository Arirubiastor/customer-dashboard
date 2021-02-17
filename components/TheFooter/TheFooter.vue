<template>
  <div>
    <footer>
      <!-- small devices -->
      <b-navbar variant="light" fixed="bottom" class="d-none d-md-block">
        <b-navbar-nav align="center">
          <div>
             <b-navbar-brand class="logo__footer">
            <b-img
              src="~/assets/images/logo-exikhan-negro.png"
              class="logo__footer ml-3 pt-0"
            ></b-img>
          </b-navbar-brand>
          <b-nav-text> Copyright &#169; 2021 | All rights reserved. </b-nav-text>
          </div>
          <b-nav-text class="ml-auto">
            <b-icon
            icon="chat-square"
            variant="primary"
            style="width: 16px; height: 16px"
            class="d-inline"
          ></b-icon>
            <a href="https://www.exikhan.com/get-demo/" target="blank">Contact and support</a> |
            <b-icon
            icon="journals"
            variant="primary"
            style="width: 16px; height: 16px"
            class="d-inline"
          ></b-icon>
            <a href="https://www.exikhan.com/learn/documentation" target="blank">
            Help center</a>
          </b-nav-text>
        </b-navbar-nav>
      </b-navbar>

      <!-------  Hide navbar on screens wider than md  ------->
      <!-- <b-navbar variant="light" class="d-md-none"> -->
        <b-navbar variant="light" class="d-md-none">
        <b-navbar-nav align="center" class="d-flex flex-column">
          <div>
             <b-navbar-brand class="logo__footer">
            <b-img
              src="~/assets/images/logo-exikhan-negro.png"
              class="logo__footer ml-0 mb-4 mt-3 pt-0"
            ></b-img>
          </b-navbar-brand>
          <b-nav-text> Copyright &#169; 2021 | All rights reserved. </b-nav-text>
          </div>
          <b-nav-text class="mb-3">
            <b-icon
            icon="chat-square"
            variant="primary"
            style="width: 16px; height: 16px"
            class="d-inline"
          ></b-icon>
            <a href="https://www.exikhan.com/free-trial" target="blank">Contact and support</a> |
            <b-icon
            icon="journals"
            variant="primary"
            style="width: 16px; height: 16px"
            class="d-inline"
          ></b-icon>
            <a href="https://www.exikhan.com/learn/documentation" target="blank">Help center</a>
          </b-nav-text>
        </b-navbar-nav>
      </b-navbar>


        <!-- <b-navbar-nav>
          <b-nav-text class="text-center">Copyright &#169; 2021</b-nav-text>
          <b-navbar-brand class="pt-0">
            <b-img
              src="~/assets/images/logo-exikhan-negro.png"
              class="logo__footer ml-3 pt-0"
            ></b-img>
          </b-navbar-brand>
        </b-navbar-nav>
      </b-navbar> -->
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.logo__footer {
  height: 19px;
  padding-top: 3px;
}
</style>