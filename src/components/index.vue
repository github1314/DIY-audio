<template>
    <div class="index">
        <div class="index-header">
          <i class="iconfont icon-iconset0195"></i>
          <span>我的</span>
          <span>发现</span>
          <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="index-content"></div>
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
    .index-header{
      width: 100%;
      height: 80/@base;
      position: relative;
      text-align: center;
      line-height:80/@base;
      border-bottom: 1px solid #9FA2A0;
      &>i:nth-child(1){
        position: absolute;
        left: 25/@base;
        font-weight:bold;
        color: #000;
        font-size:28/@base;
      }
      &>span{
        font-size:28/@base;
      }
      &>i:last-child{
        position: absolute;
        right:25/@base;
        font-weight:bold;
        color: #000;
        font-size:28/@base;
      }
    }
    .index-content{
      width: 100%;
      height:300px;
    }
    .control_Bar{
      position:absolute;
      left:0;
      bottom:0;
    }
  }
</style>

