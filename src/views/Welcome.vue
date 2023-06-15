<template>
  <div>
    <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container px-5">
          <h1 class="masthead-heading mb-0">Best Gas Price Tracking App</h1>
          <h2 class="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
          <router-link
            to="/ethereum"
            class="btn btn-primary btn-xl rounded-pill mt-5 px-3"
            >Jump right in</router-link
          >
        </div>
      </div>
      <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div>
    </header>
    <section id="scroll">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center align-items-center">
          <div class="col-lg-8 order-lg-1">
            <div class="p-5">
              <h2 class="display-4 text-center mb-4">
                For those who seek best prices!
              </h2>
              <p class="text-">
                We offer the best platform to reach all the top networks for gas
                price tracking. We hope that you'll have the best experience on
                our platform.
              </p>
              <p class="text-">
                You can use our links below to check your wanted networks or
                press "JUMP RIGHT IN" in the top to go straight to Ethereum
                Network. You can also use navigation meniu at the top of your
                screen.
              </p>
              <div class="d-flex justify-content-center">
                <router-link
                  to="/ethereum"
                  class="fs-5 text-warning text-decoration-none me-2"
                  >Ethereum</router-link
                >
                <router-link
                  to="/binance-smart"
                  class="fs-5 text-warning text-decoration-none me-2"
                  >Binance&nbsp;Smart</router-link
                >
                <router-link
                  to="/chain"
                  class="fs-5 text-warning text-decoration-none me-2"
                  >Chain</router-link
                >
                <router-link
                  to="/polygon"
                  class="fs-5 text-warning text-decoration-none"
                  >Polygon</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
