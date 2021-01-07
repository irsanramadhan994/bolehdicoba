

<script>
import {Line} from 'vue-chartjs';

export default {
  name: "LineChartContainer",
  mixins: [Line],
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
  },mounted(){
    console.log(this.chartdata)
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
