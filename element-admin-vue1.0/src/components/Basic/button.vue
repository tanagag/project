<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Button按钮
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="text">文字按钮</el-button>
        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>禁用状态</span>
            </div>
            <el-button :plain="true" :disabled="true">主要按钮</el-button>
            <el-button type="primary" :disabled="true">主要按钮</el-button>
            <el-button type="text" :disabled="true">文字按钮</el-button>
        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>默认显示颜色</span>
            </div>
            <span class="wrapper">
                <el-button type="success">成功按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info">信息按钮</el-button>
            </span>
        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>hover 显示颜色</span>
            </div>
            <span class="wrapper">
                <el-button :plain="true" type="success">成功按钮</el-button>
                <el-button :plain="true" type="warning">警告按钮</el-button>
                <el-button :plain="true" type="danger">危险按钮</el-button>
                <el-button :plain="true" type="info">信息按钮</el-button>
              </span>
        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>图标按钮</span>
            </div>
            <el-button type="primary" icon="edit"></el-button>
            <el-button type="primary" icon="share"></el-button>
            <el-button type="primary" icon="delete"></el-button>
            <el-button type="primary" icon="search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>按钮组</span>
            </div>
            <el-button-group>
                <el-button type="primary" icon="arrow-left">上一页</el-button>
                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
            <el-button-group>
                <el-button type="primary" icon="edit"></el-button>
                <el-button type="primary" icon="share"></el-button>
                <el-button type="primary" icon="delete"></el-button>
            </el-button-group>
        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>不同尺寸</span>
            </div>
            <el-button type="primary" :loading="true">加载中</el-button>
        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>加载中</span>
            </div>
            <el-button type="primary" size="large">大型按钮</el-button>
            <el-button type="primary">正常按钮</el-button>
            <el-button type="primary" size="small">小型按钮</el-button>
            <el-button type="primary" size="mini">超小按钮</el-button>
        </el-card>
    </div>
</template>
<script>
    export default{}
</script>
<style>

</style>
