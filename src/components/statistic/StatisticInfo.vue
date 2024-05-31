<script>
export default {
  name: "StatisticInfo",
  data() {
    return {
      info: [
        {
          id: 1,
          status: "Good",
          color: "lightgreen",
          percentage: 33,
          value: 349,
        },
        {
          id: 2,
          status: "Moderate",
          color: "yellow",
          percentage: 33,
          value: 349,
        },
        {
          id: 3,
          status: "Unhealthy",
          color: "orange",
          percentage: 33,
          value: 349,
        },
        {
          id: 4,
          status: "Hazardous",
          color: "red",
          percentage: 33,
          value: 349,
        },
      ],
    };
  },
};
</script>

<template>
  <div id="statistic-info">
    <div class="info">
      <div v-for="(item, id) in info" :key="id" class="info-card">
        <div
          :style="{
            backgroundColor: item.color,
            width: '30px',
            height: '30px',
            borderRadius: '3px',
          }"
        ></div>
        <span class="info-title">{{ item.value }}</span>
        <div class="info-status">
          <span>{{ item.status }}</span>
          <span>{{ item.percentage }}%</span>
        </div>
      </div>
    </div>
    <div class="footer">updated every hour</div>
  </div>
</template>

<style scoped>
#statistic-info {
  background-color: var(--gray-200);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 15px 20px 5px;
  border-radius: 12px;
  margin-top: 10px;
}

#statistic-info .info {
  display: flex;
  justify-content: space-between;
}

#statistic-info .footer {
  text-align: left;
  font-size: 10px;
  margin-top: 10px;
  color: var(--gray-300);
}

.info-card {
  display: flex;
}

.info-title {
  margin: 0 10px;
  font-size: 1.5rem;
}

.info-status {
  display: flex;
  flex-direction: column;
  font-size: 10px;
  text-align: left;
  justify-content: center;
}
</style>
