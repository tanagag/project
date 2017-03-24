<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Dialog 对话框
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-button type="text" @click.native="dialogVisible = true">点击打开 Dialog</el-button>

            <el-dialog title="提示" v-model="dialogVisible" size="tiny">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click.native="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>自定义内容</span>
            </div>
            <el-button type="text" @click.native="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
            <el-dialog title="收货地址" v-model="dialogTableVisible">
                <el-table :data="gridData">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="200"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                </el-table>
            </el-dialog>

            <el-button type="text" @click.native="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

            <el-dialog title="收货地址" v-model="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click.native="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            };
        }
    }
</script>
