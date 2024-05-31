<script>
import MenuPage from "../menu/MenuPage.vue";
import MenuRight from "../menu/MenuRight.vue";
import StatisticInfo from "../statistic/StatisticInfo.vue";
import StatisticTable from "../statistic/StatisticTable.vue";
import ChartPie from "../statistic/ChartPie.vue";
import { chart1, chart2 } from "@/data/chart_data.js";

export default {
  name: "StatisticPage",
  components: { MenuPage, MenuRight, StatisticInfo, StatisticTable, ChartPie },
  data() {
    return {
      chart1: chart1,
      chart2: chart2,
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
