<template>
<div>
    <van-search
        v-model="value"
        placeholder="消息"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div
          slot="action"
          @click="onSearch"
        >
         
        </div>
      </van-search>
<van-row type="flex" justify="center">
  <van-col span="6" class="message-type"><div class="type-1"><van-icon name="logistics"/></div><p>物流消息</p></van-col>
  <van-col span="6" class="message-type"><div class="type-2"><van-icon name="volume-o"/></div><p>系统消息</p></van-col>
  <van-col span="6" class="message-type"><div class="type-3"><van-icon name="chat-o"/></div><p>互动消息</p></van-col>
</van-row>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
  >
  <van-row>
      <div class="message-items">
          <div class="item-avatar message-item">
              <img class="avatar" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2521463241,2093533025&fm=115&gp=0.jpg">
          </div>
          <div class="item-avatar message-item">
              <ul>
                  <li><span class="item-title">良品铺子旗舰店</span></li>
                  <li><span class="item-desc">[系统消息]</span></li>
              </ul>
             
          </div>
          
      </div>
      <span style="float:right;margin-top:-30px;">19/06/09</span>
</van-row>
  </van-cell>
</van-list>
</div>
</template>


<script>

export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    onSearch() {
      this.$toast(this.value);
    },
    onCancel() {
      this.$toast(this.$t('cancel'));
    }
  }
}
</script>
<style lang="less">
.message-type {
    text-align: center;
    div{
        margin: 0 auto;
        width: 60px;
        height: 60px;
        border-radius:50%;
        color: #fff;
        cursor: pointer;
        i{
            padding-top: 15px;
            font-size: 30px;
        }
    }
    .type-1{
        background: #1E90FF;
    }
    .type-2{
        background: #FFD700;
    }
    .type-3{
        background: #90EE90;
    }
}
.message-items{
    height: 42px;
    .message-item{
        float: left;
        .avatar{
            width: 40px;
            height: 40px;
        }
        .item-title{
            font-size: 18px;
            font-family: SimHei;
            font-weight:bold;
        }
    }
    
}

</style>
