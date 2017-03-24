<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    DatePicker 日期选择器
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>默认</span>
            </div>
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions0">
            </el-date-picker>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>带快捷选项</span>
            </div>
            <el-date-picker
                    v-model="value2"
                    align="right"
                    type="date"
                    placeholder="选择日期"
                    :picker-options="pickerOptions1">
            </el-date-picker>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>周</span>
            </div>
            <el-date-picker
                    v-model="value3"
                    type="week"
                    format="yyyy 第 WW 周"
                    placeholder="选择周">
            </el-date-picker>

        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>月</span>
            </div>
            <el-date-picker
                    v-model="value4"
                    type="month"
                    placeholder="选择月">
            </el-date-picker>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>年</span>
            </div>
            <el-date-picker
                    v-model="value5"
                    align="right"
                    type="year"
                    placeholder="选择年">
            </el-date-picker>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>选择日期范围-默认</span>
            </div>
            <el-date-picker
                    v-model="value6"
                    type="daterange"
                    placeholder="选择日期范围"
                    style="width: 220px">
            </el-date-picker>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>选择日期范围-带快捷选项</span>
            </div>
            <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    placeholder="选择日期范围"
                    :picker-options="pickerOptions2"
                    style="width: 220px">
            </el-date-picker>
        </el-card>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                value6: '',
                value7: ''
            };
        }
    }
</script>
<style>

</style>