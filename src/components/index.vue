<template>
    <div class="index">
        <div class="index-header">
          <i class="iconfont icon-iconset0195"></i>
          <router-link to="my" tag="span" active-class="active">我的</router-link>
          <router-link to="find" tag="span" active-class="active">发现</router-link>
          <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="index-content">
          <div class="">
            <router-view></router-view>
          </div>
        </div>
        <control_Bar class="control_Bar"></control_Bar>
    </div>
</template>

<script>
    import control_Bar from '@/components/controlBar/control_Bar'
    export default {
        name: '',
        //数据
        data() {
            return {}
        },
        //计算属性
        computed: {},
        //组件
        components: {
          control_Bar
        },
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
  @import "../../static/base/base";
  .index{
    background-color: #F7F7F7;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .index-header{
      width: 100%;
      height: 80/@base;
      position: relative;
      /*top:0;*/
      /*left:0;*/
      text-align: center;
      line-height:80/@base;
      border-bottom: 1px solid #9FA2A0;

      .active{
        color: #ED3833;
      }
      &>i:nth-child(1){
        position: absolute;
        left: 25/@base;
        font-weight:bold;
        color: #000;
        font-size:35/@base;
      }
      &>span{
        font-size:28/@base;
      }
      &>i:last-child{
        position: absolute;
        right:25/@base;
        font-weight:bold;
        color: #000;
        font-size:45/@base;
      }
    }
    .index-content{
      width: 100%;
      height:100vh-(180/@base);
      flex-grow:1 ;
      overflow: hidden;
      &>div{
        width: 100%;
        height:100%;
        overflow: auto;
      }
    }
    .control_Bar{
      position:relative;
      /*left:0;*/
      /*bottom:0;*/
    }
  }
</style>

