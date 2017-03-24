<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Radio单选框
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
            <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>禁用状态</span>
            </div>
            <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
            <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>单选框组</span>
            </div>
            <el-radio-group v-model="radio2">
                <el-radio :label="3">备选项</el-radio>
                <el-radio :label="6">备选项</el-radio>
                <el-radio :label="9">备选项</el-radio>
            </el-radio-group>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>按钮样式</span>
            </div>
            <el-radio-group v-model="radio3">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州" :disabled="true"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-card>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                radio: '1',
                radio2: 3,
                radio3: ''
            }
        },

    }
</script>
