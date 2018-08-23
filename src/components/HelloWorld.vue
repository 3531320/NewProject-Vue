<template>
 <div>
     <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">wdw</div></el-col>
      </el-row>    
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple">11</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-right">33</div></el-col>
      </el-row>    
      <el-row>
        <el-col :span="8"><div class="grid-content" style="background:#009977">23</div></el-col>
        <el-col :span="8"><div class="grid-content" style="background:green">13</div></el-col>
        <el-col :span="8"><div class="grid-content" style="background:#ff3387">433</div></el-col>
      </el-row>  
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content" style="background:#662211">23</div></el-col>
        <el-col :span="8"><div class="grid-content" style="background:green">13</div></el-col>
        <el-col :span="8"><div class="grid-content" style="background:yellow">433</div></el-col>
      </el-row>      
       <el-row :gutter="20">
         <el-col :span="8"><div class="grid-content" style="background:#009977">23</div></el-col>
         <el-col :span="8"><div class="grid-content" style="background:red">233</div></el-col>
         <el-col :span="3" :offset="4"><div class="grid-content" style="background:yellow">433</div></el-col>
       </el-row>  
      <el-row type="flex" justify="start">
         <el-col :span="6"><div class="grid-content" style="background:#009977">23</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:red">233</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:yellow">433</div></el-col>
       </el-row>

      <el-row type="flex" justify="center">
         <el-col :span="6"><div class="grid-content" style="background:#009977">23</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:red">233</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:yellow">433</div></el-col>
       </el-row>

      <el-row type="flex" justify="end">
         <el-col :span="6"><div class="grid-content" style="background:#009977">23</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:red">233</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:yellow">433</div></el-col>
       </el-row>

      <el-row type="flex" justify="space-around">
         <el-col :span="6"><div class="grid-content" style="background:#009977">23</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:red">233</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:yellow">433</div></el-col>
       </el-row>
         
      <el-row type="flex" justify="space-between">
         <el-col :span="6"><div class="grid-content" style="background:#009977">23</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:red">233</div></el-col>
         <el-col :span="6"><div class="grid-content" style="background:yellow">433</div></el-col>
       </el-row>
 </div>
</template>

<script>
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-row{
  margin-top:20px
}
.el-col{
  border-radius: 10px
}
  .grid-content{
    
    min-height: 36px
  }
  .bg-purple-dark {
    background: red
  } 
  .bg-purple{
    background: green
  }
  .bg-purple-right{
    background: yellow   
  }
  .row-bg{
    padding: 10px 0;
    background-color: #f9fafc
  }



</style>


