<template>
<div>
  <ul v-for="item in data" :key="item._id">
    <li>
      <span> {{item.title}}</span>
      <div> {{item.content}}</div>
    </li>
  </ul>
</div>
</template>
<script>
  import axios from 'axios'
  export  default {
    data(){
      return {
        data:[]
      }
    },
    created(){
      var _this = this;
      this.getList();
    },
    methods:{
      getList:function () {
        var _this = this;
        axios.get('http://10.0.0.110:3000/api/news/list')
             .then(function (response) {
             _this.data = response.data.news;
             })
             .catch(function (error) {
               console.log(error);
             });
      }
    }
  }
</script>
