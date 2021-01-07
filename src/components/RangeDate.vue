<template>
  <div id="range-container">
    <b-row class="mb-3">
        <b-col>
                  <b-icon-calendar-date class="mx-2"></b-icon-calendar-date>
      <span>From</span>
      <b-form-select v-model="start_date" @change="$emit('updateStart',start_date);">
        <option v-for="dates in range_date" :key="dates" v-bind:value="dates">
          {{ dates }}
        </option>
      </b-form-select>
      to<b-form-select v-model="end_date" size="sm" class="mt-3" @change="$emit('updateEnd',end_date);">
        <option v-for="dates in range_date" :key="dates" v-bind:value="dates">
          {{ dates }}
        </option>
      </b-form-select>

        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "RangeDate",
  data: () => ({
    start_date: "01 Oct 2019",
    end_date: "02 Oct 2019"
  }),
  methods: {

  },
  watch: {},
  props: {
    range_date: Array,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#range-container {
  font-size: 10pt;
  border: 1px solid #cccccc;
  border-radius: 5px;
}

select {
  border: 0;
  width: 100px;
}

svg{
    color: rgb(133, 187, 182);
}


</style>
