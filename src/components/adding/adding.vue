<template>
  <div>
    <div v-for="(src,index) in list" :key="index" style="background-color:yellow;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>
  </div>
</template>

<script>
import { XImg } from 'vux'

export default {
  components: {
    XImg
  },
  methods: {
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    }
  },
  data () {
    return {
      list: [
        'https://wx4.sinaimg.cn/mw1024/81de9414gy1fvyz76yax2j21kw1kw4qp.jpg',
        'https://wx1.sinaimg.cn/mw1024/81de9414gy1fy8tci5wmqj23k02o01kz.jpg',
        'https://wx3.sinaimg.cn/mw1024/81de9414gy1fvy76r4tyyj20zk0qogoe.jpg',
        'https://wx2.sinaimg.cn/mw1024/81de9414gy1fvy71wdd83j20qo0zkn05.jpg',
        'https://ww3.sinaimg.cn/mw1024/81de9414gw1eyu8z61e25j2140140452.jpg',
        'https://ww3.sinaimg.cn/mw1024/81de9414jw1exfvc77qvoj218g0p0tga.jpg',
        'https://ww2.sinaimg.cn/mw1024/81de9414jw1evo1uep0kbj2140140na6.jpg',
        'https://ww3.sinaimg.cn/mw1024/81de9414jw1ek2qog0zdkj20mr0h2wgy.jpg'
      ]
    }
  }
}
</script>

<style>
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
</style>
