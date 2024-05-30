<script>
import DividerLine from "../divider/DividerLine.vue";
import SearchBar from "../search/SearchBar.vue";
import EtageList from "./EtageList.vue";

export default {
  name: "EtagePage",
  components: { SearchBar, DividerLine, EtageList },
  props: {
    etageData: [],
  },
  data() {
    return {
      searchData: "",
      loading: false,
    };
  },
  methods: {
    handleUpdate(e) {
      this.$emit("updateCurrentEtage", e);
    },
    handleSearch(data) {
      this.searchData = data;
    },
  },

  computed: {
    filteredEtageData() {
      if (!this.searchData) {
        return this.etageData;
      }
      const newData = this.etageData.filter((item) => {
        return String(item.dynamicId).match(
          new RegExp("^" + this.searchData, "i")
        );
      });
      return newData;
    },
  },
};
</script>

<template>
  <div id="etage">
    <SearchBar title="Référence de l'étage" @getSearch="handleSearch" />
    <DividerLine />
    <!-- {{ filteredEtageData }} -->
    <EtageList
      v-if="filteredEtageData.length !== 0"
      :etage-data="filteredEtageData"
      @updateCurrentEtage="handleUpdate"
    />
  </div>
</template>

<style scoped>
#etage {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;
  margin-top: 15px;
  padding: 5px 0px;
  height: max-content;
}
</style>
