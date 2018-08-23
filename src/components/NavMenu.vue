<template>
    <div>
        <el-menu :default-active="activeIndex"  class="el-menu-demo" mode="horizontal" @select="handelSelect"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <hr>
        <el-tabs v-model="activeName2" type="card" @tab-click="handelClick">
            <el-tab-pane label="用户管理" name="first">用户2管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置3管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色4管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务5补偿</el-tab-pane>
        </el-tabs>
        <hr>
        <el-steps :active="active" finish-status="success">
            <el-step title="步骤1"></el-step>
            <el-step title="步骤2"></el-step>
            <el-step title="步骤3"></el-step>
        </el-steps>
        <el-button style="margin-top:12px" @click="next">下一步</el-button>
        <hr>
        <div class="box">
            <div class="top">
                <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                <el-button>上左</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                <el-button>上边</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                <el-button>上右</el-button>
                </el-tooltip>
            </div>
            <div class="left">
                <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                <el-button>左上</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
                <el-button>左边</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                <el-button>左下</el-button>
                </el-tooltip>
            </div>
            <div class="right">
                <el-tooltip class="item" effect="dark" placement="right-start" content="右上提示文字">
                    <el-button>右上</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" placement="right" content="右边提示文字">
                    <el-button>右边</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" placement="right-end" content="右下提示文字">
                    <el-button>右下</el-button>
                </el-tooltip>
            </div>
             <div class="bottom">
                <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                <el-button>下左</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                <el-button>下边</el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                <el-button>下右</el-button>
                </el-tooltip>
            </div>
        </div>
      <hr>
      <el-popover placement="top-start" title="标题" width="200" trigger="hover"
      content="这是一段内容。。。">
          <el-button slot="reference">hover激活</el-button>
      </el-popover>
      <el-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item1">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
      <hr>
      <div class="block">
        <span class="">默认hover指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{item}}</h3>
          </el-carousel-item>
        </el-carousel>
        <span class="">卡片化</span>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{item}}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <hr>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="一致性consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>

    </div>
</template>
<script>
export default {
    data(){
        return {
            activeIndex:'1',
            activeName2:'first',
            active:0,
            activeNames:['1']
        }
    },
    methods:{
        handelSelect(key,keyPath){
           // console.log(key,keyPath)
        },
        handelClick(tab){
         // console.log(tab.label)
        },
        next(){
            if(this.active ++ >2) {
                this.active  = 0
            }
        },
        handleChange(val) {

        }
    }
}
</script>
<style>
      .text{
        font-size :14px
      }
      .item1 {
        padding: 18px 0;
      }

      .box-card {
        width: 480px;
      }
      .el-carousel__item h3 {
        color: #060606;
        font-size: 20px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }
      .el-carousel__item:nth-child(even) {
        background-color: #19fff8;
      }
      .el-carousel__item:nth-child(odd) {
        background-color: #e60dbc;
      }
</style>

