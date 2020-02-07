<template>
  <v-card class="mx-auto _finaCard" width="300" height="580">
    <div class="_finaCard-header">
      <v-card-title class="headline">1</v-card-title>
    </div>

    <v-card-subtitle class="pb-0 subtitle-1">NORMAL</v-card-subtitle>

    <v-card-text class="text--primary ">
      <div class="body-1 _break">
        Etiam at dolor efficitur, ultrices sapien sit amet, suscipit lacus.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </div>

      <v-list dense disabled>
        <v-list-item-group>
          <v-list-item class="pa-0 ma-0">
            <v-list-item-icon class="mr-1">
              <v-icon class="purple--text text--lighten-3" v-text="test_icon" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="blue-grey--text text--lighten-2"
                v-text="test_list"
              />
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="pa-0 ma-0">
            <v-list-item-icon class="mr-1">
              <v-icon class="purple--text text--lighten-3" v-text="test_icon" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="blue-grey--text text--lighten-2"
                v-text="test_list"
              />
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="pa-0 ma-0">
            <v-list-item-icon class="mr-1">
              <v-icon class="purple--text text--lighten-3" v-text="test_icon" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="blue-grey--text text--lighten-2"
                v-text="test_list"
              />
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="pa-0 ma-0">
            <v-list-item-icon class="mr-1">
              <v-icon class="purple--text text--lighten-3" v-text="test_icon" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="blue-grey--text text--lighten-2"
                v-text="test_list"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <span class="subtitle grey--text">Started at</span>
      <div>
        <span class="headline">
          ₩ 1,000,000
        </span>
        <span class="subtitle-1 blue-grey--text">
          USD / month
        </span>
      </div>
    </v-card-text>

    <v-card-actions class="justify-center pt-0">
      <v-btn width="95%" color="orange" outlined rounded>
        Contribute
      </v-btn>
    </v-card-actions>

    <v-card-actions class="justify-space-around px-5">
      <v-avatar size="38">
        <v-img src="https://picsum.photos/510/300?random" />
      </v-avatar>

      <v-avatar size="38">
        <v-img src="https://picsum.photos/510/300?random" />
      </v-avatar>

      <v-avatar size="38">
        <v-img src="https://picsum.photos/510/300?random" />
      </v-avatar>

      <v-avatar size="38">
        <v-img src="https://picsum.photos/510/300?random" />
      </v-avatar>

      <div class="subtitle-2">
        +29
      </div>
    </v-card-actions>

    <div :style="{ fontSize: f + 'px' }" class="grey--text text-center">
      29 individuals and 6 organizations have contributed
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      f: 5,
      // 간편한 신청으로 전문가를 통한 안전한 절차로
      // 출원 받으세요
      // 이미 사용중인 상표, 특이&독창적 상표
      // 쉽고 간단한 설문, 전자출원 진행!
      // 최적권리범위 설정 및 상표등록 전과정 고객지원
      // 특허청 의견통지시 변리사 2인 검토 (대응 불포함)
      // 동일상표 유무 체크
      // 등록비 추후 납부 (등록료: 265,000원)
      test_icon: 'mdi-check',
      test_list: 'Nam rhoncus auctor nibh non nibh'
    };
  }
};
</script>
