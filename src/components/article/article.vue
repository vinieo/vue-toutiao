<template>
    <div class="article"><h1>{{article.title}}</h1>
    <div class="content" v-html="article.content"></div>
    </div>
            
</template>

<script>
import Jsonp from "jsonp";

export default {
  data() {
    return {
      article: {}
    };
  },
  methods: {
    bbb(articleUrl) {
      Jsonp(
        `https://m.toutiao.com/i${articleUrl}/info/?_signature=UFicIhAdC6.6d9yi7hfqVVBYnD&i=66`,
        { timeout: 3000 },
        (err, res) => {
          if (res) {
            console.log(res);
            this.article = res.data;
          }
        }
      );
    }
  },
  created() {
    this.bbb(this.$route.params.id);
  }
};
</script>

<style >
.article {
  padding: 10px;
  font-size: 14px;
}
.article h1 {
  font-size: 16px;
}
.article img {
  width: 100%;
}
</style>
      