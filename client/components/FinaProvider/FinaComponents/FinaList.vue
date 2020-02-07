<template>
  <div class="d-flex justify-center">
    <div class="_row">
      <div v-for="n in 6" :key="n" class="_row-item px-5">
        <fina-card />
      </div>
    </div>
  </div>
</template>

<script>
import FinaCard from './FinaCard.vue';
export default {
  components: {
    FinaCard
  }
};
</script>
