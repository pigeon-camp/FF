import ApexCharts from 'apexcharts';
const makeChart = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          opt: {}
        };
      },
      methods: {
        makeChart(dom, option) {
          const chart = new ApexCharts(dom, option);
          return chart.render();
        }
      }
    })
  }
}

export default makeChart