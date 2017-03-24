<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    NavMenu 导航菜单
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>顶栏--dark</span>
            </div>
            <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">订单管理</el-menu-item>
            </el-menu>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>顶栏--light</span>
            </div>
            <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">订单管理</el-menu-item>
            </el-menu>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>侧栏--带 icon</span>
            </div>
            <el-menu default-active="2" class="el-menu-vertical-demo" >
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                    <el-menu-item-group title="分组一">
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
            </el-menu>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>侧栏--不带 icon</span>
            </div>

            <el-menu default-active="2" class="el-menu-vertical-demo"
                     theme="dark">
                <el-submenu index="1">
                    <template slot="title">导航一</template>
                    <el-menu-item-group title="分组一">
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">导航二</el-menu-item>
                <el-menu-item index="3">导航三</el-menu-item>
            </el-menu>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>侧栏--分组</span>
            </div>
            <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
                <el-menu-item-group title="分组一">
                    <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
                    <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组二">
                    <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
                    <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </el-card>
    </div>
</template>
<script>
    export default {
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            methods: {
                handleOpen(key, keyPath) {
                    console.log(key, keyPath);
                },
                handleClose(key, keyPath) {
                    console.log(key, keyPath);
                }
            }
        }
    }
</script>
