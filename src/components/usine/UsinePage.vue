<script>
import SearchBar from "../search/SearchBar.vue";
import BatimentList from "./BatimentList.vue";
import UsineCard from "../card/UsineCard.vue";
import DividerLine from "../divider/DividerLine.vue";
import EtagePage from "../etage/EtagePage.vue";
import PiecePage from "../piece/PiecePage.vue";
import axios from "axios";

export default {
  name: "UsinePage",
  components: {
    SearchBar,
    BatimentList,
    UsineCard,
    DividerLine,
    EtagePage,
    PiecePage,
  },

  data() {
    return {
      items: [],
      error: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://api-developers.spinalcom.com/api/v1/geographicContext/space"
        );
        console.log(response.data.children);
        this.items = response.data.children;
      } catch (error) {
        this.error = "Failed to load data";
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div id="usine">
    <div class="header">
      <h1>Analyse de l'occupation</h1>
      <div>
        <span>Image</span>
        <span style="font-weight: bolder">Reviewer</span>
        <span><i class="fa fa-chevron-down"></i></span>
      </div>
    </div>

    <div class="content">
      <div class="batiment">
        <SearchBar title="Référence du bâtiment" />
        <DividerLine />
        <BatimentList :usine-data="items" />
      </div>
      <div class="etage">
        <UsineCard />
        <EtagePage :etage-data="items[0].children" />
      </div>
      <div class="piece"><PiecePage /></div>
    </div>
  </div>
</template>

<style>
#usine {
  margin: 15px;
}

#usine .header {
  display: flex;
  justify-content: space-between;
}

#usine .content {
  margin-top: 10px;
  display: grid;
  gap: 20px;
  height: 70vh;
}

#usine .content .batiment {
  background-color: white;
  grid-column: 1/3;
  grid-row: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
  height: max-content;
}

#usine .content .etage {
  grid-column: 3/5;
  grid-row: 1;
  height: max-content;
}

#usine .content .piece {
  grid-column: 5/12;
  grid-row: 1;
  height: max-content;
}
</style>
../card/UsineCard.vue../divider/DividerLine.vue../etage/EtagePage.vue../piece/PiecePage.vue
