<template>
  <div class="card">
    <div class="pb-0 card-header mb-0">
      <h6>{{ title }}</h6>
      <!-- <p class="text-sm">
        <i class="fa fa-arrow-up text-success"></i>
        <span class="font-weight-bold">{{detail1}}</span>
        {{detail2}}
      </p> -->
    </div>
    <div class="p-3 card-body">
      <div class="chart">
        <canvas id="chart-line" class="chart-canvas" height="300"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "gradient-line-chart",

  props: {
    title: {
      type: String,
      default: "Statistics",
    },
    // detail1: {
    //   type: String,
    //   default: "4% more",
    // },
    // detail2: {
    //   type: String,
    //   default: "in 2021",
    // },
  },

  mounted() {
    var ctx1 = document.getElementById("chart-line").getContext("2d");

    var gradientStroke1 = ctx1.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, "rgba(94, 114, 228, 0.2)");
    gradientStroke1.addColorStop(0.2, "rgba(94, 114, 228, 0.0)");
    gradientStroke1.addColorStop(0, "rgba(94, 114, 228, 0)");
    new Chart(ctx1, {
      type: "line",
      data: {
        labels: ["Jan", "Feb","Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov","Dec"],
        datasets: [
          {
            label: "$",
            tension: 0.0,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#4BB543 ",
            backgroundColor: gradientStroke1,
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            fill: true,
            data: this.totalBalanceByMonth,
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#fbfbfb",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: "#ccc",
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
  },

  computed: {
    schedules() {
      return this.$store.state.plan.schedules
    },
    totalBalanceByMonth() {
      return this.scheduleBalanceByMonth(this.$store.state.plan.schedules)
    }
  },
  methods: {
    scheduleBalanceByMonth(list) {
      let listByMonth = this.groupByMonth(list)
      let months = [0,1,2,3,4,5,6,7,8,9,10,11]
      return months.map( m => {
        let list = listByMonth.find(lm => Number(lm.month) === m)
        if(list) {
          return list.schedules[list.schedules.length-1].balanceValue
        } else {
          return 0
        }
      })
    },
    groupByMonth(list) {
      let groups = list.reduce((g, sc) => {
      const _month = sc.date.getMonth()
        if(!g[_month]) {
          g[_month] = []
        }
        g[_month].push(sc)
        return g
      }, {})

      return Object.keys(groups).map((month) => {
        return {
          month,
          schedules: groups[month]
        }
      })
    }
  }
};
</script>
