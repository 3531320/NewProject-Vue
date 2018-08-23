<template>
  <div>
    <div v-show="a1">
      <el-card class="my-card" >
        <p>1.请问您的性别是：</p>
        <input type="radio" class="radio1" v-model="radio1" value="boy" >男
        <input type="radio" class="radio1" v-model="radio1" value="girl" >女
        <input type="radio" class="radio1" v-model="radio1" value="baomi" >保密
        <br>
        <el-button @click="next()" type="success" class="button1">下一步</el-button>

        <el-button v-if="reset1" @click="reset()" type="info" class="reset1">重置</el-button>

        <el-button v-else disabled type="info" class="reset1">重置</el-button>

      </el-card>
    </div>
    <div v-show="a2">
      <el-card class="my-card" >
        <p>2.请选择您的兴趣爱好：</p>
        <input type="checkbox" value="book" v-model="checkedNames">看书
        <br>
        <input type="checkbox" value="swimming" v-model="checkedNames">游泳
        <br>
        <input type="checkbox" value="run" v-model="checkedNames">跑步
        <br>
        <input type="checkbox" value="movie" v-model="checkedNames">看电影
        <br>
        <input type="checkbox" value="music" v-model="checkedNames" >听音乐
        <br>
        <el-button @click="next1()" type="warning" class="button2">下一步</el-button>
        <el-button @click="pre1()" type="success" class="button2">上一步</el-button>
        <el-button  @click="reset()" type="info" class="button2">重置</el-button>
      </el-card>
    </div>
    <div v-show="a3">
      <el-card class="my-card" >
        <p>3.请介绍一下自己：</p>
        <textarea  class="texts"  v-model="message" placeholder="不少于100字"></textarea>
        <br>
        <el-button @click="submit()" type="warning" class="button2">提交</el-button>
        <el-button @click="pre2()" type="success" class="button2">上一步</el-button>
        <el-button  @click="reset()" type="info" class="button2">重置</el-button>
      </el-card>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        radio1:'',
        checkbox1:[],
        a1:true,
        a2:false,
        a3:false,
        reset1:true,
        checkedNames:[],
        message:''
      }
    },
    methods:{
      next:function () {
        if(this.radio1){
          this.a1 = false;
          this.a2 = true;
        }else {
          alert("请选择您的性别")
        }
      },
      reset:function () {
        this.radio1 ='';
        this.checkedNames =[];
        this.message = ''
      },
      pre:function () {
        this.a1 = true;
        this.a2 = false;
      },
      pre1:function () {
        this.a1 = true;
        this.a2 = false;
      },
      pre2:function () {
        this.a2 = true;
        this.a3 = false;
      },
      next1:function () {
        if(this.checkedNames.length >=2 && this.checkedNames.length <=3){
          this.a2 = false;
          this.a3 = true;
        }else {
          alert("请选择，最少两项，最多三项")
        }

      },
      submit:function () {
        if(this.message.length  > 100){
          alert("提交成功")
        }else {
          alert("文字不少于100")
        }
      }

    }
  }
</script>
<style scoped>
  .my-card{
    width: 310px;
    height: 400px
  }
  .radio1{
    margin-right : 5px;
  }
  .button1{
    position: relative;
    top: 270px;
  }
  .reset1{
    position: relative;
    top: 270px;
    float: right;
  }
  .button2{
    position: relative;
    top: 170px;
  }
  .texts{
    width: 260px;
    height: 86px;
  }
</style>
