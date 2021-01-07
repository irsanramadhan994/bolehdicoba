
<script>
import {Bar} from 'vue-chartjs';

export default {
  name: "BarChartContainer",
  mixins: [Bar],
  props:{
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },watch:{
    chartdata:function(){
        console.log(this.chartdata)
        this.renderChart(this.chartdata)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navs {
  height: 100%;
  border-right: 1px solid #cccccc;
}
</style>
