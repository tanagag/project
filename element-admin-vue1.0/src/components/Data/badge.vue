<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Badge 标记
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-badge :value="12" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix">
                        评论
                        <el-badge class="mark" :value="12"/>
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix">
                        回复
                        <el-badge class="mark" :value="3"/>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>最大值</span>
            </div>
            <el-badge :value="200" :max="99" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="100" :max="10" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>自定义内容</span>
            </div>
            <el-badge value="new" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge value="hot" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>小红点</span>
            </div>
            <el-badge is-dot class="item">数据查询</el-badge>
            <el-badge is-dot class="item">
                <el-button class="share-button" icon="share" type="primary"></el-button>
            </el-badge>
        </el-card>
    </div>
</template>
<script>
    export default{}
</script>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}






</style>
