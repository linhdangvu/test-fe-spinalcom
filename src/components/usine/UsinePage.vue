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
      searchData: "",
      currentUsine: {
        name: "",
        dynamicId: 0,
        type: "",
      },
      currentEtage: {
        name: "",
        dynamicId: 0,
        type: "",
      },
      currentPiece: {
        name: "",
        dynamicId: 0,
        type: "",
      },
      etageList: [],
      pieceList: [],
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
        this.items = response.data.children;
        this.setCurrentUsine(this.items[0]);
        this.etageList = this.getEtageByUsine(this.items[0].dynamicId);
        this.setCurrentEtage(this.etageList[0]);
        if (this.etageList.length !== 0) {
          this.pieceList = this.getPieceByEtage(
            this.etageList,
            this.etageList[0].dynamicId
          );
        }
      } catch (error) {
        this.error = "Failed to load data";
        console.error(error);
      }
    },
    setCurrentUsine(data) {
      this.currentUsine.name = data.name;
      this.currentUsine.dynamicId = data.dynamicId;
      this.currentUsine.type = data.type;
    },
    setCurrentEtage(data) {
      this.currentEtage.name = data.name;
      this.currentEtage.dynamicId = data.dynamicId;
      this.currentEtage.type = data.type;
    },
    setCurrentPiece(data) {
      this.currentPiece.name = data.name;
      this.currentPiece.dynamicId = data.dynamicId;
      this.currentPiece.type = data.type;
    },
    getEtageByUsine(dynamicId) {
      if (this.items.length !== 0) {
        const res = this.items.find((item) => item.dynamicId === dynamicId);
        // console.log(res);
        return res.children;
      }
    },
    getPieceByEtage(etageList, dynamicId) {
      if (etageList.length !== 0) {
        const res = etageList.find((item) => item.dynamicId === dynamicId);
        // console.log(res);
        return res.children;
      }
    },
    handleUpdate(data) {
      this.setCurrentUsine(data);
      this.etageList = this.getEtageByUsine(data.dynamicId);
      if (this.etageList.length !== 0) {
        this.pieceList = this.getPieceByEtage(
          this.etageList,
          this.etageList[0].dynamicId
        );
        // console.log(this.pieceList);
      }
    },

    handleUpdateEtage(data) {
      this.setCurrentEtage(data);
      this.pieceList = this.getPieceByEtage(this.etageList, data.dynamicId);
    },

    handleSearch(data) {
      this.searchData = data;
    },
  },

  computed: {
    filteredUsineData() {
      if (!this.searchData) {
        return this.items;
      }
      return this.items.filter((item) => {
        return String(item.dynamicId).match(
          new RegExp("^" + this.searchData, "i")
        );
      });
    },
  },
};
</script>

<template>
  <div id="usine">
    <div class="header">
      <h1>Analyse de l'occupation</h1>
      <div class="header-right">
        <span><div class="image"></div></span>
        <span style="font-weight: bolder; margin-right: 15px; line-height: 30px"
          >Reviewer</span
        >
        <span style="line-height: 30px"
          ><i class="fa fa-chevron-down"></i
        ></span>
      </div>
    </div>

    <div class="content">
      <div class="batiment">
        <SearchBar title="Référence du bâtiment" @getSearch="handleSearch" />
        <DividerLine />
        <BatimentList
          v-if="filteredUsineData.length !== 0"
          :usine-data="filteredUsineData"
          @updateCurrentUsine="handleUpdate"
        />
      </div>
      <div class="etage">
        <UsineCard v-if="items.length !== 0" :current-data="currentUsine" />
        <EtagePage
          v-if="etageList.length !== 0"
          :etage-data="etageList"
          @updateCurrentEtage="handleUpdateEtage"
        />
      </div>
      <div class="piece">
        <PiecePage
          v-if="pieceList.length !== 0"
          :piece-data="pieceList"
          :current-etage="currentEtage"
        />
      </div>
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
#usine .header .header-right {
  display: flex;
  flex-direction: row;
  font-size: 12px;
}

#usine .header .image {
  background-color: blue;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
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
