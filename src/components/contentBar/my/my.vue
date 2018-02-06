<template>
    <div class="my">
        <div class="my_header">
          <!--头部信息-->
            <div>
                <div class="l_f clearfix">
                  <img src="../../../assets/img/my/touxiang.jpg" alt="">
                </div>
                <div class="p_r l_f clearfix" >
                  <p>RaceTime</p>
                  <p>尚未开通特权</p>
                  <button class="p_a">
                    开通
                  </button>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div class="my_menu">
          <!--列表-->

        </div>
        <div class="my_songSheet">
          <!--自建歌单-->

        </div>
        <div class="my_recommend">
          <!--为你推荐-->

        </div>
    </div>
</template>

<script>

    export default {
        name: '',
        //数据
        data() {
            return {}
        },
        //计算属性
        computed: {},
        //组件
        components: {},
        //方法
        methods: {},
        //组件刚创建，数据绑定之前
        beforeCreate: function () {
        },
        //事件初始化完成之后
        created: function () {
        },
        // 所有东西把挂载点挂之前
        beforeMount: function () {
        },
        //数据挂载之前
        mounted: function () {
        },
        //数据更新之前处理
        beforeUpdate: function () {
        },
        //数据更新之前处理
        update: function () {
        },
        //组件销毁之前
        beforeDestroy: function () {
        },
        //组件销毁之后
        destroyed: function () {
        },
        //监听
        watch: {},

    }
</script>

<style lang="less" scoped>
  @import "../../../../static/base/base";
.my{
  //头部信息
  .my_header{
    width: 100%;
    height:200/@base;
    background-color: #fff;
    margin-top: 37/@base;
    &>div:nth-child(1){
      padding-top: 25/@base;

      &>div:nth-child(1){
        padding-left: 35/@base;
        img{
          width: 80/@base;
          height: 80/@base;
        }
      }
      &>div:nth-child(2){
        padding-left: 35/@base;
        padding-top: 15/@base;
      }

    }
    &>div:nth-child(2){

      buttom{
        top:0;
        right:10px;
      }
    }
  }
  //列表
  .my_menu{
    width:100%;
    height:300/@base;
    margin-top: 37/@base;
    background-color: #fff;
  }
  //自建歌单
  .my_songSheet{
    width: 100%;
    height:300/@base;
    margin-top: 37/@base;
    background-color: #fff;
  }
  //为你推荐
  .my_recommend{
    width: 100%;
    height:400/@base;
    margin-top: 37/@base;
    background-color: #fff;
  }
}
</style>

