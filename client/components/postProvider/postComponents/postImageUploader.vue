<template>
  <div>
    <!-- <img v-if="imageUrl" :src="imageUrl" height="150" /> -->
    <v-text-field
      label="Select Image"
      outlined
      prepend-icon="mdi-attachment"
      :value="imageNames"
      @click="pickFile"
    />

    <input
      ref="image"
      type="file"
      style="display: none"
      accept="image/*"
      multiple
      @change="getImgUrl"
    />
    {{ files }}
    <div v-for="(image, index) in images" :key="index">
      <v-img height="150" width="150" :src="image" />
      <v-icon @click="deleteImage(index)">mdi-backspace-outline</v-icon>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash';

export default {
  data() {
    return {
      files: [],
      imageNames: [],
      images: []
    };
  },
  methods: {
    deleteImage(idx) {
      this.files.splice(idx, 1);
      this.images.splice(idx, 1);
      this.imageNames.splice(idx, 1);
    },
    pickFile() {
      this.$refs.image.click();
    },
    getImgUrl(e) {
      const files = e.target.files;
      const MAX_SIZE = 30000;
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > MAX_SIZE) {
          window.alert(`Max size : ${MAX_SIZE}kb`);
          continue;
        }
        if (!files[i].type.match('image.*')) {
          window.alert('image 파일이 아님');
          continue;
        }

        this.files.push(files[i]);
        this.imageNames.push(files[i].name);
        const fr = new FileReader();
        fr.addEventListener(
          'load',
          () => {
            this.images.push(fr.result);
          },
          false
        );
        fr.readAsDataURL(files[i]);
        // file validation
        // this.files = [
        //   ...this.files,
        //   ..._.map(files, file => ({
        //     name: file.name,
        //     size: file.size,
        //     type: file.type
        //   }))
        // ];
      }
      console.log(this.files, '^^');
      this.$emit('imgpost', this.files);
    }
    // validateFile(file) {
    //   if (file.size > MAX_SIZE) {
    //     window.alert(`Max size : ${MAX_SIZE}kb`);
    //     const idx = this.files.length;
    //     console.log(idx);
    //     this.deleteImage(idx);
    //     return `Max size : ${MAX_SIZE}kb`;
    //   }
    //   console.log(file.type, '??');
    // }
  }
};
</script>
