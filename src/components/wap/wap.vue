<template>
  <div class="wap_all">
    <div class="all">
      <news-list :allList='listItem'></news-list>
    </div>
  </div>
</template>

<script>
import newsList from "components/newsList/newsList";
import Jsonp from "jsonp";


export default {
  components: {
    newsList
  },
  data() {
    return {
      newsLists: {
        __all__: [],
        news_hot: [],
        news_society: [],
        news_entertainment: [],
        news_tech: [],
        news_car: [],
        news_sports: [],
        news_finance: [],
        news_military: [],
        news_world: [],
        news_fashion: [],
        news_game: [],
        news_travel: [],
        news_history: [],
        news_discovery: [],
        news_food: [],
        news_baby: [],
        news_regimen: [],
        news_story: [],
        news_essay: []
      }
    };
  },
  created() {
    if (this.newsLists[this.$route.params.type].length == 0) {
      this.aaa({
        type: this.$route.params.type
      });
    }
  },
  methods: {
    aaa(newsType) {
      let timeRequest = parseInt(new Date().getTime() / 1000);
      Jsonp(
        `https://m.toutiao.com/list/?tag=${newsType.type}&ac=wap&count=20&format=json_raw&as=A1C56BCFF63CCFE&cp=5BF64C9C4FCE4E1&min_behot_time=${timeRequest}&_signature=a17jlAAAMKvBcaMUfpRbomte44&i=1542900712`,
        { 
          timeout: 3000
        },
        (err, res) => {
          console.log(res.data);
          this.newsLists[this.$route.params.type || "__all__"] = res.data;
        }
      );
    }
  },
  computed: {
    listItem() {
      return this.newsLists[this.$route.params.type || "__all__"];
    }
  },
  watch: {
    $route(to, from) {
      console.log(this.newsLists);
      if (to.path.includes("all")) {
        const type = this.$route.params.type;
        if (this.newsLists[type].length == 0) {
          this.aaa({
            type: this.$route.params.type
          });
        }
      }
    }
  }
};
</script>
