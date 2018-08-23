<template>
    <div style="padding-top:20px">
    <el-select v-model="value0" placeholder="请选择">
        <el-option v-for="item in options0" 
          :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
    <el-select v-model="value1" multiple>
        <el-option v-for="item in options0" :key="item.value" :label="item.label" :value="item.value"></el-option>
   </el-select>
   <hr>
   <el-select v-model="value2">
       <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value">
       <span style="float:left">{{item.label}}</span>
       <span style="float:right">{{item.value}}</span>
       </el-option>
   </el-select>
   <el-select v-model="value3">
       <el-option-group v-for="group in options1" :key="group.lable" :label="group.label">
           <el-option v-for="item in group.options" 
                :key="item.value" :label="item.lable" :value="item.value">
           </el-option>
       </el-option-group>
   </el-select>
   <!--级联选择器-->
    <hr>
    <div class="block">
        <span class="demonstration">默认click触发子菜单</span>
        <el-cascader :options="options2" :show-all-levels="true" >
        </el-cascader>
    </div>
    <el-switch v-model="value4" active-color="red" inactive-color="green">
    </el-switch>
    <el-slider v-model="value5" show-input> </el-slider>
    <div class="block">
    <p class="demonstration">默认</p>
    <el-date-picker
      v-model="value6"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>






    </div>
</template>
<script>
export default {
    data(){
        return {
           value6:"",
           value5:0,
           value4:true,
           selectedOptions:[],
           value0: '',
           value1:[],
           value2:"",
           value3:"",
           options0: [
                { value: '选项1', label: '黄金糕' }, 
                { value: '选项2', label: '双皮奶' }, 
                { value: '选项3',label: '蚵仔煎'},
                { value: '选项4',label: '龙须面'},
                { value: '选项5', label: '北京烤鸭'} ],
            cities: [
                { value: 'Beijing', label: '北京' },
                { value: 'Shanghai' ,label: '上海' }, 
                { value: 'Nanjing',  label: '南京' },
                { value: 'Chengdu', label: '成都'}, 
                { value: 'Shenzhen', label: '深圳'}, 
                {  value: 'Guangzhou', label: '广州'
            }],
            options1: [{
                label: '热门城市',
                options: [{
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Beijing',
                    label: '北京'
                }]
                }, {
                label: '城市名',
                options: [{
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }, {
                    value: 'Dalian',
                    label: '大连'
                }]
            }],
            options2:[{
                value:'zhinan',
                label:'指南',
                children:[{
                    value:'shejiyuanze',
                    label:'设计原则',
                    children:[
                        { value: 'yizhi', label: '一致' },
                        { value: 'fankui',label: '反馈'}, 
                        { value: 'xiaolv', label: '效率' }, 
                        { value: 'kekong', label: '可控' }
                    ]
                },{
                    value:'daohang',
                    label:'导航',
                    children:[
                        { value: 'cexiangdaohang', label: '侧向导航一致' },
                        { value: 'dingbudaohang',label: '顶部导航'}, 
                        { value: 'shagnmiandaohang', label: '上面导航' }, 
                        { value: 'xiamiandaohang', label: '下面导航' }
                    ]
                }]
            },
            {
                value:'zujian',
                label:'组件',
                children:[{
                    value:'basic',
                    label:'Basic',
                    children:[
                        { value: 'layout', label: 'Layout 布局一致' },
                        { value: 'color',label: 'color色彩'}, 
                        { value: 'typography', label: 'Typography 字体' }, 
                        { value: 'icon', label: 'Icon 图标' },
                        { value: 'button', label: 'Button 按钮' }
                    ]
                },{
                    value:'form',
                    label:'Form',
                    children:[
                        { value: 'radio', label: 'Radio 单选框' },
                        { value: 'checkbox',label: 'Checkbox 多选框'}, 
                        { value: 'input', label: 'Input 输入框' }, 
                        { value: 'input-number', label: 'InputNumber 计数器' }
                    ]
                }
                ]
            }]
        }
    }
}
</script>

