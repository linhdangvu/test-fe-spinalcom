<script>
import axios from "axios";
import VueCircle from "vue2-circle-progress";

export default {
  name: "EtageArea",
  components: { VueCircle },
  props: {
    dynamicId: Number,
  },
  data() {
    return {
      area: 0,
      loading: true,
      error: null,
      fill: { gradient: ["#e58e00"] },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          `https://api-developers.spinalcom.com/api/v1/floor/${this.dynamicId}/floor_details`
        );
        // Je prends area pour percentage
        this.area = Number(String(response.data.area).slice(0, 2));
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
  <div>
    <VueCircle
      v-if="!loading"
      :progress="area"
      :size="50"
      :reverse="false"
      line-cap="round"
      :fill="fill"
      empty-fill="rgba(0, 0, 0, .1)"
      :animation-start-value="0.0"
      :start-angle="0"
      insert-mode="append"
      :thickness="5"
      :show-percent="true"
    >
    </VueCircle>
  </div>
</template>
