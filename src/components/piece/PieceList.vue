<script>
export default {
  name: "PieceList",
  components: {},
  data() {
    return {
      usineData: [
        {
          title: "RDC",
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
  <div id="piece-list">
    <div v-for="(u, id) in usineData" :key="id" class="piece-card">
      <div class="piece-title">
        <h2>{{ u.title }}</h2>
        <p class="desc">{{ u.description }}</p>
        <p class="ref">345345</p>
      </div>
      <div class="piece-status">
        <p class="is-occupe">Occupe</p>
        <!-- <p class="not-occupe">Non Occupe</p> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
#piece-list {
  height: 53vh;
  background-color: var(--gray-100);
  margin: 10px;
  /* margin-bottom: 20px; */
  padding: 10px 20px;
  overflow-y: scroll;
}

#piece-list .piece-card {
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 10px;
}

#etage-list .etage-title {
  width: 80%;
  text-align: left;
}

#piece-list .piece-title h2 {
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
}

#piece-list .piece-title .desc {
  margin: 0;
  background-color: var(--gray-300);
  color: white;
  width: max-content;
  padding: 2px 6px;
  text-transform: uppercase;
  font-size: 10px;
}

#piece-list .piece-title .ref {
  font-style: italic;
  font-size: 10px;
}

#piece-list .piece-status {
  width: 20%;
  font-style: italic;
  font-size: 12px;
  display: grid;
  align-items: center;
  justify-content: center;
}

.is-occupe,
.not-occupe {
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  width: max-content;
  padding: 2px 4px;
  font-style: normal;
}

.is-occupe {
  background-color: var(--green-100);
}

.not-occupe {
  background-color: var(--red-100);
}
</style>
