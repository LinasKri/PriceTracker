<template>
  <div class="row justify-content-center justify-content-xl-between pb-5">
    <div class="me-xl-3 mt-5 text-light col-11 col-xl-6">
      <h2>Choose a timeframe for changes in prices</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi incidunt
        iste aperiam blanditiis accusamus quas cumque nemo totam autem eum dolor
        qui corporis quae aut, quo, odio neque in tenetur. Repudiandae culpa
        asperiores inventore perferendis earum deserunt eveniet incidunt non
        debitis veritatis dolorem cupiditate, temporibus, dolore esse sit eum
        praesentium quae quam, ducimus eos magni odio! Illo, omnis rerum.
        Labore. Id cumque illum dolor, culpa eius libero maiores nisi aperiam
        iste expedita porro. Illo animi cum, deleniti consectetur iure
        doloremque quo commodi perspiciatis quibusdam, ut tempore quisquam, quam
        laudantium. Mollitia.
      </p>
    </div>
    <div
      class="rounded py-3 mt-5 p-3 ms-xl-3 col-11 col-xl-5"
      :class="chartBackground"
    >
      <div class="timeframe-switcher p-1 border rounded mb-3">
        <button
          @click="setTimeframe(7)"
          class="btn bg-light btn-hover me-1"
          :class="{ 'active-timeframe': timeframe === 7 }"
        >
          7 days
        </button>
        <button
          @click="setTimeframe(30)"
          class="btn bg-light btn-hover me-1"
          :class="{ 'active-timeframe': timeframe === 30 }"
        >
          30 days
        </button>
        <button
          @click="setTimeframe(90)"
          class="btn bg-light btn-hover"
          :class="{ 'active-timeframe': timeframe === 90 }"
        >
          90 days
        </button>
      </div>
      <apexchart
        v-if="series.length"
        type="line"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import gasData from '@/data/historicalData.json';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: {
        data: [],
        style: {
          text: '#fff',
        },
      },
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
          foreColor: '#fff',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: 'Gas prices during selected periods',
          align: 'left',
          style: {
            color: '#fff',
          },
        },
        xaxis: {
          type: 'datetime',
        },
        colors: ['#00FF00', '#0096FF', '#FF0000'],
      },
    };
  },
  methods: {
    setTimeframe(days) {
      this.timeframe = days;
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);

      const filteredData = gasData.filter((item) => {
        const date = new Date(item.time);
        return date >= cutoff;
      });

      this.series = [
        {
          name: 'Low',
          data: filteredData.map((item) => {
            const date = new Date(item.time).getTime();
            const data = [date, item.lowPrice];
            return data;
          }),
        },
        {
          name: 'Average',
          data: filteredData.map((item) => {
            const date = new Date(item.time).getTime();
            const data = [date, item.averagePrice];
            return data;
          }),
        },
        {
          name: 'High',
          data: filteredData.map((item) => {
            const date = new Date(item.time).getTime();
            const data = [date, item.highPrice];
            return data;
          }),
        },
      ];
    },
  },
  computed: {
    chartBackground() {
      return {
        'ethereum-chart-bg-color': this.$route.path === '/ethereum',
        'binance-chart-bg-color': this.$route.path === '/binance',
        'chain-chart-bg-color': this.$route.path === '/chain',
        'polygon-chart-bg-color': this.$route.path === '/polygon',
      };
    },
  },
  mounted() {
    this.setTimeframe(7);
  },
};
</script>
<style lang="scss" scoped>
button {
  background-color: coral !important;
}
.timeframe-switcher {
  background-color: #343a40;
  width: fit-content;
}
.active-timeframe {
  background-color: #00ff00 !important;
}
</style>
