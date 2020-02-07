<template>
  <div>
    <div class="display-2 pa-3">
      Become a contributor
    </div>

    <div class="display-1 pa-3 d-flex justify-space-between">
      Financial contributions
      <div>
        <v-btn>버튼</v-btn>
        <v-btn>버튼</v-btn>
      </div>
    </div>
    <fina-list />
  </div>
</template>

<script>
import FinaList from './FinaList.vue';

export default {
  components: {
    FinaList
  }
};
</script>
