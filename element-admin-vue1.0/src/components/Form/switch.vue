<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Switch 开关
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-switch
                    v-model="value1"
                    on-text=""
                    off-text="">
            </el-switch>
            <el-switch
                    v-model="value2"
                    on-color="#13ce66"
                    off-color="#ff4949">
            </el-switch>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>禁用状态</span>
            </div>
            <el-switch
                    v-model="value3"
                    on-text=""
                    off-text=""
                    disabled>
            </el-switch>
            <el-switch
                    v-model="value3"
                    disabled>
            </el-switch>
        </el-card>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                value1: '',
                value2: '',
                value3: '',
            }
        }
    }
</script>
<style>

</style>