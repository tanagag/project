<template>
    <el-menu :default-active="default_key" :router="true" theme="dark" style="top:60px">
        <el-submenu index="basic">
            <template slot="title"><i class="el-icon-message"></i>Basic</template>
            <el-menu-item index="layout" :route="{path:'/basic/layout/'}">Layout 布局</el-menu-item>
            <el-menu-item index="button" :route="{path:'/basic/button/'}">Button 按钮</el-menu-item>
        </el-submenu>
        <el-submenu index="form">
            <template slot="title"><i class="el-icon-menu"></i>Form</template>
            <el-menu-item index="radio" :route="{path:'/form/radio/'}">Radio 单选框</el-menu-item>
            <el-menu-item index="checkbox" :route="{path:'/form/checkbox/'}">Checkbox 多选框</el-menu-item>
            <el-menu-item index="input" :route="{path:'/form/input/'}">Input 输入框</el-menu-item>
            <el-menu-item index="inputnumber" :route="{path:'/form/inputnumber/'}">InputNumber 计数器</el-menu-item>
            <el-menu-item index="select" :route="{path:'/form/select/'}">Select 选择器</el-menu-item>
            <el-menu-item index="switch" :route="{path:'/form/switch/'}">Switch 开关</el-menu-item>
            <el-menu-item index="slider" :route="{path:'/form/slider/'}">Slider 滑块</el-menu-item>
            <el-menu-item index="time" :route="{path:'/form/time/'}">TimePicker 时间选择器</el-menu-item>
            <el-menu-item index="date" :route="{path:'/form/date/'}">DatePicker 日期选择器</el-menu-item>
            <el-menu-item index="date_time" :route="{path:'/form/date_time/'}">DateTimePicker 日期时间选择器</el-menu-item>
            <el-menu-item index="upload" :route="{path:'/form/upload/'}">Upload 上传</el-menu-item>
            <el-menu-item index="rate" :route="{path:'/form/rate/'}">Rate 评分</el-menu-item>
            <el-menu-item index="form" :route="{path:'/form/form/'}">Form 表单</el-menu-item>
        </el-submenu>
        <el-submenu index="data">
            <template slot="title"><i class="el-icon-message"></i>Data</template>
            <el-menu-item index="table" :route="{path:'/data/table/'}">Table 表格</el-menu-item>
            <el-menu-item index="tag" :route="{path:'/data/tag/'}">Tag 标签</el-menu-item>
            <el-menu-item index="progress" :route="{path:'/data/progress/'}">Progress 进度条</el-menu-item>
            <el-menu-item index="tree" :route="{path:'/data/tree/'}">Tree 树形控件</el-menu-item>
            <el-menu-item index="pagination" :route="{path:'/data/pagination/'}">Pagination 分页</el-menu-item>
            <el-menu-item index="badge" :route="{path:'/data/badge/'}">Badge 标记</el-menu-item>
        </el-submenu>
        <el-submenu index="notice">
            <template slot="title"><i class="el-icon-message"></i>Notice</template>
            <el-menu-item index="alert" :route="{path:'/notice/alert/'}">Alert 警告</el-menu-item>
            <el-menu-item index="loading" :route="{path:'/notice/loading/'}">Loading 加载</el-menu-item>
            <el-menu-item index="message" :route="{path:'/notice/message/'}">Message 消息提示</el-menu-item>
            <el-menu-item index="message_box" :route="{path:'/notice/message_box/'}">MessageBox 弹框</el-menu-item>
            <el-menu-item index="notification" :route="{path:'/notice/notification/'}">Notification 通知</el-menu-item>
        </el-submenu>
        <el-submenu index="navigation">
            <template slot="title"><i class="el-icon-message"></i>Navigation</template>
            <el-menu-item index="nav_menu" :route="{path:'/navigation/nav_menu/'}">NavMenu 导航菜单</el-menu-item>
            <el-menu-item index="tabs" :route="{path:'/navigation/tabs/'}">Tabs 标签页</el-menu-item>
            <el-menu-item index="breadcrumb" :route="{path:'/navigation/breadcrumb/'}">Breadcrumb 面包屑</el-menu-item>
            <el-menu-item index="dropdown" :route="{path:'/navigation/dropdown/'}">Dropdown 下拉菜单</el-menu-item>
            <el-menu-item index="steps" :route="{path:'/navigation/steps/'}">Steps 步骤条</el-menu-item>
        </el-submenu>
        <el-submenu index="others">
            <template slot="title"><i class="el-icon-message"></i>Others</template>
            <el-menu-item index="dialog" :route="{path:'/others/dialog/'}">Dialog 对话框</el-menu-item>
            <el-menu-item index="tooltip" :route="{path:'/others/tooltip/'}">Tooltip 文字提示</el-menu-item>
            <el-menu-item index="popover" :route="{path:'/others/popover/'}">Popover 弹出框</el-menu-item>
            <el-menu-item index="card" :route="{path:'/others/card/'}">Card 卡片</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        created () {
            var array_url = window.location.hash.split("/");
            if (array_url.length == 2){
                return;
            }
            var active_key = array_url[array_url.length-2]
            this.default_key = active_key;
        },
        data() {
            return {
                default_key: "layout"
            };
        }
    };
</script>
