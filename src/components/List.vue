<template>
     <section class="users">
        <div class="page-header">
        <h2> 用户</h2>
        </div>
        <div class="row">
        <div role="tabpanel">
            <div class="col-ms-12" style="margin-bottom: 20px">
            <ul class="nav nav-tabs" role="tablist">
                <li class="active">
                    <a href="#userList" aria-controls="userList" role="tab" data-toggle="tab">用户列表</a>
                </li>
                <li >
                    <a href="#createUser" aria-controls="createUser" role="tab" data-toggle="tab">创建用户</a>
                </li>
                </ul>
            </div>
            <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id=userList>
             <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                      <h3 class="panel-title">浏览用户</h3>
                    </div>
                </div>
                <div class="panel-body">
                  <ul class="nav nav-tabs">
                      <li class="active"><a href="#newest" data-toggle="tab">现用的</a></li>
                      <li><a href="#search" data-toggle="tab">搜索</a></li>
                  </ul>
                  <div class="tab-content">
                      <div class="tab-pane active" id="newest">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th>昵称</th>
                              <th>fullname</th>
                              <th>prid</th>
                              <th>created</th>
                              <th>email</th>
                            </tr>
                          </thead>
                          <tbody v-for="item in users" :key="item._id">
                              <tr>
                                <td class="nowrap">
                                <router-link :to="{path:'details',query:{id:item._id}}">
                                  <p class="title">{{item.fullname}}</p>
                                </router-link>
                                </td>
                                <td class="nowrap">{{item.fullname}}</td>
                                <td class="nowrap">{{item.prid}}</td>
                                <td class="nowrap">{{item.created}}</td>
                                <td class="nowrap">{{item.email}}</td>
                              </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="tab-pane" id="search"></div>
                  </div>
                </div>
               </div>
           </div>
            <div role="tabpanel" class="tab-pane" id="createUser">
               <div class="col-md-12">

               </div>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import $ from "jquery";
import axios from 'axios'
export default {
  name: "UserList",
  data() {
    return {
      users: []
    };
  },
  created() {
    var _this = this;
    this.getList();
    /* $.ajax({
      url:"http://avatarz-d-1286429508.cn-north-1.elb.amazonaws.com.cn/api/users",
      type: "get",
      success(response) {
        _this.users = response.users;
        console.log(response)
      },
      error(error) {
        console.log(error);
      }
    }); */
  },
  methods:{
    getList:function(){
       var _this = this;
       axios.get('http://avatarz-d-1286429508.cn-north-1.elb.amazonaws.com.cn/api/users')
            .then(function (response) {
               _this.users = response.data.users;
             })
            .catch(function (error) {
               console.log(error);
             });
    }
  }
};
</script>
<style scoped >

</style>
