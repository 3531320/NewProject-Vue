<template>
  <div class="app">
     <!-- <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'he'}">布局</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'button'}">按钮</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'select'}">选择器</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'upload'}">上传</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{path:'NavMenu'}">导航菜单</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'text'}">练习</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'text1'}">练习1-调查文件HTML5小应用</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path:'new'}">新闻列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>-->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
