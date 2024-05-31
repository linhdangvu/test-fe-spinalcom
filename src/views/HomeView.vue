<template>
  <div class="home">
    <div class="interface">
      <div @click="$router.push('/usine')" class="btn-interface">
        Interface Usine
      </div>
      <div @click="$router.push('/statistic')" class="btn-interface">
        Interface Statistic
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home {
  display: grid;
  align-items: center;
  height: 80vh;
}

.home .interface {
  display: flex;
  justify-content: center;
}

.btn-interface {
  background-color: white;
  border: solid 1px black;
  width: max-content;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
  font-size: 4rem;
}

.btn-interface:hover {
  background-color: var(--text-color);
  color: white;
}
</style>
