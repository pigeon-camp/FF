<template>
  <div>
    <user-main />
    <v-divider />

    <user-board />
    <v-divider />

    <user-modal />
    <v-divider />

    <div>
      <fina-card />
    </div>
    <v-divider />

    <fina-main />

    <div>
      <post-main />
      <post-board />
    </div>
    <v-divider />
  </div>
</template>

<script>
import userMain from '@/components/userComponent/userMain';
import userBoard from '@/components/userComponent/userBoard';
import userModal from '@/components/userComponent/userModal';
import postMain from '@/components/postProvider/postComponents/postMain.vue';
import postBoard from '@/components/postProvider/postComponents/postBoard.vue';
import FinaCard from '@/components/FinaProvider/FinaComponents/FinaCard.vue';
import FinaMain from '@/components/FinaProvider/FinaComponents/FinaMain.vue';

export default {
  components: {
    userMain,
    userBoard,
    userModal,
    postMain,
    postBoard,
    FinaCard,
    FinaMain
  }
};
</script>
