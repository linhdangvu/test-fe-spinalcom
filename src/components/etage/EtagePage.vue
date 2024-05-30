<script>
import DividerLine from "../divider/DividerLine.vue";
import SearchBar from "../search/SearchBar.vue";
import EtageList from "./EtageList.vue";

export default {
  name: "EtagePage",
  components: { SearchBar, DividerLine, EtageList },
  props: {
    etageData: {},
  },
};
</script>

<template>
  <div id="etage">
    <SearchBar title="Référence de l'étage" />
    <DividerLine />
    <EtageList :etage-data="etageData" />
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
