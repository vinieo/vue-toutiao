<template>
  <div id="wrap_head">
    <div class="head_con">
      <flexbox class="wrap_heada">
        <flexbox-item :span="3" class="wrap_logo">
          <div class="logo"></div>
        </flexbox-item>
        <flexbox-item class="wrap_search">
          <div class="search">
            <input type="text" class="search_input"/>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from "vux";

export default {
  components: {
    Flexbox,
    FlexboxItem
  }
};
</script>

<style scoped>
#wrap_head {
  padding-top: 40px;
}
.head_con {
  background: red;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.logo {
  background: url(../../assets/img/toutiao_logo.png) no-repeat center center;
  height: 40px;
  background-size: 60px;
}
.head_con .wrap_head {
  height: 100%;
}
.wrap_head > div {
  height: 40px;
}
.search {
  height: 100%;
  position: relative;
  width: 100%;
}
.search_input {
  position: absolute;
  top: 50%;
  margin-top: -10px;
  height: 20px;
  line-height: 20px;
  border: none;
  width: 80%;
  padding-left: 23px;
  background: #fff url(../../assets/img/search.svg) no-repeat;
  background-size: 16px;
  background-position: 5px center;
  border-radius: 7px;
}
</style>
