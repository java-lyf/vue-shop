<template>
  <div id="as">
    <van-row>
      <van-col span="2">
        <span class="scan-btn">
          <van-icon name="scan"/>
        </span>
      </van-col>
      <van-col span="19">
        <form action="/">
          <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel"/>
        </form>
      </van-col>
      <van-col span="3">
        <span class="login-title">登录</span>
      </van-col>
    </van-row>

    <van-notice-bar
      mode="closeable"
      text="本系统将于2019年6月18日0时0分（后天）暂停运营维护系统升级，请在此前下单"
      left-icon="volume-o"
    />
    <van-row>
      <van-col span="20">
        <van-tabs :swipe-threshold="6">
          <van-tab v-for="index in category" :title="index" :key="index">内容 {{ index }}</van-tab>
        </van-tabs>
      </van-col>
      <van-col span="4">
        <span class="more-btn" @click="showMore">
          <van-tag mark plain>
            <van-icon name="wap-nav"/>更多
          </van-tag>
        </span>
      </van-col>
    </van-row>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>
    <van-popup
      v-model="show"
      position="right"
      :overlay="false"
      :style="{ width: '100%', height: '100%' }"
    >
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <van-icon name="ellipsis" slot="right"/>
      </van-nav-bar>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";

// options 为可选参数，无则不传
Vue.use(Lazyload);
export default {
  data() {
    return {
      value: "",
      show: false,
      images: [
        "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"
      ],
      category: [
        "首页",
        "男装",
        "女装",
        "童装",
        "食品",
        "生鲜",
        "洗护",
        "电器",
        "百货"
      ]
    };
  },
  methods: {
    onSearch() {
      console.log(this.value);
    },
    onCancel() {},
    showMore() {
      this.show = true;
    },
    onClickLeft() {
      this.show = false;
    }
  }
};
</script>
<style lang="less">
@import "../../style/var";
.van-swipe {
  cursor: pointer;
  &-item {
    color: @white;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    &:nth-child(even) {
      background-color: #39a9ed;
    }
    &:nth-child(odd) {
      background-color: #66c6f2;
    }
  }
  img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 240px;
    padding: 30px 60px;
    background-color: @white;
    pointer-events: none;
  }
}
&--vertical {
  height: 200px;
  .van-swipe-item {
    line-height: 200px;
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  color: @white;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.more-btn {
  width: 100%;
  top: 12px;
  left: 10px;
  position: relative;
  font-size: 14px;
}
.scan-btn {
  position: relative;
  font-size: 20px;
  width: 100%;
  top: 15px;
  left: 50%;
}
.login-title {
  width: 100%;
  position: relative;
  top: 15px;
}
</style>

