<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Progress 进度条
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>线形进度条 — 百分比外显</span>
            </div>
            <el-progress :percentage="0"></el-progress>
            <el-progress :percentage="70"></el-progress>
            <el-progress :percentage="100" status="success"></el-progress>
            <el-progress :percentage="50" status="exception"></el-progress>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>线形进度条 — 百分比内显</span>
            </div>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>环形进度条</span>
            </div>
            <el-progress type="circle" :percentage="0"></el-progress>
            <el-progress type="circle" :percentage="25"></el-progress>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        </el-card>
    </div>
</template>
<script>
    export default{}
</script>
