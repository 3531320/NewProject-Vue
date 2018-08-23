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
       axios.get('/a/api/news/list')
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
