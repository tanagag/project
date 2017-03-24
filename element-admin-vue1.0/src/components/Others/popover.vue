<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Popover 弹出框
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-popover
                    ref="popover1"
                    placement="top-start"
                    title="标题"
                    width="200"
                    trigger="hover"
                    content="这是一段容,这是一段容,这是一段容,这是一段容。">
            </el-popover>

            <el-popover
                    ref="popover2"
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="click"
                    content="这是一段容,这是一段容,这是一段容,这是一段容。">
            </el-popover>

            <el-button v-popover:popover1>hover 激活</el-button>
            <el-button v-popover:popover2>click 激活</el-button>
            <el-popover
                    placement="right"
                    title="标题"
                    width="200"
                    trigger="focus"
                    content="这是一段容,这是一段容,这是一段容,这是一段容。">
                <el-button slot="reference">focus 激活</el-button>
            </el-popover>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>嵌套信息</span>
            </div>
            <el-popover
                    ref="popover4"
                    placement="right"
                    width="400"
                    trigger="click">
                <el-table :data="gridData">
                    <el-table-column width="150" property="date" label="日期"></el-table-column>
                    <el-table-column width="100" property="name" label="姓名"></el-table-column>
                    <el-table-column width="300" property="address" label="地址"></el-table-column>
                </el-table>
            </el-popover>
            <el-button v-popover:popover4>click 激活</el-button>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>嵌套操作</span>
            </div>
            <el-popover
                    ref="popover5"
                    placement="top"
                    width="160"
                    v-model="visible2">
                <p>这是一段内容这是一段内容确定删除吗？</p>
                <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click.native="visible2 = false">取消</el-button>
                    <el-button type="primary" size="mini" @click.native="visible2 = false">确定</el-button>
                </div>
            </el-popover>
            <el-button v-popover:popover5>删除</el-button>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                visible2: false
            };
        }
    }
</script>
