<template>
    <div id="app" style="height:100%" v-if="!isLogin">
        <MyHeader/>
        <el-row style="height:100%">
            <el-col :span="4"
                    style="background:#e8e8e8;position:fixed;height:100%;padding-right:0px;bottom:0px;top:0px">
                <MyAside/>
            </el-col>
            <el-col :span="20" style="float:right">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
    <div v-else style="overflow:hidden">
        <router-view></router-view>
    </div>
</template>

<script>
    import MyHeader from './header.vue'//顶部
    import MyAside from './aside.vue'//侧边
    export default {
        components: {
            MyHeader,
            MyAside
        },
        computed: {
            isLogin () {
                console.log(/login/.test(this.$route.path));
                return /login/.test(this.$route.path);
            }
        }
    }
</script>
<style>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.gray-light {
    background: #79aec8;
}

.font-blue {
    color: #fff;
    font-weight:bold;
    padding:0 20px;
    line-height:2
}

.content-margin {
    margin:20px 0px 30px 30px;

}




</style>