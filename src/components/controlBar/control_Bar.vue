<template>
    <div class="control_Bar">
      <div class="l_f clearfix">
        <img src="http://temp.im/40x40/4CD964/000" alt="广告图片占位符">
      </div>
      <div class="l_f clearfix p_r">
        <p>记号</p>
        <p>陈逗逗</p>
        <i class="iconfont icon-bofang p_a"></i>
        <i class="iconfont icon-ai-rew-right p_a"></i>
        <i class="iconfont icon-menu p_a"></i>
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
  @import "../../../static/base/base";
.control_Bar{
  width: 100%;
  height:100/@base;
  border-top:1px solid #EEEFEE;
  background-color: #fff;
  &>div:nth-child(1){
    margin-left: 22/@base;
    margin-top: 8/@base;
  }
  &>div:nth-child(2){
    padding-left: 15/@base;
    &>p:nth-child(1){
      font-size: 25/@base;
      font-weight:900;
      margin-top: 14/@base;
    }
    &>p:nth-child(2){
      font-size: 12/@base;
      color: #828282;
    }
    &>i:nth-child(3){
      left:300/@base;
      top:30/@base;
      font-size: 40/@base;
    }
    &>i:nth-child(4){
      left:380/@base;
      top:30/@base;
      font-size: 40/@base;
    }
    &>i:nth-child(5){
      left:470/@base;
      top:37/@base;
      font-size: 25/@base;
    }
  }
}
</style>

