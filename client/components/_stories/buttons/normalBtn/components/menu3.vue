<template>
  <div class="_tab">
    <input v-for="n in 5" :id="`_tab${n}`" :key="n" type="radio" name="p" />

    <nav>
      <ul>
        <li v-for="n in 5" :key="n" :class="`_tab${n}`">
          <label :for="`_tab${n}`">Item {{ n }}</label>
        </li>
      </ul>
    </nav>

    <section>
      <div v-for="n in 5" :key="n" :class="`_tab${n}`">
        <p>Content {{ n }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector('#_tab3').checked = true;
  }
};
</script>

<style lang="scss">
._tab {
  width: 100%;
  max-width: 50rem;
  > input,
  > section > div {
    display: none;
  }

  #_tab1:checked ~ section ._tab1,
  #_tab2:checked ~ section ._tab2,
  #_tab3:checked ~ section ._tab3,
  #_tab4:checked ~ section ._tab4,
  #_tab5:checked ~ section ._tab5 {
    display: block;
  }

  #_tab1:checked ~ nav ._tab1 label,
  #_tab2:checked ~ nav ._tab2 label,
  #_tab3:checked ~ nav ._tab3 label,
  #_tab4:checked ~ nav ._tab4 label,
  #_tab5:checked ~ nav ._tab5 label {
    background: #fff;
    position: relative;
  }

  ul {
    list-style-type: none;
  }

  ul > li:not(:last-child) > label {
    border-right-width: 0;
  }

  ul > li > label {
    float: left;
    padding: 1em;
    // border: 0.1rem solid #ddd;
    background: #eee;
    border-bottom: 0;

    &:hover {
      background: #ddd;
    }

    &:active {
      background: #fff;
    }
  }

  section {
    clear: both;
  }
}
</style>
