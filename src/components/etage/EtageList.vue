<script>
import VueCircle from "vue2-circle-progress";

export default {
  name: "EtageList",
  components: { VueCircle },
  props: {
    etageData: {},
  },
  data() {
    return {
      fill: { gradient: ["#e58e00"] },
    };
  },
  mounted(props) {
    console.log("go", props.etageData);
  },
};
</script>

<template>
  <div id="etage-list">
    <div v-for="(e, id) in etageData" :key="id" class="etage-card">
      <div class="etage-title">
        <h2>{{ e.name }}</h2>
        <p>{{ e.type }}</p>
      </div>
      <div class="etage-progress">
        <VueCircle
          :progress="50"
          :size="50"
          :reverse="false"
          line-cap="round"
          :fill="fill"
          empty-fill="rgba(0, 0, 0, .1)"
          :animation-start-value="0.0"
          :start-angle="0"
          insert-mode="append"
          :thickness="5"
          :show-percent="true"
        >
        </VueCircle>
      </div>
    </div>
  </div>
</template>

<style scoped>
#etage-list {
  height: 53vh;
  background-color: var(--gray-100);
  margin: 10px;
  /* margin-bottom: 20px; */
  padding: 10px;
  overflow-y: scroll;
}

#etage-list .etage-card {
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

#etage-list .etage-title {
  width: 80%;
  text-align: left;
}

#etage-list .etage-title p {
  margin: 0;
  background-color: var(--gray-300);
  color: white;
  width: max-content;
  padding: 2px 6px;
  text-transform: uppercase;
  font-size: 10px;
}

#etage-list .etage-title h2 {
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
}

#etage-list .etage-progress {
  width: 20%;
  font-style: italic;
  font-size: 12px;
  display: grid;
  align-items: center;
}
</style>
