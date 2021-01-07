<template>
  <b-container class="bv-example-row" fluid style="height:100%;">
    <b-row style="height:100%">
      <b-col lg="1">
        <b-row id="navs" align-v="center" class="position-fixed">
          <b-nav vertical class="w-25">
            <b-nav-item active>
              <router-link to="/">
                <b-button variant="outline-primary">
                  <b-icon-app></b-icon-app>
                </b-button>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/about">
                <b-button variant="outline-primary">
                  <b-icon-globe></b-icon-globe>
                </b-button>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <b-button variant="outline-primary"
                ><b-icon-easel></b-icon-easel
              ></b-button>
            </b-nav-item>
          </b-nav>
        </b-row>
      </b-col>
      <b-col>
        <router-view></router-view>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400;1,900&display=swap");
#app {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
}
#navs {
  height: 100%;
  border-right: 1px solid #cccccc;
}
html,
body {
  height: 100%;
}
</style>
