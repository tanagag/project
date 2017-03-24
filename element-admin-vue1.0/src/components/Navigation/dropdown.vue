<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content gray-light font-blue">
                    Dropdown 下拉菜单
                </div>
            </el-col>
        </el-row>
        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>基础用法</span>
            </div>
            <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>触发对象</span>
            </div>
            <el-dropdown>
                <el-button type="primary">
                    更多菜单<i class="el-icon-caret-bottom el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown split-button type="primary" >
                更多菜单
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-card>

        <el-card class="box-card content-margin">
            <div slot="header" class="clearfix">
                <span>触发方式</span>
            </div>
            <el-row class="block-col-2">
                <el-col :span="12">
                    <span class="demonstration">hover 激活</span>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item>双皮奶</el-dropdown-item>
                            <el-dropdown-item>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col :span="12">
                    <span class="demonstration">click 激活</span>
                    <el-dropdown trigger="click">
                      <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
                      </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item>双皮奶</el-dropdown-item>
                            <el-dropdown-item>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
    export default {};
</script>
