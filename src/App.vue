<template>
  <div>
    <v-header :user="user"></v-header>  
    <el-row class="container">
      <el-col :span="4" class="menu">
        <el-menu default-active="/form" :router="true">
          <el-menu-item index="/form">form</el-menu-item>
          <el-menu-item index="/table">table</el-menu-item>
        </el-menu>
      </el-col>
      <el-cow :span="20"></el-cow>
    </el-row>
    <!-- <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">
          商品
        </router-link>
        <div class="tab-item">
        <router-link to="/ratings">
          评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">
          商家
        </router-link>
      </div>
      </div>
    </div> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
import header from './components/header/header.vue';
//const ERR_OK = 0;
export default {
  data () {
    return {
      user: {}
    }
  },
  components:{
    'v-header':header
  },
  created(){
    var appData = require('../data.json');
    this.user = appData.user;
    //为了github pages，原接口改为本地数据
    this.$http.get('/api/user2').then((response)=>{
      response = response.body;
      if(response.errno = ERR_OK){
        this.user = response.data;
      }
    });  
    this.$http.get('/api/user3').then((response) => {
      console.log(response);
      console.log(response.ok);
      response = response.body;
      if(response.errno === ERR_OK){
        this.user = response.data;
      }
    })
  },

}
</script>

<style>
html, body,#app{
    height: 100%;
  }
  body{
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  }
  .menu, .el-menu {
    height: 100%;
  }
  .container {
    padding-top: 80px;
    height: 100%;
  }
  .content{
    padding: 20px;
  }
  /* fa图标右侧需要流出空白 elementUI图标已自带样式 */
  i.fa{
    vertical-align: baseline;
    margin-right: 10px;
  }
</style>
