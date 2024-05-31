<script>
export default {
  name: "BatimentList",
  props: {
    usineData: {},
  },
};
</script>

<template>
  <div id="batiment-list">
    <div
      v-for="(u, id) in usineData"
      :key="id"
      class="batiment-card"
      @click="() => $emit('updateCurrentUsine', u)"
    >
      <div class="batiment-image">
        <div class="image">{{ u.image }}</div>
      </div>
      <div class="batiment-title">
        <h2>{{ u.name }}</h2>
        <p>{{ u.type }}</p>
      </div>
      <div class="batiment-ref">
        <p>{{ u.dynamicId }}</p>
      </div>
    </div>
  </div>
</template>

<style>
#batiment-list {
  height: 73vh;
  background-color: var(--gray-100);
  margin: 10px;
  padding: 10px;
  overflow-y: scroll;
}

#batiment-list .batiment-card {
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  border-radius: 5px;
  padding: 3px 6px;
  cursor: pointer;
}

#batiment-list .batiment-image {
  width: 25%;
}

#batiment-list .batiment-image .image {
  width: 80%;
  height: 50px;
  background-color: blue;
  margin: 5px 10px;
}

#batiment-list .batiment-title {
  width: 50%;
  text-align: left;
}

#batiment-list .batiment-title p {
  margin: 0;
  background-color: var(--gray-300);
  color: white;
  width: max-content;
  padding: 2px 6px;
  text-transform: uppercase;
  font-size: 8px;
  font-weight: 800;
}

#batiment-list .batiment-title h2 {
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 0;
}

#batiment-list .batiment-ref {
  width: 25%;
  font-style: italic;
  font-size: 8px;
  display: grid;
  align-items: center;
}
</style>
