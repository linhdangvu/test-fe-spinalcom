<script>
export default {
  name: "SearchBar",
  //   components: { SearchBar, Divider, EtageList },
  props: {
    title: String,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("getSearch", this.search);
    },
  },
};
</script>

<template>
  <div class="search-bar">
    <button class="btn-filter icon-default" type="submit">
      <i class="fa fa-filter"></i>
    </button>
    <input
      type="text"
      :placeholder="title"
      name="search"
      v-model="search"
      @keydown.enter="handleSearch"
    />
    <button class="btn-search icon-default" type="submit" @click="handleSearch">
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<style>
.search-bar {
  position: relative;
  margin: 10px;
}
.search-bar .btn-filter {
  position: absolute;
  top: 6px;
  left: 8px;
  z-index: 10;
}

.search-bar input {
  position: relative;
  width: calc(100% - 90px);
  height: 40px;
  padding-left: 45px;
  padding-right: 45px;
  border-radius: 30px;
  border: none;
  background-color: var(--gray-100);
  /* color: var(--text-placeholder); */
  font-weight: 700;
}

::placeholder {
  color: var(--text-placeholder);
}

.search-bar .btn-search {
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 8px;
}

.icon-default {
  background-color: var(--yellow-100);
  border-radius: 50%;
  padding: 6px 9px;
  border: none;
  color: white;
}

.icon-default i {
  width: 10px;
  height: 10px;
}
</style>
