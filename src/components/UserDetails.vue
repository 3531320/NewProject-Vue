<template>
    <section class="user-detail">                        
        <div class="page-header">
            <h2>{{model.fullname}}</h2>
        </div>  
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              
              <div class="panel panel-default">
                  <div class="panel-heading">
                      <h3 class="panel-title">用户信息</h3>
                  </div>
              </div>
              <div class="panel-body">
                <div class="row">
                    <form role="form" >
                      <!-- <div class="col-md-6 col-sm-12">
                        <img src="../assets/user.png" class="img-thumbnail center-block img-responsive">
                      </div> -->
                      <div class="col-md-3 col-sm-6">
                          <div class="form-group">
                          <label for="fullname">昵称</label>
                          <!--  条件渲染
                            <p v-if="!model.username">{{model.username}}</p>
                                 <p v-else>aaaa</p>
                            -->
                            <p>{{model.username}}</p>                    
                          </div>
                          <div class="form-group">
                              <label for="username">姓名</label>
                              <p>{{model.fullname}}</p>
                          </div>
                          <div class="form-group">
                              <label for="email">邮件地址</label>
                              <p>{{model.email}}</p>
                          </div>                 
                          <div class="form-group">
                              <label for="email">登录号</label>
                              <p>{{model.prid}}</p>
                          </div>                  
                          <div class="form-group ">
                              <label>用户状态</label>
                              <select v-model="model.status">
                                  <option v-for="item in status" :key="item.value" v-bind:value='item.value'>{{item.name}}</option>
                              </select>                    
                          </div>
                      </div>
                      <div class="col-md-3 col-sm-6">                                                
                        <div class="form-group ">
                            <label>培训师</label>
                            <select v-model="model.trainer">
                                <option v-for="item in admin" :key="item.value" v-bind:value='item.value'>{{item.name}}</option>
                            </select>  
                        </div>
                        <div class="form-group ">
                                <label>管理员</label>
                                <select v-model="model.cmsAccess">
                                    <option v-for="item in admin" :key="item.value" v-bind:value='item.value'>{{item.name}}</option>
                                </select>  
                            </div>
                        <div class="form-group ">
                                <label>AZU管理员</label>
                                <select v-model="model.angelAdmin">
                                    <option v-for="item in admin" :key="item.value" v-bind:value='item.value'>{{item.name}}</option>
                                </select>  
                            </div>
                        <div class="form-group ">
                                <label>L1 Support</label>
                                <select v-model="model.l1Admin">
                                    <option v-for="item in admin" :key="item.value" v-bind:value='item.value'>{{item.name}}</option>
                                </select>  
                            </div>
                        <div class="form-group ">
                            <label>360管理者</label>
                            <select v-model="model.evaAdmin">
                                <option v-for="item in admin" :key="item.value" v-bind:value='item.value'>{{item.name}}</option>
                            </select>  
                        </div>
                      </div>
                      <div class="col-md-12 col-sm-12">
                          
                      </div>
                    </form>
                </div>
              </div>
            </div>     
        </div>
   </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      model: Object,
      status: [{ name: "正常", value: "1" }, { name: "禁用", value: "0" }],
      admin: [{ name: "是", value: true }, { name: "否", value: false }]
    };
  },
  created() {
    var _this = this;
    var id = this.$route.query.id;
    /* $.ajax({
      url:"http://avatarz-d-1286429508.cn-north-1.elb.amazonaws.com.cn/api/users/"+id,
      type: "get",
      success(response) {
         _this.model = response.user;
     },
      error(error) {
        console.log(error);
      }
    }); */
     axios.get('http://avatarz-d-1286429508.cn-north-1.elb.amazonaws.com.cn/api/users/' +id)
             .then(function (response) {
               _this.model = response.data.user;
             })
             .catch(function (error) {
               console.log(error);
             });
  }
};
</script>
<style lang="sass" scoped>

</style>


