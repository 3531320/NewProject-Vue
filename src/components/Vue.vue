<template>
  <div >
     <p>{{data | formatDate}}</p>
     <p @click="ad">点击事件</p>
     <p v-on:click="aaa">省略点击</p>
     <a v-bind:href="url">链接</a>
      <br>
      <a :href="url">省略链接</a>
    <hr>
    <p v-if="num === 1">num等于1的时候显示</p>
    <p v-else-if="num === 2">num等于2的时候显示</p>
    <p v-else>否则显示改行</p>
    <br>
    <span v-for="a in 10">{{a}}</span>
    <input @input="handleInput" type="text" placeholder="请输入，，，">
    <input  type="text" v-model="value">
       {{message}}-{{value}}
    <hr>
    <p>购物车</p>
    <template v-if="list.length">
      <table>
        <thead>
        <tr>
          <th></th>
          <th>商品名称</th>
          <th>商品单价</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list">
          <td>{{index +1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button @click="handleReduce(index)" :disabled="item.count === 1">-</button>
            {{item.count}}
            <button @click="handleAdd(index)">+</button>
          </td>
          <td>
            <button @click="handleRemove(index)">移除</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div>总价：￥{{totalPrice}}</div>
    </template>
    <div v-else>购物车为空</div>



  </div>
</template>
<script>

  var padDate = function (value) {
    return value < 10 ?'0' + value :value
  };
  export default {
    data(){
     return{
       data:new Date(),
       url:'https://www.github.com',
       num:1,
       list:[
         {id:1,name:'iPhone 7',price:6188,count:1},
         {id:2,name:'iPad Pro',price:5888,count:1},
         {id:3,name:'MacBook Pro',price:23411,count:1}
       ],
       value:"",
       message:'',
     }
    },
    computed:{
      totalPrice:function () {
        var total = 0;
        this.list.forEach(function (item) {
          total += item.price * item.count
        });
        return total.toString().replace(/\B(?=(\d{3}) + $)/g,'，')
      }
    },

    filters:{
      formatDate:function (value) {
        var date = new Date(value);
        var year = date.getFullYear();
        var month = padDate(date.getMonth() +1);
        var day = padDate(date.getDate());
        var hours = padDate(date.getHours());
        var minutes = padDate(date.getMinutes());
        var second  =padDate(date.getSeconds());
        return year + '年' +month+"月"+day +"日" + hours+ '小时' +minutes+ '分' +second +'秒';
      }
    },
    methods:{
      ad:function () {
       alert("sasd")
      },
      aaa:function () {
        console.log("aaaaa")
      },
      handleReduce:function (index) {
        if(this.list[index].count ===1){
          return
        }
        this.list[index].count--;
      },
      handleAdd:function (index) {
        this.list[index].count++;
      },
      handleRemove:function (index) {
        this.list.splice(index,1)
      },
      handleInput:function (e) {
        this.message = e.target.value
      }
    }

  }
</script>
<style scoped >
  table{
    border:1px solid #e9dc06;
    border-collapse : collapse;
    border-spacing:0;
    empty-cells:show;
  }
  th,td{
    padding:8px 16px;
    border:1px solid #ae1de9;
    text-align : left;
  }
  th{
    background : #71f783;
    color : #69090f;
    white-space : nowrap;
  }
</style>
