<script>
import UsineCard from "../card/UsineCard.vue";
import PieceCard from "../card/PieceCard.vue";
import PieceList from "../piece/PieceList.vue";
import SearchBar from "../search/SearchBar.vue";
import DividerLine from "../divider/DividerLine.vue";

export default {
  name: "PiecePage",
  components: { UsineCard, PieceCard, PieceList, DividerLine, SearchBar },
  props: {
    pieceData: [],
    currentEtage: {},
  },
  data() {
    return { searchData: "" };
  },
  methods: {
    handleSearch(data) {
      this.searchData = data;
    },
  },
  computed: {
    filteredPieceData() {
      if (!this.searchData) {
        return this.pieceData;
      }
      return this.pieceData.filter((item) => {
        return String(item.dynamicId).match(
          new RegExp("^" + this.searchData, "i")
        );
      });
    },
  },
};
</script>

<template>
  <div id="piece">
    <div class="info">
      <UsineCard class="info-1" :current-data="currentEtage" />
      <PieceCard class="info-2" :total-piece="pieceData.length" />
    </div>
    <div class="piece-content">
      <SearchBar title="Référence de la pièce" @getSearch="handleSearch" />
      <DividerLine />
      <PieceList
        v-if="filteredPieceData.length !== 0"
        :piece-data="filteredPieceData"
      />
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  gap: 15px;
}

.info-1 {
  width: 60%;
}

.info-2 {
  width: 40%;
}

.piece-content {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
  margin-top: 15px;
  padding: 5px 0px;
  height: max-content;
}
</style>
