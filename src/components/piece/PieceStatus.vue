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
    // get data from api
    async fetchData() {
      try {
        const response = await axios.get(
          `https://api-developers.spinalcom.com/api/v1/room/${this.dynamicId}/control_endpoint_list`
        );
        // console.log(response.data);

        if (response.data.length === 0) {
          this.status = "undefined";
        } else {
          const index = response.data[0].endpoints.find(
            (item) => item.type === "Occupation"
          );
          this.status = String(index.currentValue);
        }

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
    <p class="is-occupe" v-if="this.status === `true`">Occupe</p>
    <p class="not-occupe" v-else-if="this.status === `false`">Non Occupe</p>
    <p class="undefined" v-else>Undefined</p>
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
.not-occupe,
.undefined {
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

.undefined {
  background-color: var(--gray-300);
}
</style>
