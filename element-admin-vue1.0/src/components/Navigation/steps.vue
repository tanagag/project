<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Steps 步骤条
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-steps :space="100" :active="active" finish-status="success">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>

            <el-button style="margin-top: 12px;" @click.native="next">下一步</el-button>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>含状态步骤条</span>
            </div>
            <el-steps :space="100" :active="1" finish-status="success">
                <el-step title="已完成"></el-step>
                <el-step title="进行中"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>有描述的步骤条</span>
            </div>
            <el-steps :space="200" :active="1">
                <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
            </el-steps>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>带图标的步骤条</span>
            </div>
            <el-steps :space="100" :active="1">
                <el-step title="步骤 1" icon="edit"></el-step>
                <el-step title="步骤 2" icon="upload"></el-step>
                <el-step title="步骤 3" icon="picture"></el-step>
            </el-steps>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>竖式步骤条</span>
            </div>
            <el-steps :space="100" direction="vertical" :active="1">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: 0
            };
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }
</script>
