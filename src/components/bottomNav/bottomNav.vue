<template>
    <div id="bottom">
        <div class="bottom_nav">
        <flexbox :gutter="0">
            <flexbox-item>
                <router-link to="/"  class="change">
                <div class="nav_icon1"></div>
                <div class="nav_title">首页</div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/news">
                <div class="nav_icon2"></div>
                <div class="nav_title">要闻</div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/adding">
                <div class="nav_icon3"></div>
                <div class="nav_title"></div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/video">
                <div class="nav_icon4"></div>
                <div class="nav_title">段子</div>
                </router-link>
            </flexbox-item>
            <flexbox-item>
                <router-link to="/me">
                <div class="nav_icon5"></div>
                <div class="nav_title">我的</div>
                </router-link>
            </flexbox-item>
        </flexbox>
    </div>
    </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Flexbox,
    FlexboxItem
  }
};
</script>

<style scoped>
#bottom{padding-bottom: 72px}
    .bottom_nav{position: fixed; bottom: 0; left: 0; width: 100%;padding: 5px 0; background: #fff}
    .nav_title{text-align: center}
    .nav_icon1{
        background: url(../../assets/img/index.svg) no-repeat center;
        background-size: 24px 24px ;
        height: 24px;
    }
    .nav_icon2{
        background: url(../../assets/img/yaowen.svg) no-repeat center;
        background-size: 24px 24px ;
        height: 24px;
    }
    .nav_icon3{
        background: url(../../assets/img/jia.svg) no-repeat center;
        background-size: 72px 72px ;
        height: 72px;
    }
    .nav_icon4{
        background: url(../../assets/img/shipin.svg) no-repeat center;
        background-size: 24px 24px ;
        height: 24px;
    }
    .nav_icon5{
        background: url(../../assets/img/me.svg) no-repeat center;
        background-size: 24px 24px ;
        height: 24px;
    }
    .router-link-exact-active .nav_title{color: rgb(255, 0, 0);}
    .router-link-exact-active .nav_icon1{background-image: url(../../assets/img/index_gover.svg)}
    .router-link-exact-active .nav_icon2{background-image: url(../../assets/img/yaowen_hover.svg)}
    .router-link-exact-active .nav_icon3{background-image: url(../../assets/img/jia1.svg)}
    .router-link-exact-active .nav_icon4{background-image: url(../../assets/img/shiping_hover.svg)}
    .router-link-exact-active .nav_icon5{background-image: url(../../assets/img/me_hover.svg)}
</style>
