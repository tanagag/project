<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Tag 标签
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-tag>标签一</el-tag>
            <el-tag type="gray">标签二</el-tag>
            <el-tag type="primary">标签三</el-tag>
            <el-tag type="success">标签四</el-tag>
            <el-tag type="warning">标签五</el-tag>
            <el-tag type="danger">标签六</el-tag>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>可移除标签</span>
            </div>
            <el-tag
                    v-for="tag in tags"
                    :closable="true"
                    :type="tag.type"
                    :key="tag"
                    :close-transition="false"
                    @close="handleClose(tag)"
            >
                {{tag.name}}
            </el-tag>
        </el-card>

    </div>
</template>
<script>
    export default{
        data() {
            return {
                tags: [
                    {key: 1, name: '标签一', type: ''},
                    {key: 2, name: '标签二', type: 'gray'},
                    {key: 5, name: '标签三', type: 'primary'},
                    {key: 3, name: '标签四', type: 'success'},
                    {key: 4, name: '标签五', type: 'warning'},
                    {key: 6, name: '标签六', type: 'danger'}
                ]
            };
        },
        methods: {
            handleClose(tag) {
                this.tags.splice(this.tags.indexOf(tag), 1);
            }
        }

    }
</script>
