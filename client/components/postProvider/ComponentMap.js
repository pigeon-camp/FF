import postBoard from './postComponents/postBoard.vue';
import postCreate from './postComponents/postCreate.vue';
import postMain from './postComponents/postMain.vue';
import postDetail from './postComponents/postDetail.vue';

const COMPONENT_MAP = {
  board: postBoard,
  create: postCreate,
  main: postMain,
  detail: postDetail
};

export function getComponent(type) {
  return COMPONENT_MAP[type];
}
