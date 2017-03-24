<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Tree 树形控件
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>可选择</span>
            </div>
            <el-tree
                    :data="regions"
                    :props="props"
                    :load="loadNode"
                    lazy
                    show-checkbox
                    @check-change="handleCheckChange">
            </el-tree>
        </el-card>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1'
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1'
                    }, {
                        label: '二级 2-2'
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1'
                    }, {
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                regions: [{
                    'name': 'region1'
                }, {
                    'name': 'region2'
                }],
                props: {
                    label: 'name',
                    children: 'zones'
                },
                count: 1
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            handleNodeClick(data) {
                console.log(data);
            },
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{name: 'region1'}, {name: 'region2'}]);
                }
                if (node.level > 3) return resolve([]);

                var hasChild;
                if (node.data.name === 'region1') {
                    hasChild = true;
                } else if (node.data.name === 'region2') {
                    hasChild = false;
                } else {
                    hasChild = Math.random() > 0.5;
                }

                setTimeout(() => {
                    var data;
                    if (hasChild) {
                        data = [{
                            name: 'zone' + this.count++
                        }, {
                            name: 'zone' + this.count++
                        }];
                    } else {
                        data = [];
                    }

                    resolve(data);
                }, 500);
            }
        }
    };
</script>
