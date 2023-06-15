<template>
  <div class="py-5 row justify-content-center justify-content-lg-between">
    <div
      class="rounded gas-price-tracker-bg-color mx-3 col-11 col-xl-8 order-1 order-xl-0"
    >
      <p class="m-3">
        {{ countdownText }}
      </p>
      <div class="pb-3">
        <div class="row justify-content-center">
          <div
            v-for="(metric, index) in metrics"
            v-bind:key="index"
            class="border border-2 rounded p-3 d-flex flex-column align-items-center m-3 col-10 col-md-2 gas-price-holder"
          >
            <h5>{{ metric.name }}</h5>
            <h4 :class="metric.color">{{ metric.gwei }} gwei</h4>
            <p class="text-muted">
              Base: {{ metric.base }} | Priority: {{ metric.priority }}
            </p>
            <p class="text-muted">
              ${{ metric.price }} | ~ {{ metric.time[0] }}
              <span>mins:</span>
              {{ metric.time[1] }} secs
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-11 col-lg-10 col-xl-3 order-0 order-xl-1 mb-4 mb-xl-0">
      <h2 class="text-light">Find your prices here</h2>
      <p class="text-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        tenetur quod repudiandae, nam ab reprehenderit earum perspiciatis odio
        voluptatem sed. Facilis odit quibusdam corporis voluptate tenetur aut
        voluptatum repellendus consequatur!
      </p>
    </div>
  </div>
</template>

<script>
import gasPrices from '@/data/gasPrices.json';

export default {
  data() {
    return {
      metrics: gasPrices,
      countdown: 10,
      interval: null,
    };
  },
  computed: {
    countdownText() {
      if (this.countdown === 0) {
        return 'Ups! maybe in the future 😄';
      } else {
        return `Next update in ${this.countdown}s`;
      }
    },
  },
  methods: {
    startCountdown() {
      this.interval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          this.countdown = 10;
        }
      }, 1000);
    },
  },
  mounted() {
    this.startCountdown();
  },
};
</script>
