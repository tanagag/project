<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Upload 上传
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>点击上传多个文件</span>
            </div>
            <el-upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove">
                <el-button size="small" type="primary">点击上传</el-button>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>拖拽上传</span>
            </div>
            <el-upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    type="drag"
                    :multiple="true"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :on-success="handleSuccess"
                    :on-error="handleError"
            >
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>上传单个图片</span>
            </div>
            <el-upload
                    action="//jsonplaceholder.typicode.com/posts/"
                    type="drag"
                    :thumbnail-mode="true"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
            >
                <i class="el-icon-upload"></i>
                <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-card>
    </div>
</template>
<script>
    export default{
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }
    }
</script>
<style>
.el-select .el-input {
  width: 100px;
}

.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}










</style>