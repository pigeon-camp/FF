import userProfile from './userComponent/userProfile.vue';

const COMPONENT_MAP = {
  profile: userProfile
};

export function getComponent(type) {
  return COMPONENT_MAP[type];
}
