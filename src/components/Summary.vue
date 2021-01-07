<template>
  <b-container>
    <h4>Summary Report</h4>
    <b-row class="my-5">
      <div>
        <h5>Total Sales</h5>
        <p>{{summaryData.total_sales}}</p>
        <div v-if="summaryData.sales_isprofit"><b-icon-arrow-up-right-circle variant="success" ></b-icon-arrow-up-right-circle><span class="text-success mx-2">{{summaryData.sales_percentage}}%</span></div>
        <div v-else><b-icon-arrow-up-right-circle variant="danger" ></b-icon-arrow-up-right-circle><span class="text-danger mx-2">{{summaryData.sales_percentage}}%</span></div>
      </div>
    </b-row>
    <b-row class="my-5">
      <div>
        <h5>Paid Order</h5>
        <p>{{summaryData.paid_order}}</p>
        <div v-if="summaryData.order_isprofit"><b-icon-arrow-up-right-circle variant="success" ></b-icon-arrow-up-right-circle><span class="text-success mx-2">{{summaryData.order_percentage}}%</span></div>
        <div v-else><b-icon-arrow-up-right-circle variant="danger" ></b-icon-arrow-up-right-circle><span class="text-danger mx-2">{{summaryData.order_percentage}}%</span></div>
      </div>
    </b-row>
    <b-row class="my-5">
      <div>
        <h5>Cancel Order</h5>
        <p>{{summaryData.cancel_order}}</p>
        <div v-if="summaryData.cancel_isprofit"><b-icon-arrow-up-right-circle variant="success" ></b-icon-arrow-up-right-circle><span class="text-success mx-2">{{summaryData.cancel_percentage}}%</span></div>
        <div v-else><b-icon-arrow-up-right-circle variant="danger" ></b-icon-arrow-up-right-circle><span class="text-danger mx-2">{{summaryData.cancel_percentage}}%</span></div>
      </div>
    </b-row>
    <b-row class="my-5">
      <div>
        <h5>Pending Amount</h5>
        <p>{{summaryData.Pending_amount}}</p>
        <div v-if="summaryData.amount_isprofit"><b-icon-arrow-up-right-circle variant="success" ></b-icon-arrow-up-right-circle><span class="text-success mx-2">{{summaryData.amount_percentage}}%</span></div>
        <div v-else><b-icon-arrow-up-right-circle variant="danger" ></b-icon-arrow-up-right-circle><span class="text-danger mx-2">{{summaryData.amount_percentage}}%</span></div>
      </div>
    </b-row>
    <b-row class="my-5">
      <div>
        <h5>Pending Order</h5>
        <p>{{summaryData.pending_order}}</p>
        <div v-if="summaryData.pending_isprofit"><b-icon-arrow-up-right-circle variant="success" ></b-icon-arrow-up-right-circle><span class="text-success mx-2">{{summaryData.pending_percentage}}%</span></div>
        <div v-else><b-icon-arrow-up-right-circle variant="danger" ></b-icon-arrow-up-right-circle><span class="text-danger mx-2">{{summaryData.pending_percentage}}%</span></div>
      </div>
    </b-row>
        <b-row class="my-5">
      <div>
        <h5>Shipping</h5>
        <p>{{summaryData.shipping}}</p>
        <div v-if="summaryData.shipping_isprofit"><b-icon-arrow-up-right-circle variant="success" ></b-icon-arrow-up-right-circle><span class="text-success mx-2">{{summaryData.shipping_percentage}}%</span></div>
        <div v-else><b-icon-arrow-up-right-circle variant="danger" ></b-icon-arrow-up-right-circle><span class="text-danger mx-2">{{summaryData.shipping_percentage}}%</span></div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Summary",
  props: {
    summaryData:Object
  },mounted(){
      console.log(this.summaryData)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h5{
        color: #cccccc;
    }

</style>
