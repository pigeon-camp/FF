<template>
  <v-container>
    TITLE TITLE TITLE TITLE
    <hr />
    WRITER: TESTER123
    <div>2017.07.22 created</div>
    <div class="_break">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit tellus,
      accumsan sit amet pretium a, molestie ut sem. Morbi pellentesque
      condimentum aliquet. Quisque ante justo, maximus ac nibh ut, cursus
      ullamcorper tellus. In eget maximus neque. Integer a dictum nisl, quis
      finibus augue. Integer vulputate lobortis mi, non faucibus ipsum interdum
      eget. Suspendisse potenti. Praesent dignissim, nibh at hendrerit
      tincidunt, mauris ex pharetra nisi, in faucibus turpis neque sit amet
      diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
      mattis, risus ut tristique bibendum, purus metus vulputate ipsum, in
      sagittis leo est sed metus. Nunc vehicula sapien at leo sollicitudin, a
      vestibulum tellus tincidunt. Nulla facilisis in leo nec fermentum. Quisque
      sed metus non ligula scelerisque pretium ut ac urna. Donec semper at quam
      non ultricies. Sed urna neque, efficitur eu accumsan sit amet, hendrerit
      rhoncus nunc. Nunc fringilla nunc risus, vitae volutpat diam vestibulum
      nec. Sed in dolor porttitor, cursus odio in, finibus magna. Cras vehicula,
      nisi porta pharetra tincidunt, tellus quam tristique massa, ac hendrerit
      nulla mi quis urna. Maecenas porta ac velit a posuere. Suspendisse
      scelerisque elit dignissim dui tempus, sed tincidunt dolor maximus. Sed
      vel lorem pharetra, euismod neque id, molestie diam. Fusce vel dui ante.
      Nunc pellentesque interdum nulla. Mauris ut enim fringilla, feugiat tellus
      sit amet, tempor ligula. Nullam rhoncus eros eros, tempor vehicula turpis
      molestie eget. Sed pulvinar erat enim, ac condimentum lectus lacinia id.
      Nam pharetra elit vitae elit sodales, a accumsan mauris aliquam. Cras
      congue urna pharetra, semper lorem non, consectetur leo. Phasellus lacinia
      massa et lacus laoreet tempus. Proin egestas nunc at magna ultricies
      lacinia. Mauris ex diam, sodales sed maximus a, auctor vitae urna.
      Vestibulum id dictum erat, et dignissim est. Curabitur auctor hendrerit
      urna, nec pretium sem.
      <div>
        <img :src="test" />
      </div>
      <!-- {{ test }} -->
    </div>

    <div>
      <v-icon>mdi-tag</v-icon>
      <v-chip color="green" label text-color="white" small>
        porta leon
      </v-chip>

      <v-chip color="green" label text-color="white" small>
        1234567891
      </v-chip>

      <v-chip color="green" label text-color="white" small>
        maximum333
      </v-chip>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      test: 'https://picsum.photos/510/300?random'
    };
  },
  created() {
    console.log(this);
  }
};
</script>
