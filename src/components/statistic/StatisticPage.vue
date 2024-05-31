<script>
import MenuPage from "../menu/MenuPage.vue";
import MenuRight from "../menu/MenuRight.vue";
import StatisticInfo from "../statistic/StatisticInfo.vue";
import StatisticTable from "../statistic/StatisticTable.vue";
import ChartPie from "../statistic/ChartPie.vue";

export default {
  name: "StatisticPage",
  components: { MenuPage, MenuRight, StatisticInfo, StatisticTable, ChartPie },
  data() {
    return {
      chart1: {
        series: [64, 12, 7, 1],
        chartOptions: {
          chart: {
            width: 300,
            type: "pie",
          },
          labels: ["Good", "Moderate", "Unhealthy", "Hazardous"],
          colors: ["lightgreen", "#FCFC00", "#FCA400", "#FF0000"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },
      chart2: {
        series: [64, 12, 7],
        chartOptions: {
          chart: {
            width: 380,
            type: "pie",
          },
          labels: [
            "Equiped with Co2 sensor",
            "Maintenance required",
            "No sensor found",
          ],
          colors: ["#C8D1D4", "#A1E5F9", "#2e3e54"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      },
    };
  },
};
</script>

<template>
  <div id="statistic">
    <div class="header">
      <MenuPage />
      <MenuRight />
    </div>
    <div><StatisticInfo /></div>
    <div><StatisticTable /></div>
    <div class="statistic-chart">
      <ChartPie :chart-data="chart1" />
      <ChartPie :chart-data="chart2" />
    </div>
  </div>
</template>

<style>
/* #statistic {
} */

#statistic .header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#statistic .statistic-chart {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>
