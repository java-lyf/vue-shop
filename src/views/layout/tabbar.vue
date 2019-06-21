<template>
<div>
<router-view/>
<van-tabbar v-model="active">
  <van-tabbar-item replace to="/home" name="home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item replace to="/notice" name="notice" icon="chat-o">消息</van-tabbar-item>
  <van-tabbar-item replace to="/cart" name="cart" icon="cart-o">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/account" name="account" icon="user-o">个人中心</van-tabbar-item>
</van-tabbar>
</div>
</template>
<script>
export default {
  data() {
    return {
      active: 'home'
    }
  },
  created(){
    this.initActive();
  },
  methods:{
    initActive() {
      let route = this.$route.path||"/home";
      this.active = route.replace('/','');
    },
  }
}
</script>
