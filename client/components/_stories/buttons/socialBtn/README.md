<!--split:kakao1-->
```html
<v-btn width="300" height="50" class="_button1" color="#FFF200">
  <v-row>
    <v-col cols="3" class="pa-0 _center">
      <div class="_button1-img" />
    </v-col>
    <v-col cols="8" class="pa-0 _center">
      <span class="subtitle-1">카카오 로그인</span>
    </v-col>
  </v-row>
</v-btn>
```
```scss
._button1 {
  &-img {
    width: 41px;
    height: 41px;
    background: url('./Elements/kakao.svg');
  }
  ._center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
```

<!--split:kakao2-->
```html
<v-btn width="65" height="65" color="#FFF200" class="pa-0 ma-0" depressed>
  <div class="_kbtn2-img" />
</v-btn>
```
```scss
._kbtn2-img {
  width: 52px;
  height: 48px;
  background: url('./Elements/kakaofont.svg');
  background-size: cover;
}
```

<!--split:naver1-->
```html
<v-btn width="300" height="50" class="_nbtn1" color="#4AB748">
  <v-row>
    <v-col cols="3" class="pa-0 _center">
      <div class="_nbtn1-img" />
    </v-col>
    <v-col cols="8" class="pa-0 _center">
      <span class="subtitle-1">네이버 로그인</span>
    </v-col>
  </v-row>
</v-btn>
```
```scss
._nbtn1 {
  &-img {
    width: 41px;
    height: 41px;
    background: url('./Elements/naver.svg');
  }
  ._center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
```

<!--split:naver2-->
```html
<v-btn width="65" height="65" color="#4AB748" class="pa-0 ma-0" depressed>
  <div class="_nbtn2-img" />
</v-btn>
```
```scss
._nbtn2-img {
  width: 2rem;
  height: 1.8rem;
  background: url('./Elements/naverfont.svg');
  background-size: cover;
}
```