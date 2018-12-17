<template>
  <div>
     <swiper :list="demo01_list"></swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

export default {
  components: {
    Swiper,
    SwiperItem
  },
  ready () {

  },
  methods: {
  },
  data () {
    return {
      demo01_list: baseList
    }
  }
}
</script>

<style scoped>
.swiper-demo-img img {
  width: 100%;
}
</style>
