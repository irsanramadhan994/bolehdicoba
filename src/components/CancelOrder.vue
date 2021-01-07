<template>
  <b-container>
    <b-row>
      <div class="cancel-label">
        <b-icon-arrow-counterclockwise class="mx-1"></b-icon-arrow-counterclockwise>
        <span class="mx-1">Cancel</span>
        <span id="cancel-order">{{cancelOrder}} Orders</span>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CancelOrder",
  props: {
    cancelOrder: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navs {
  height: 100%;
  border-right: 1px solid #cccccc;
}

.cancel-label span{
    color: #989898;
}

.cancel-label svg{
    color: #989898;
}

#cancel-order{
    color: orangered;
}
</style>
