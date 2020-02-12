<template>
  <v-container>
    <h2 class="headline my-5 text-center">Create Post</h2>
    <!-- form -->
    <v-form ref="form" v-model="valid">
      <!-- title -->
      <h2 class="my-5">
        <v-icon :color="color.title" class="mx-3">{{ icon.title }}</v-icon>
        Title
      </h2>
      <v-text-field
        v-model="title"
        :counter="15"
        :rules="rules.titleRule"
        label="TITLE"
        required
      />

      <!-- description -->
      <h2 class="my-5">
        <v-icon :color="color.content" class="mx-3">{{ icon.content }}</v-icon>
        Description
      </h2>
      <v-textarea
        v-model="content"
        :counter="100"
        :rules="rules.contentRule"
        label="Description"
        outlined
      />

      <post-image-uploader @imgpost="getImages" />
      <v-btn :disabled="!valid" color="success" @click="validate">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import PostImageUploader from './PostImageUploader';
export default {
  components: {
    PostImageUploader
  },
  data() {
    return {
      // form
      title: '',
      content: '',
      images1: {},
      images2: [],
      valid: false,
      // rules & icons controller
      rules: {
        titleRule: [
          v => !!v || 'Title is required',
          v => (v && v.length <= 15) || 'Title must be less than 15 characters'
        ],
        contentRule: [
          v => v.length <= 100 || 'Description must be less than 100 characters'
        ]
      },
      icon: {
        title: 'mdi-close-circle',
        content: 'mdi-chevron-down-circle'
      },
      color: {
        title: '#E57373',
        content: '#64B5F6'
      },
      // error handler
      snackbar: false,
      timeout: 2000
    };
  },
  watch: {
    title(newVal) {
      if (newVal.length > 0 && newVal.length <= 15) {
        this.icon.title = 'mdi-chevron-down-circle';
        this.color.title = '#64B5F6';
      } else {
        this.icon.title = 'mdi-close-circle';
        this.color.title = '#E57373';
      }
    },
    content(newVal) {
      if (newVal.length <= 100) {
        this.icon.content = 'mdi-chevron-down-circle';
        this.color.content = '#64B5F6';
      } else {
        this.icon.content = 'mdi-close-circle';
        this.color.content = '#E57373';
      }
    }
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        // Spinner Start
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });
        try {
          const formData = new FormData();
          const context = {
            title: this.title,
            content: this.content,
            images: this.images1
          };
          for (let i = 0; i < this.images2.length; i++) {
            formData.append('imgPost', this.images2[i]);
          }
          formData.append('postInfo', JSON.stringify(context));
          await this.$store.dispatch('post/createPost', formData);
          // this.$router.push({ name: 'index' });
          this.$nuxt.$loading.finish();
        } catch (e) {
          console.error(e);
        }
      }
    },
    getImages(images) {
      for (let i = 0; i < images.length; i++) {
        this.images1[i] = images[i];
      }
      this.images2 = images;
    }
  }
};
</script>
