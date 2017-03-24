<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Form 表单
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>典型表单</span>
            </div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                        style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                                        style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>行内表单</span>
            </div>
            <el-form :inline="true" :model="form" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="form.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="form.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>顶部对齐</span>
            </div>
            <el-form label-position="top" :model="form" class="demo-form-stacked">
                <el-form-item label="名称">
                    <el-input v-model="form.name1"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-input v-model="form.region1"></el-input>
                </el-form-item>
                <el-form-item label="活动展开形式">
                    <el-input v-model="form.type1"></el-input>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>右对齐</span>
            </div>
            <el-form :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name2"></el-input>
                </el-form-item>
                <el-form-item label="推广地">
                    <el-input v-model="form.region2"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="form.type2"></el-input>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>左对齐</span>
            </div>
            <el-form :model="form" label-position="left" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name3"></el-input>
                </el-form-item>
                <el-form-item label="推广地">
                    <el-input v-model="form.region3"></el-input>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input v-model="form.type3"></el-input>
                </el-form-item>
            </el-form>

        </el-card>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>表单验证</span>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="活动名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                            style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2"
                                            style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                    <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit">立即创建</el-button>
                    <el-button @click="handleReset">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>自定义校验规则</span>
            </div>
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model="ruleForm2.age"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit2">提交</el-button>
                    <el-button @click="handleReset2">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>动态增减表单项</span>
            </div>
            <el-form :model="dynamicForm" :rules="dynamicRule" ref="dynamicForm" label-width="100px"
                     class="demo-dynamic">
                <el-form-item prop="email" label="邮箱">
                    <el-input v-model="dynamicForm.email"></el-input>
                </el-form-item>
                <el-form-item
                        v-for="(domain, index) in dynamicForm.domains"
                        :label="'域名' + index"
                        :key="domain.key"
                        :prop="'domains:' + index"
                        :rules="{
                          type: 'object', required: true,
                          fields: {
                            value: { required: true, message: '域名不能为空', trigger: 'blur' }
                          }
                        }">
                    <el-input v-model="domain.value"></el-input>
                    <el-button @click.native.prevent="removeDomain(domain)">删除</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit3">提交</el-button>
                    <el-button @click="addDomain">新增域名</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                var age = parseInt(value, 10);

                setTimeout(() => {
                    if (!Number.isInteger(age)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (age < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    user: '',
                    region: '',
                    name1: '',
                    region1: '',
                    type1: '',
                    name2: '',
                    region2: '',
                    type2: '',
                    name3: '',
                    region3: '',
                    type3: '',
                },
                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    region: [
                        {required: true, message: '请选择活动区域', trigger: 'change'}
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    date2: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    type: [
                        {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
                    ],
                    resource: [
                        {required: true, message: '请选择活动资源', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: '请填写活动形式', trigger: 'blur'}
                    ]
                },
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules2: {
                    pass: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {validator: validatePass}
                    ],
                    checkPass: [
                        {required: true, message: '请再次输入密码', trigger: 'blur'},
                        {validator: validatePass2}
                    ],
                    age: [
                        {required: true, message: '请填写年龄', trigger: 'blur'},
                        {validator: checkAge, trigger: 'change'}
                    ]
                },
                dynamicForm: {
                    domains: [{
                        key: 1,
                        value: ''
                    }],
                    email: ''
                },
                dynamicRule: {
                    email: [
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
                    ]
                }
            };
        },
        methods: {
            onSubmit()
            {
                console.log('submit!');
            },
            handleReset()
            {
                this.$refs.ruleForm.resetFields();
            },
            handleSubmit(ev)
            {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleReset2() {
                this.$refs.ruleForm2.resetFields();
            },
            handleSubmit2(ev) {
                this.$refs.ruleForm2.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleSubmit3(ev) {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            removeDomain(item) {
                var index = this.dynamicForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicForm.domains.push({
                    key: this.dynamicForm.domains.length,
                    value: ''
                });
            }
        }
    }
</script>
