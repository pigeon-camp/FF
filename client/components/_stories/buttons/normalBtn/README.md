<!--split:menu1-->
```html
<div class="_menu1">
  <input type="checkbox" class="_menu1-switch" style="display: none" />
  <v-btn class="_menu1-button" @click="toggle" outlined>Menu</v-btn>

  <div class="_menu1-dropdown">
    <div class="_menu1-list">
      <!-- 리스트 작성 -->
    </div>
  </div>
</div>
```
```javascript
methods: {
  toggle(e) {
    document.querySelector('._menu1-switch').click();
  }
}
```
```scss
._menu1-dropdown {
  width: 30rem;
  height: 0rem;
  background: #eee;
  opacity: 0;
  transition: all 1s cubic-bezier(0.215, 0.610, 0.355, 1.000);
}

._menu1-switch:checked {
  ~ ._menu1-dropdown {
    height: 20rem;
    opacity: 1;
    transition: all 1s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  ~ ._menu1-button {
    background: black;
    color: white;
  }
}
```

<!--split:menu2-->
hover시 dropdown 작동한다. 나머지는 menu1과 동일
```html
<div class="_menu2">
    <v-btn class="_menu2-button" outlined>Menu</v-btn>

    <div class="_menu2-dropdown">
      <div class="_menu2-list">

      </div>
    </div>
  </div>
```
```scss
._menu2 {
  width: 5rem;

  &-dropdown {
    position: absolute;
    width: 30rem;
    height: 0rem;
    background: #ddd;
    opacity: 0;
    transition: all 1s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  &:hover {
    ._menu2-dropdown {
      height: 20rem;
      opacity: 1;
      transition: all 1s cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    ._menu2-button {
      background: black;
      color: white;
    }
  }
}
```

<!--split:menu3-->
탭 버튼이다. 일반적인 box 활용
```html
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
```
```javascript
mounted() {
    document.querySelector('#_tab3').checked = true;
}
```
```scss
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
```