<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    InputNumber计数器
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>禁用状态</span>
            </div>
            <el-input-number v-model="num2" :disabled="true"></el-input-number>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>步数</span>
            </div>
            <el-input-number v-model="num3" :step="2"></el-input-number>
        </el-card>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                num1: 1,
                num2: 1,
                num3: 5,
            }
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        },
    }
</script>
<style>

</style>