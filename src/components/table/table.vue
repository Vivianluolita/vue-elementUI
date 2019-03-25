<template>
  <section>
      <el-row>
        <el-col :span="24">
            <!-- 表单 -->
            <el-form :inline="true" :model="formInline" class="demo-form-inline"> 
                <el-form-item label="姓名">
                    <el-input v-model="formInline.user"></el-input>
                </el-form-item>
            </el-form>                  
          </el-col>
      </el-row>

  </section>
</template>
<script>
export default {
  
}
</script>
<style>

</style>
