<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Message 消息提示
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基本用法</span>
            </div>
            <el-button :plain="true" @click.native="open">打开消息提示</el-button>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>不同状态</span>
            </div>
            <el-button :plain="true" @click.native="open2">成功</el-button>
            <el-button :plain="true" @click.native="open3">警告</el-button>
            <el-button :plain="true" @click.native="open">消息</el-button>
            <el-button :plain="true" @click.native="open4">错误</el-button>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>可关闭</span>
            </div>
            <el-button :plain="true" @click.native="open5">消息</el-button>
            <el-button :plain="true" @click.native="open6">成功</el-button>
            <el-button :plain="true" @click.native="open7">警告</el-button>
            <el-button :plain="true" @click.native="open8">错误</el-button>
        </el-card>
    </div>
</template>
<script>
    export default{
        methods: {
            open() {
                this.$message('这是一条消息提示');
            },
            open2() {
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },
            open3() {
                this.$message({
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },
            open4() {
                this.$message.error('错了哦，这是一条错误消息');
            },
            open5() {
                this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息'
                });
            },
            open6() {
                this.$message({
                    showClose: true,
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },
            open7() {
                this.$message({
                    showClose: true,
                    message: '错了哦，这是一条错误消息',
                    type: 'error'
                });
            },
            open8() {
                this.$message({
                    showClose: true,
                    message: '错了哦，这是一条错误消息',
                    type: 'error'
                });
            }
        }
    }
</script>
