<script>
import UsineCard from "../card/UsineCard.vue";
import PieceCard from "../card/PieceCard.vue";
import PieceList from "../piece/PieceList.vue";
import SearchBar from "../search/SearchBar.vue";
import DividerLine from "../divider/DividerLine.vue";

export default {
  name: "PiecePage",
  components: { UsineCard, PieceCard, PieceList, DividerLine, SearchBar },
  data() {
    return {
      usineData: [
        {
          title: "Usine",
          image: "",
          reference: "1234",
          description: "GEO",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="piece">
    <div class="info">
      <UsineCard class="info-1" /><PieceCard class="info-2" />
    </div>
    <div class="piece-content">
      <SearchBar title="Référence de la pièce" />
      <DividerLine />
      <PieceList />
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
