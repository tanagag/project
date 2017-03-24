<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Slider 滑块
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>默认</span>
            </div>
            <el-slider v-model="value1"></el-slider>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>自定义初始值</span>
            </div>
            <el-slider v-model="value2"></el-slider>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>禁用</span>
            </div>
            <el-slider v-model="value3" disabled></el-slider>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>不显示间断点</span>
            </div>
            <el-slider
                    v-model="value4"
                    :step="10">
            </el-slider>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>显示间断点</span>
            </div>
            <el-slider
                    v-model="value5"
                    :step="10"
                    show-stops>
            </el-slider>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>带有输入框</span>
            </div>
            <el-slider
                    v-model="value6"
                    show-input>
            </el-slider>
        </el-card>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                value1: 0,
                value2: 50,
                value3: 42,
                value4: 0,
                value5: 0,
                value6: 0
            }
        }
    }
</script>
<style>

</style>