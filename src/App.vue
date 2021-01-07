<template>
  <b-container class="bv-example-row " fluid style="height:100%;padding:0">
    <b-navbar toggleable type="dark" variant="primary" class="d-lg-none px-3">
      <router-link to="/">
        <b-navbar-brand>Dashboard</b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-row style="height:100%">
      <b-col lg="1" class="d-none d-lg-block">
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
