<template>
    <div>
        <el-button  type="text" @click="open">消息提示this.$alert</el-button>
        <el-button :plain="true" @click="open1">消息</el-button>
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
        <el-button type="text" @click="open5">确认消息this.$confirm</el-button>
        <hr>
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
             multiple
            :limit="4"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <hr>
        <el-alert title="成功提交的文案" type="success"
          description="文字说明文字说明文字说明文字说明文字说明文字说明"
          show-icon></el-alert>
        <hr>
        <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
        </div>
        <hr>
        <el-table :data="tableDate" style="width:100%"  stripe>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="名字" width="180"></el-table-column>
            <el-table-column prop="address" label="地址" width="220"></el-table-column>
        </el-table>
        <hr>
        <p style="text-align: center;">80页-分页</p>
        <el-pagination background layout="prev,pager,next" :total="1000"></el-pagination>


    </div>
</template>
<script>

export default {
    data(){
        return {
            fileList:[{name:'logo.png',url:"/src/assets/logo.png"}],
            value1:null,
            tableDate:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },
    methods:{
        handleRemove(file,fileList){
          console.log(file, fileList);
        },
        handlePreview(file){
            console.log(file);
        },
        beforeRemove(file,fileList){
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        handleExceed(files,fileList){
          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        open1(){
            this.$message("这是一条消息提示")
        },
        open2(){
            this.$message({
                duration:1000, // 一秒就消失，默认3000，0为不会被自动关闭
                message:'恭喜你，这是一条成功消息',
                type:'success'
            })
        },
        open3(){
            this.$message({
                showClose: true,// 手动关闭
                message: '警告哦，这是一条警告消息',
                type: 'warning'
            });
        },
        open4(){
            this.$message({
                message: '警告哦，这是一条错误消息',
                type: 'error' 
            })
        },
        open(){
            this.$alert('这是一段内容', '标题名称',
            {
                confirmButtonText:'确定',
                callback:action =>{
                    this.$message({
                        type:'success',
                        message:'成功啊啊啊'
                    })
                }
            })
        },
        open5(){
            this.$confirm('是否继续删除？','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
            }).then( () => {
                this.$message({
                    type:'success',
                    message:'删除成功！'
                })
            }).catch( () => {
                this.$message({
                    type:"info",
                    message:"已取消删除"
                })
            })
        }
    }
    
}
</script>

