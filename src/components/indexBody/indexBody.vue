<template>
  <div id="home">
    <div class="wrap_tab">
      <div class="top_home_tab">
      <div class="tab_list">
        <router-link class="tab_items" :to="{name:'all',params:{type:item.type}}" v-for="(item,index) in tabList" :key='index'>{{item.text}}</router-link>
      </div>
      <div class="tab_home_more" @click="show = true">
        <i></i>
      </div>
      <div class="wrap_pop" v-transfer-dom>
        <popup class="pop_up" v-model="show" height="92%">
          <div class="pop_close" @click="show = false"></div>
          <div class="pop_tit">
            <span class="tit_font">我的频道</span>
            <span class="tit_text">点击进入频道</span>
            <span class="tit_edit" @click="isDelShow = !isDelShow" >
              <i v-if="isDelShow">完成</i>
              <i v-else>编辑</i>
            </span>
            <div class="more_tab">
              <router-link to="/" class="more_tab_items" v-for="(item,index) in tabList" :key="index">
              {{item.text}}
              <i class="del" :class='isDelShow ? "show" : "hide"' @click="delItems(index)"></i>
              </router-link>
            </div>
          </div>
          <div class="pop_more">
            <span class="tit_font">频道推荐</span>
            <span class="tit_text">点击添加频道</span>
            <div class="more_tab">
              <span class="more_tab_items" v-for="(item,index) in newTabList" :key="index" @click="addItems(index)">{{item.text}}</span>
            </div>
          </div>
        </popup>
      </div>
      </div>
    </div>
    <router-view></router-view>
  </div>    
</template>

<script>
import { Popup, TransferDom } from 'vux'

export default {
  components: {
    Popup
  },
  directives: {
    TransferDom
  },
  data(){
    return{
      show:false,
      isDelShow:false,
      tabList: [
        {
          text: '推荐',
          name: 'wap',
          type: '__all__'
        },
        {
          text: '热点',
          name: 'newsHot',
          type: 'news_hot'
        },
        {
          text: '社会',
          name: 'society',
          type: 'news_society'
        },
        {
          text: '娱乐',
          name: 'entertainment',
          type: 'news_entertainment'
        },
        {
          text: '科技',
          name: 'tech',
          type: 'news_tech'
        },
        {
          text: '汽车',
          name: 'car',
          type: 'news_car'
        },
        {
          text: '体育',
          name: 'sports',
          type: 'news_sports'
        },
        {
          text: '财经',
          name: 'finance',
          type: 'news_finance'
        },
        {
          text: '军事',
          name: 'military',
          type: 'news_military'
        },
        {
          text: '国际',
          name: 'world',
          type: 'news_world'
        },
        {
          text: '时尚',
          name: 'fashion',
          type: 'news_fashion'
        },
      ],
      newTabList:[
        {
          text: '游戏',
          name: 'newsGame',
          type: 'news_game'
        },
        {
          text: '旅游',
          name: 'newsTravel',
          type: 'news_travel'
        },
        {
          text: '历史',
          name: 'newsHistory',
          type: 'news_history'
        },
        {
          text: '探索',
          name: 'newsDiscovery',
          type: 'news_discovery'
        },
        {
          text: '美食',
          name: 'newsFood',
          type: 'news_food'
        },
        {
          text: '育儿',
          name: 'newsBaby',
          type: 'news_baby'
        },
        {
          text: '养生',
          name: 'newsRegimen',
          type: 'news_regimen'
        },
        {
          text: '故事',
          name: 'newsStory',
          type: 'news_story'
        },
        {
          text: '美文',
          name: 'newsEssay',
          type: 'news_essay'
        }
      ],
    }
  },
  methods: {
    delItems(i){
      this.newTabList.push(this.tabList[i])
      this.tabList.splice(i,1)
    },
    addItems(i) {
      this.tabList.push(this.tabList[i])
      this.newTabList.splice(i,1)
    }
  }
}
</script>

<style>
.top_home_tab {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  background: #eee;
}
.wrap_tab {
  padding-top: 31px;
}
.tab_list .tab_items {
  font-size: 12px;
  padding: 0 8px;
  color: #333;
}
.tab_list {
  padding: 7px 0;
  padding-left: 0;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: scroll;
  width: 90%;
  float: left;
}
.tab_list::-webkit-scrollbar {
  display: none;
}
.tab_home_more {
  float: left;
  height: 33px;
  width: 10%;
  background: #fff;
}
.tab_home_more i {
  display: inline-block;
  background: url(../../assets/img/gengduo.svg) no-repeat;
  height: 100%;
  width: 100%;
  background-position: center center;
  background-size: 60% 60%;
}
.wrap_pop .pop_up {
  background: #fff;
  padding: 3%;
  box-sizing: border-box;
  line-height: 1.6;
}
.pop_close {
  background: url(../../assets/img/close.svg) no-repeat center;
  width: 5%;
  height: 5%;
  background-size: 100% 100%;
}
.pop_tit {
  padding-top: 2%;
  margin-top: 30px;
}
.tit_font {
  font-size: 20px;
  color: #333;
}
.tit_text {
  font-size: 12px;
  color: #999;
  margin-left: 2%;
}
.tit_edit {
  float: right;
  padding: 1% 2%;
  border: 1px solid #f85959;
  color: #df0000;
  font-size: 10px;
  border-radius: 20px;
  margin-top: -40px;
}
.tit_edit i {
  font-style: normal;
}
.more_tab_items {
  padding: 2% 6%;
  margin: 2% 2.1%;
  background: #d6d6d6;
  color: #333;
  font-size: 14px;
  box-sizing: border-box;
  white-space: nowrap;
  position: relative;
}
.more_tab {
  display: flex;
  flex-wrap: wrap;
}
.pop_more {
  margin-top: 25px;
}
.more_tab_items .del {
  position: absolute;
  background: url(../../assets/img/del.svg) no-repeat;
  top: -7px;
  right: -5px;
  width: 16px;
  height: 16px;
  background-size: 100% 100%;
  display: none;
}
.del.show {
  display: block;
}
</style>
