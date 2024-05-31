<script>
export default {
  name: "ChartPie",
  props: {
    chartData: {},
  },
};
</script>

<template>
  <div id="chart">
    <h1>Global stat</h1>
    <div class="chart-pie">
      <ApexChart
        :width="chartData.chartOptions.chart.width"
        :options="chartData.chartOptions"
        :series="chartData.series"
      ></ApexChart>
    </div>
  </div>
</template>

<style scoped>
#chart {
  background-color: var(--gray-200);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 18px 20px 7px;
  border-radius: 12px;
  margin-top: 10px;
}

#chart h1 {
  font-size: 15px;
  text-transform: uppercase;
  text-align: left;
}

#chart .chart-pie {
  margin: 15px auto;
  display: flex;
  justify-content: center;
}
</style>
