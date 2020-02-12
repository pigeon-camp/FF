import { configure, addParameters, addDecorator } from '@storybook/vue';
import Vue from 'vue';
import SplitReadme from './split-readme.js';
import 'highlight.js/styles/github-gist.css';
import 'github-markdown-css'
import '../assets/story.css';
import vuetify from './storybookVuetify';

// SplitReadme 플러그인 설치
Vue.use(SplitReadme);

// Highlight 디렉티브 등록
// Vue.use(Highlight);

const style = {
  boxShadow: 'none'
};

addDecorator(() => ({
  vuetify,
  template: '<v-app><story/></v-app>',
}))

// // 스토리북 하단 패널 제거
addParameters({
  options: { showPanel: false }
})

configure(require.context('../components/_stories', true, /\.stories\.js$/), module);