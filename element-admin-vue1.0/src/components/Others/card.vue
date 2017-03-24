<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Card 卡片
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">卡片名称</span>
                    <el-button style="float: right;" type="primary">操作按钮</el-button>
                </div>
                <div v-for="o in 4" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>简单卡片</span>
            </div>
            <el-card class="box-card">
                <div v-for="o in 4" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>带图片</span>
            </div>
            <el-row>
                <el-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="../../assets/logo.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentDate: new Date()
            };
        }
    }
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 480px;
  }

.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

</style>
