<script>
import authSignIn from './authComponents/authSignIn.vue';
import authSignUp from './authComponents/authSignUp.vue';

export default {
  functional: true,
  props: {
    activate: {
      type: Boolean,
      default: false
    }
  },
  render(createElement, { props }) {
    function activateForm() {
      if (props.activate) return authSignUp;
      return authSignIn;
    }
    return createElement(activateForm());
  }
};
</script>
