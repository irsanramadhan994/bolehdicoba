<template>

  <div>


    <b-container fluid >
          <b-row class="my-3">
      <b-col lg="6" ><strong>Dashboard</strong></b-col>
      <b-col lg-offset="1" lg="3" class="my-sm-2" 
        ><range-date
          :range_date="range_date"
          @updateStart="start = $event"
          @updateEnd="end = $event"
        ></range-date
      ></b-col>
      <b-col align-h="end" lg="3" class="my-2 my-lg-0 my-sm-2 my-md-0">
        <div id="avatar-container">
          <b-avatar
            src="https://placekitten.com/300/300"
            class="mx-1"
          ></b-avatar>
          <b-dropdown
            id="dropdown-1"
            text="Hi, Erika Badu"
            class="m-md-2"
            size="sm"
            variant="bg-transparent"
          >
            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item>Settings</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Log Out</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col lg="9">
        <b-row class="mb-3">
          <b-col>
            <b-card>
              <b-card-text>
                <sales-order :paidOrder="order_paid"></sales-order>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col>
            <b-card>
              <b-card-text>
                <cancel-order :cancelOrder="order_cancel"></cancel-order>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col class="my-2 my-lg-0 my-sm-0 my-md-0">
            <b-card>
              <b-card-text>
                <pending-order :pendingOrder="order_pending"></pending-order>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12" class="my-sm-2">
            <b-card>
              <b-card-text>
                <line-chart-container
                class="my-2 my-lg-0 my-sm-0 my-md-0"
                  :chartdata="char_data"
                  :options="char_options"
                ></line-chart-container>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="my-2">
        <b-card>
          <b-card-text>
            <summary-container :summaryData="summary_data"></summary-container>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="9" class="my-sm-2">
        <bar-chart-container
          :chartdata="bar_data"
          :options="char_options"
        ></bar-chart-container>
      </b-col>
      <b-col>
        <pie-chart-container
          :chartdata="pie_data"
          :options="char_options"
          style="width:250px;height:250px;"
        ></pie-chart-container>
      </b-col>
    </b-row>

    </b-container>
  </div>
</template>

<script>
import CancelOrderVue from "./CancelOrder.vue";
import LineChartContainerVue from "./LineChartContainer.vue";
import PendingOrderVue from "./PendingOrder.vue";
import SalesOrder from "./SalesOrder.vue";
import * as salesData from "../json/sales-overview.json";
import * as yearEnd from "../json/year-end.json";
import * as yearEndSingle from "../json/year-end(single-client).json";
import RangeDateVue from "./RangeDate.vue";
import moment from "moment";
import BarChartContainerVue from "./BarChartContainer.vue";
import PieChartContainerVue from "./PieChartContainer.vue";
import SummaryVue from "./Summary.vue";

export default {
  components: {
    "sales-order": SalesOrder,
    "cancel-order": CancelOrderVue,
    "pending-order": PendingOrderVue,
    "line-chart-container": LineChartContainerVue,
    "range-date": RangeDateVue,
    "bar-chart-container": BarChartContainerVue,
    "pie-chart-container": PieChartContainerVue,
    "summary-container": SummaryVue
  },
  name: "Dashboard",
  data: () => ({
    order_paid: 0,
    order_pending: 0,
    order_cancel: 0,
    char_data: {},
    pie_data: {
      labels: ["Awareness", "Traffic", "Conversion"],
      datasets: [
        {
          data: ["50", "30", "20"],
          backgroundColor: ["red", "green", "blue"]
        }
      ]
    },
    bar_data: {},
    summary_data: {
      total_sales: "Rp.29.100.134",
      sales_percentage: 30,
      sales_isprofit: true,
      paid_order: 118,
      order_percentage: -5,
      order_isprofit: false,
      cancel_order: 39,
      cancel_percentage: 10,
      cancel_isprofit: false,
      Pending_amount: "Rp.9.755.000",
      amount_percentage: 9.5,
      amount_isprofit: true,
      pending_order: 34,
      pending_percentage: 50,
      pending_isprofit: true,
      shipping: "Rp.9.755.000",
      shipping_percentage: 9.5,
      shipping_isprofit: true
    },
    range_date: [],
    yearEnd: [],
    yearEndSingle: [],
    start: "",
    end: "",
    char_options: { responsive: true, maintainAspectRatio: false }
  }),
  props: {
    msg: String
  },
  methods: {
    dynamicColors: function() {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    renderLine: function() {
      //Render Line Chart
      let charData = {
        labels: [],
        datasets: []
      };
      this.yearEnd.forEach((element, index) => {
        var filteredDate = element.sales.filter(item => {
          return (
            moment(String(item.sales_date)).format("YYYY/MM/DD") >=
              moment(String(this.start)).format("YYYY/MM/DD") &&
            moment(String(item.sales_date)).format("YYYY/MM/DD") <=
              moment(String(this.end)).format("YYYY/MM/DD")
          );
        });
        charData.datasets.push({
          label: element.user,
          data: [],
          borderColor: this.dynamicColors(),
          backgroundColor: this.dynamicColors()
        });
        let ranged = [];
        filteredDate.forEach(fdate => {
          ranged.push(fdate.sales_date);
          charData.datasets[index].data.push(fdate.sales_order);
          charData.labels = ranged;
        });
        this.char_data = charData;
      });
    },
    renderBar: function() {
      //Render Bar Chart
      let barData = {
        labels: [],
        datasets: []
      };
      this.yearEndSingle.forEach((element, index) => {
        var filteredDate = element.sales.filter(item => {
          return (
            moment(String(item.sales_date)).format("YYYY/MM/DD") >=
              moment(String(this.start)).format("YYYY/MM/DD") &&
            moment(String(item.sales_date)).format("YYYY/MM/DD") <=
              moment(String(this.end)).format("YYYY/MM/DD")
          );
        });
        barData.datasets.push({
          label: element.user,
          data: [],
          borderColor: this.dynamicColors(),
          backgroundColor: this.dynamicColors()
        });
        let rangedSingle = [];
        filteredDate.forEach(fdate => {
          rangedSingle.push(fdate.sales_date);
          barData.datasets[index].data.push(fdate.sales_order);
          barData.labels = rangedSingle;
        });
        this.bar_data = barData;
      });
    }
  },
  watch: {
    start: function() {
      if (
        this.end !== "" &&
        moment(String(this.start)).format("YYYY/MM/DD") <
          moment(String(this.end)).format("YYYY/MM/DD")
      ) {
        this.renderLine();
        this.renderBar();
      }
    },
    end: function() {
      if (
        this.start !== "" &&
        moment(String(this.start)).format("YYYY/MM/DD") <
          moment(String(this.end)).format("YYYY/MM/DD")
      ) {
        this.renderLine();
        this.renderBar();
      }
    }
  },

  mounted() {
    this.order_paid = salesData.default.data.order_paid;
    this.order_pending = salesData.default.data.order_pending;
    this.order_cancel = salesData.default.data.order_cancel;
    this.range_date = yearEnd.default.data.range_date;
    yearEnd.default.data.metric.clicks.forEach((element, index) => {
      this.yearEnd.push({ user: element.account_name, sales: [] });
      element.data.forEach(items => {
        this.yearEnd[index].sales.push({
          sales_date: items[0],
          sales_order: items[1]
        });
      });
    });
    yearEndSingle.default.data.data.forEach((element, index) => {
      this.yearEndSingle.push({ user: element.account_name, sales: [] });
      element.data.forEach(items => {
        this.yearEndSingle[index].sales.push({
          sales_date: items[0],
          sales_order: items[1]
        });
      });
    });
    this.start = "01 Oct 2019";
    this.end = "02 Oct 2019";
    console.log(this.yearEndSingle);
    console.log(this.yearEnd);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navs {
  border-right: 1px solid #cccccc;
}

#avatar-container {
  border: 1px solid #cccc;
  border-radius: 5px;
}

#avatar-container span {
  border: 2px solid blueviolet;
}

#avatar-container * {
  font-size: 9pt;
}

#dropdown-1 {
  background: transparent !important;
  border: 0 !important;
  color: black !important;
}
</style>
