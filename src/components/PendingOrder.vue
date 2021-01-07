<template>
  <b-container>
    <b-row>
      <div class="pending-label">
        <b-icon-cart class="mx-1"></b-icon-cart>
        <span class="mx-1">Pending</span>
        <span id="pending-order">{{pendingOrder}} Orders</span>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "pendingOrder",
  props: {
    pendingOrder: Number,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navs {
  height: 100%;
  border-right: 1px solid #cccccc;
}

.pending-label span{
    color: #989898;
}

.pending-label svg{
    color: #989898;
}

#pending-order{
    color: #d4d421;
}
</style>
