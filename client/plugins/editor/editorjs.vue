<template>
  <div>
    <div id="codex-editor" />
    <v-btn @click="save()">Say-V</v-btn>
    <div class="editorx_body">
      <pre>{{ value }}</pre>
    </div>
  </div>
</template>

<script>
// import dummy from './dummy.json';
import { ImageClass } from './imageClass';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import List from '@editorjs/list';

export default {
  data() {
    return {
      value: null
    };
  },
  mounted() {
    this.myEditor();
    // console.log(dummy);
  },
  methods: {
    save() {
      window.editor.save().then(savedData => {
        // console.log(savedData);
        this.value = savedData;
      });
    },
    myEditor() {
      window.editor = new EditorJS({
        holder: 'codex-editor',
        autofocus: true,
        /**
         * This Tool will be used as default
         */
        initialBlock: 'paragraph',
        tools: {
          header: {
            class: Header,
            shortcut: 'CMD+SHIFT+H'
          },
          list: {
            class: List
          },
          paragraph: {
            class: Paragraph,
            config: {
              placeholder: '.'
            }
          },
          image: ImageClass
        },
        onReady() {
          console.log('ready for TAKEOFF');
        },
        onChange() {
          console.log('change');
        }
      });
    }
  }
};
</script>
