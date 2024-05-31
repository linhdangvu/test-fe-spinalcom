<script>
export default {
  name: "StatisticTable",
  data() {
    return {
      tableData: [
        { id: 1, room: "aaa", floor: 2, co2: 12321, color: "lightgreen" },
        { id: 2, room: "aaa", floor: 2, co2: 12321, color: "lightgreen" },
        { id: 3, room: "aaa", floor: 2, co2: 12321, color: "lightgreen" },
        { id: 4, room: "aaa", floor: 2, co2: 12321, color: "lightgreen" },
        { id: 5, room: "aaa", floor: 2, co2: 12321, color: "lightgreen" },
        { id: 6, room: "aaa", floor: 2, co2: 12321, color: "lightgreen" },
      ],
      filterData: [
        { id: 1, status: "Good", color: "lightgreen" },
        { id: 2, status: "Moderate", color: "yellow" },
        { id: 3, status: "Unhealthy", color: "orange" },
        { id: 4, status: "Hazardous", color: "red" },
      ],
    };
  },
};
</script>

<template>
  <div id="statistic-table">
    <h1>Selected Floors</h1>
    <div class="statistic-filtre">
      <h2>Filtrer</h2>
      <div class="filtre-item">
        <div v-for="item in filterData" :key="item.id">
          <i class="fa fa-check" :style="{ backgroundColor: item.color }"></i
          ><span>{{ item.status }}</span>
        </div>
      </div>
    </div>
    <div class="room-table">
      <table>
        <thead>
          <th>Room</th>
          <th>Floor</th>
          <th>Co2 level</th>
        </thead>
        <tbody>
          <tr v-for="t in tableData" :key="t.id">
            <td style="text-transform: uppercase; width: 60%">{{ t.room }}</td>
            <td style="width: 15%">{{ t.floor }}</td>
            <td style="display: flex; align-items: center; width: 25%">
              <div
                :style="{
                  width: '7px',
                  height: '20px',
                  backgroundColor: t.color,
                  marginRight: '5px',
                  borderRadius: '3px',
                }"
              ></div>

              {{ t.co2 }}<span style="color: var(--text-placeholder)">ppm</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button class="btn-chevron"><i class="fa fa-chevron-left"></i></button>
        <button class="btn-number"><span>1</span></button>
        <button class="btn-number"><span>1</span></button>
        <button class="btn-number"><span>1</span></button>
        <button class="btn-chevron"><i class="fa fa-chevron-right"></i></button>
      </div>
    </div>
  </div>
</template>

<style>
#statistic-table {
  background-color: var(--gray-200);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 18px 20px 7px;
  border-radius: 12px;
  margin-top: 10px;
}

#statistic-table h1 {
  font-size: 15px;
  text-transform: uppercase;
  text-align: left;
}

.statistic-filtre {
  margin-left: 40px;
}

.statistic-filtre h2 {
  font-size: 10px;
  text-align: left;
  text-transform: uppercase;
}

.statistic-filtre .filtre-item {
  font-size: 10px;
  display: flex;
  gap: 30px;
}

.filtre-item i {
  padding: 2px;
  border-radius: 3px;
  margin-right: 10px;
}

.room-table {
  margin-top: 20px;
}

.room-table table {
  width: 100%;
  text-align: left;
}

.room-table th {
  font-size: 10px;
}

.room-table tr {
  font-size: 12px;
  background-color: white;
}

.room-table td {
  padding: 10px;
}

.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: right;
  gap: 5px;
}

.pagination .btn-chevron,
.pagination .btn-number {
  border: solid 1px var(--gray-250);
  background-color: var(--gray-200);
  color: var(--gray-300);
  border-radius: 5px;
}

.pagination .btn-chevron:hover,
.pagination .btn-number:hover {
  background-color: var(--gray-250);
  cursor: pointer;
}

.pagination .btn-chevron {
  padding: 5px;
}

.pagination .btn-number {
  padding: 2px 12px;
}
</style>
