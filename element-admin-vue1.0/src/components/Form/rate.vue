<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Rate 评分
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>默认不区分颜色</span>
            </div>
            <el-rate v-model="value1"></el-rate>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>区分颜色</span>
            </div>
            <el-rate
                    v-model="value2"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>辅助文字</span>
            </div>
            <el-rate
                    v-model="value3"
                    show-text>
            </el-rate>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>其它 icon</span>
            </div>
            <el-rate
                    v-model="value4"
                    :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
                    void-icon-class="icon-rate-face-off"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>只读</span>
            </div>
            <el-rate
                    v-model="value5"
                    disabled
                    show-text
                    text-color="#ff9900"
                    text-template="{value}">
            </el-rate>

        </el-card>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                value5: 3.7
            }
        },

    }
</script>
