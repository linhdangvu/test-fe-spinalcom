<script>
import PieceStatus from "./PieceStatus.vue";

export default {
  name: "PieceList",
  components: { PieceStatus },
  props: {
    pieceData: [],
  },
};
</script>

<template>
  <div id="piece-list" v-if="pieceData.length !== 0">
    <div v-for="(u, id) in pieceData" :key="id" class="piece-card">
      <div class="piece-title">
        <h2>{{ u.name }}</h2>
        <p class="desc">{{ u.type }}</p>
        <p class="ref">{{ u.dynamicId }}</p>
      </div>
      <PieceStatus :dynamic-id="u.dynamicId" />
    </div>
  </div>
</template>

<style scoped>
#piece-list {
  height: 50vh;
  background-color: var(--gray-100);
  margin: 10px;
  /* margin-bottom: 20px; */
  padding: 10px;
  overflow-y: scroll;
}

#piece-list .piece-card {
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
}

.piece-title {
  width: 80%;
  text-align: left;
}

.piece-title h2 {
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.piece-title .desc {
  margin: 0;
  background-color: var(--gray-300);
  color: white;
  width: max-content;
  padding: 2px 6px;
  text-transform: uppercase;
  font-size: 10px;
}

.piece-title .ref {
  font-style: italic;
  font-size: 10px;
}
</style>
