export const chart1 = {
  series: [64, 12, 7, 1],
  chartOptions: {
    chart: {
      width: 300,
      type: "pie",
    },
    labels: ["Good", "Moderate", "Unhealthy", "Hazardous"],
    colors: ["lightgreen", "#FCFC00", "#FCA400", "#FF0000"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
export const chart2 = {
  series: [64, 12, 7],
  chartOptions: {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: [
      "Equiped with Co2 sensor",
      "Maintenance required",
      "No sensor found",
    ],
    colors: ["#C8D1D4", "#A1E5F9", "#2e3e54"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
