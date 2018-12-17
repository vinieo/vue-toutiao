<template>
  <div class="wrap_newslist">
    <div class="content_list">
      <div class="con_list_items" v-for="(item,index) in newsLists" :key="index">
        {{item.text}}
        <router-link :to='{name:"article",params:{id:item.item_id}}' class="items_link">
        <div v-if="item.image_list.length !== undefined && item.image_list.length!== 0">
          <h3 class="items_title">{{item.title}}</h3>
          <div class="items_img_list">
            <ul class="clearfix">
              <li class="image_list">
                <img :src="item.image_list[0].url" alt="">
              </li>
              <li class="image_list">
                <img :src="item.image_list[1].url" alt="">
              </li>
              <li class="image_list">
                <img :src="item.image_list[2].url" alt="">
              </li>
            </ul>
          </div>
          <div class="items_info">
            <div v-if="item.label !== undefined" class="stick_label">{{item.label}}</div>
            <span>{{item.media_name}}</span>
            <span class="items_comment">评论{{item.comment_count}}</span>
            <span>{{item.datetime}}</span>
          </div>
        </div>
          <div class="wrap_box" v-if="item.image_url !== undefined">
            <div class="items_details_two">
              <h3 class="items_title">{{item.title}}</h3>
              <div class="items_info">
                <div v-if="item.label !== undefined" class="stick_label">{{item.label}}</div>
                <span>{{item.media_name}}</span>
                <span class="items_comment">评论{{item.comment_count}}</span>
                <span>{{item.datetime}}</span>
              </div>
            </div>
            <div class="items_img">
              <img :src="item.image_url" alt="">
            </div>
          </div>
          <div class="wrap_box" v-if="item.image_url == undefined && item.image_list.length== 0">
            <div class="items_detail">
              <h3 class="items_title">{{item.title}}</h3>
              <div class="ad_img" v-if="item.label == '广告'">
                <img :src="item.large_image_url" alt="">
              </div>
              <div class="items_info">
                <div v-if="item.label !== undefined" class="stick_label">{{item.label}}</div>
                <span>{{item.media_name}}</span>
                <span class="items_comment">评论{{item.comment_count}}</span>
                <span>{{item.datetime}}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>   
</template>

<script>
export default {
  props: ["allList"],
  computed: {
    newsLists() {
      return this.allList;
    }
  }
};
</script>

<style>
.items_link {
  display: block;
  padding: 3% 0;
}
.con_list_items {
  margin: 0 3%;
  border-bottom: 1px solid #ddd;
}
.wrap_tab {
  overflow: hidden;
}
.wrap_box {
  overflow: hidden;
}
.items_details_two {
  width: 67%;
  float: left;
}
.items_img {
  width: 30%;
  float: right;
}
.items_img img {
  width: 100%;
}
.items_title {
  font-size: 14px;
}
.items_info .stick_label {
  border: 1px solid salmon;
  color: salmon;
  border-radius: 5px;
  display: inline-block;
  font-size: 12px;
  margin-right: 5px;
}
.items_info {
  color: #999;
}
.items_comment {
  color: salmon;
}
.items_img_list {
  height: 80px;
  overflow: hidden;
}
.items_img_list ul {
  height: 100%;
}
.items_img_list li {
  width: 33.3%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  float: left;
}
.items_img_list li img {
  width: 100%;
  height: 100%;
}
.items_img_list li:first-child {
  padding-left: 0;
}
.items_info {
  padding-left: 2%;
}
</style>
