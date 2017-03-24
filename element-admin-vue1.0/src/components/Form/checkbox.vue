<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Checkbox多选框
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-checkbox v-model="checked" checked>备选项</el-checkbox>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>禁用状态</span>
            </div>
            <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
            <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>多选框组</span>
            </div>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </el-card>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                checked: true,
                checked1: false,
                checked2: true,
                checkList: ['选中且禁用','复选框 A']
            }
        },

    }
</script>
