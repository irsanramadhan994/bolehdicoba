<template>
  <b-container v-if="paidOrder">
    <b-row>
      <div class="sales-label">
        <b-icon-cash-stack class="mx-1"></b-icon-cash-stack>
        <span class="mx-1">Sales</span>
        <span id="paid-order">{{paidOrder}} Paid Order</span>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SalesOrder",
  props: {
    paidOrder:Number,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navs {
  height: 100%;
  border-right: 1px solid #cccccc;
}

.sales-label span{
    color: #989898;
}

.sales-label svg{
    color: #989898;
}

span{
    box-sizing: border-box;
}

#paid-order{
    color: green;
}
</style>
