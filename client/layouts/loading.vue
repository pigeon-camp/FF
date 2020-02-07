<template>
  <div v-if="loading" class="v-spinner">
    <div class="spinner-background"></div>
    <div class="spinner-zone">
      <div
        :style="[spinnerStyle, spinnerDelay1]"
        class="v-scale v-scale1"
      ></div>
      <div
        :style="[spinnerStyle, spinnerDelay2]"
        class="v-scale v-scale2"
      ></div>
      <div
        :style="[spinnerStyle, spinnerDelay3]"
        class="v-scale v-scale3"
      ></div>
      <div
        :style="[spinnerStyle, spinnerDelay4]"
        class="v-scale v-scale4"
      ></div>
      <div
        :style="[spinnerStyle, spinnerDelay5]"
        class="v-scale v-scale5"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    spinnerStyle: {
      backgroundColor: '#ffffff',
      height: '55px',
      width: '4px',
      margin: '2px',
      borderRadius: '2px',
      display: 'inline-block',
      animationName: 'v-scaleStretchDelay',
      animationDuration: '1s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
      animationFillMode: 'both'
      // TODO
      // animation: ['sk-waveStretchDelay', '1s', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' '),
      // animationFillMode: "both"
    },
    spinnerDelay1: {
      animationDelay: '0.1s'
    },
    spinnerDelay2: {
      animationDelay: '0.2s'
    },
    spinnerDelay3: {
      animationDelay: '0.3s'
    },
    spinnerDelay4: {
      animationDelay: '0.4s'
    },
    spinnerDelay5: {
      animationDelay: '0.5s'
    }
  }),
  methods: {
    start() {
      this.loading = true;
      console.log(this.loading, 'start');
    },
    finish() {
      this.loading = false;
      console.log(this.loading, 'end');
    }
  }
};
</script>

<style>
.v-spinner {
  /*	  font-size: 10px; 
    width: 60px;
    height: 40px;*/
  /*margin: 25px auto;*/
  text-align: center;
  position: fixed;
  z-index: 1000;
}
@-webkit-keyframes v-scaleStretchDelay {
  0%,
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }
}
@keyframes v-scaleStretchDelay {
  0%,
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }
}

.spinner-background {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1001;
}

.spinner-zone {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1002;
  transform: translate(-50%, -50%);
}
</style>
