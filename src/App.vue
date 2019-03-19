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
    this.$http.get('/api/user').then((response)=>{
      response = response.body;
      if(response.errno = ERR_OK){
        this.user = response.data;
      }
    });  
    },

}
</script>

<style>
.menu, .el-menu {
  z-index: 11;
    height: 100%;
  }

  .container {
    padding-top: 80px;
    height: 100%;
  }
</style>
