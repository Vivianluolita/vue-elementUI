<template>
  <div style="height:100%">
    <v-header :user="user"></v-header>  
    <el-row class="container">
      <el-col :span="4" class="menu">
        <el-menu default-active="/table" :router="true">
          <el-menu-item index="/table"><i class="fa fa-table"></i>Table</el-menu-item>
          <el-menu-item index="/form"><i class="fa fa-newspaper-o"></i>Form</el-menu-item>
          <el-submenu index = "1">
            <template slot="title">
              <i class="el-icon-menu"></i>第三方
            </template>
            <el-menu-item index="1-1"><i class="fa fa-line-chart"></i>Echarts</el-menu-item>
            <el-menu-item index="1-2"><i class="fa fa-plug"></i>其他</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-cow :span="20">
        <div>
          <div class="content">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </el-cow>
    </el-row>
  </div>

</template>

<script>
import header from './components/header/header.vue';
const ERR_OK = "000";
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
    //为了github pages，原接口改为本地数据
    this.$http.get('/api/user').then((response)=>{
      response = response.body;
      if(response.code = ERR_OK){
        this.user = response.datas;
      }
    });  
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
