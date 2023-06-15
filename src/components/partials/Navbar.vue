<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div class="container px-5">
      <router-link
        to="/"
        class="logo fw-bold fs-4 text-light text-decoration-none border px-2"
        >Gas Price Tracker</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarResponsive"
      >
        <ul class="navbar-nav">
          <li
            v-for="(route, index) in routes"
            v-bind:key="index"
            class="nav-item"
          >
            <router-link :to="route.path" class="nav-link">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          path: 'ethereum',
          name: 'Ethereum',
        },
        {
          path: 'binance',
          name: 'Binance',
        },
        {
          path: 'chain',
          name: 'Chain',
        },
        {
          path: 'polygon',
          name: 'Polygon',
        },
      ],
    };
  },
};
</script>

<style>
.logo {
  color: coral !important;
  border-color: coral !important;
}

a:hover,
a:active,
a.active {
  color: coral !important;
}
</style>
