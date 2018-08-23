<template>
  <div class="app">
    <el-row>       
        <el-button type="success">跳转按钮</el-button>    
        <el-button type="danger"  plain>警告按钮</el-button>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" :loading="true" plain>加载中</el-button>  
        <hr>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <hr>
        <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group> 
    </el-row> 
    <br>
    <el-radio v-model="radio" label="1">单选框1</el-radio>
    <el-radio v-model="radio" label="2">单选框2</el-radio>
     <hr>
    <el-radio-group v-model="radio2">
      <el-radio :label="1">单选框1</el-radio>
      <el-radio :label="25">单选框2</el-radio>
      <el-radio :label="3">单选框3</el-radio>
    </el-radio-group>
    <hr >
    <!--选中一个全部选中-->
    <el-checkbox v-model="checked">全选</el-checkbox>
    <el-checkbox v-model="checked">复选框1</el-checkbox>
    <el-checkbox v-model="checked" disabled>复选框1</el-checkbox>
    <hr>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框1" border></el-checkbox>
      <el-checkbox label="复选框2"></el-checkbox>
      <el-checkbox label="复选框3" border></el-checkbox>
      <el-checkbox label="复选框4"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
    </el-checkbox-group>  
    <hr>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <hr>
    <el-checkbox-group  v-model="checkList">
     <el-checkbox-button label="复选框6" ></el-checkbox-button>
     <el-checkbox-button label="复选框7" ></el-checkbox-button>
    </el-checkbox-group>
    <hr>
    <el-input v-model="input" placeholder="文本输入框"   clearable></el-input>
    <el-input v-model="input1"  placeholder="禁用输入框" :disabled="true"></el-input>
    <el-input  placeholder="可清除内容"  clearable></el-input>
    <el-input type="textarea" :rows="2" placeholder="多行文本框" ></el-input>
    <el-input type="textarea" autosize  placeholder="多行文本框根据文本内容可以自动调整"></el-input>
    <p>复合型输入框</p>
    <div>
        <el-input placeholder="请输入内容" >
            <i slot="prepend">Http://</i >
        </el-input>
    </div>
    <br>
    <div>
         <el-input placeholder="请输入内容">
            <i slot="append">.com</i>
        </el-input>
    </div>
    <div style="margin-top: 15px;">
         <el-input placeholder="请输入内容" v-model="input5"  class="input-with-select">
              <el-select v-model="select"  slot="prepend" placeholder="请选择">
                <el-option label="请选择" value=""></el-option>
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
               </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
    </div>
    <el-input-number v-model="num1"  :min="1" :max="10" ></el-input-number>
    <el-input-number v-model="num2" :precision="3" :step="1" :max="10"></el-input-number>
    <el-input-number v-model="num3" controls-position="right"></el-input-number>

   </div>
</template>
<script>
export default {
 data(){
   return{
    
    radio:"",
    radio2:"",
    checked:"",
    checkList:['禁用'],
    checkAll:false,
    checkedCities:[],
    cities:['上海', '北京', '广州', '深圳'],
    isIndeterminate:true,
    input:"",
    input1:"",
    input5:"",
    select:"",
    num1:3,
    num2:1,
    num3:3
   }
 },
 methods:{
   handleCheckAllChange(val){
     this.checkedCities = val ? this.cities : [];
     this.isIndeterminate = false
   },
   handleCheckedCitiesChange(item){
     var length = item.length; //获取选中的个数
     this.checkAll = length === this.cities.length //相等则是true
     this.isIndeterminate = length > 0 && length <this.cities.length    
   }
 }
}
</script>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>



