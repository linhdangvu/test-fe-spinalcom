<script>
import axios from "axios";

export default {
  name: "PieceStatus",
  props: {
    dynamicId: Number,
  },
  data() {
    return {
      status: [],
      loading: true,
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
          `https://api-developers.spinalcom.com/api/v1/room/${this.dynamicId}/control_endpoint_list`
        );
        console.log(response.data);
        this.status = response.data;
        this.loading = false;
      } catch (error) {
        this.error = "Failed to load data";
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div v-if="!loading" class="piece-status">
    <p class="is-occupe" v-if="status.length !== 0">Occupe</p>
    <p class="not-occupe" v-else>Non Occupe</p>
  </div>
</template>

<style scoped>
.piece-status {
  width: 20%;
  font-style: italic;
  font-size: 8px;
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
