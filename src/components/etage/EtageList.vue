<script>
import EtageArea from "./EtageArea.vue";

export default {
  name: "EtageList",
  components: { EtageArea },
  props: {
    etageData: [],
  },
};
</script>

<template>
  <div v-if="etageData.length !== 0" id="etage-list">
    <div
      v-for="(e, id) in etageData"
      :key="id"
      class="etage-card"
      @click="() => $emit('updateCurrentEtage', e)"
    >
      <div class="etage-title">
        <h2>{{ e.name }}</h2>
        <p>{{ e.type }}</p>
      </div>

      <div class="etage-progress">
        <EtageArea :dynamic-id="e.dynamicId" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#etage-list {
  height: 50vh;
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
  cursor: pointer;
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
