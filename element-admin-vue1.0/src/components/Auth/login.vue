<template>
    <el-row style="margin-top:100px">
      <el-col :span="8">&nbsp;</el-col>
        <el-col :span="8"><el-card class="box-card content-margin">
        <div slot="header" style="background:#417690">
            element-admin后台管理系统
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" >
            <el-form-item label="用户名:" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item style="text-align:center">
                <el-button type="primary" @click="onSubmit" style="background:#609ab6;border:none">登陆</el-button>
            </el-form-item>
        </el-form>
    </el-card></el-col>
        <el-col :span="8">&nbsp;</el-col>
    </el-row>

</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    password: '',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名 ', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            onSubmit() {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                         window.router.push({path: '/base/layout/'});
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style>
.el-card__header{
    padding:0px;
    border-bottom:1px solid #D3DCE6;
    box-sizing:border-box;
    line-height:3;
    background:#07b3c2;
    text-align:center;
    color:#fff;
}
</style>