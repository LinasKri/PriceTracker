<template>
  <div class="pt-5 binance-bg">
    <div class="binance-top-gradient-color">
      <h1 class="pt-4 ms-4 text-light">Binance Smart Network</h1>
      <div class="container">
        <GasTracker />
        <HistoricalDataChart />
      </div>
    </div>
  </div>
</template>

<script>
import GasTracker from '../components/GasTracker.vue';
import HistoricalDataChart from '../components/HistoricalDataChart.vue';

export default {
  components: {
    GasTracker,
    HistoricalDataChart,
  },
};
</script>
