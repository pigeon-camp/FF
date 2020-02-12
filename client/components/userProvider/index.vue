<script>
import { getComponent } from './ComponentMap';
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  render(createElement, { props }) {
    return createElement(getComponent(props.type));
  }
};
</script>
