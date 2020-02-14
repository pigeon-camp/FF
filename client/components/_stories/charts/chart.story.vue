<template>
  <div>
    <h1>hi</h1>
    <div id="C" />
  </div>
</template>

<script>
export default {
  mounted() {
    const opt = {
      chart: { type: 'line' },
      series: [{ name: 'sales', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };
    this.makeChart(document.querySelector('#C'), opt);
  }
};
</script>

<style lang="scss">
#C {
  width: 50rem;
  height: 30rem;
}
</style>
