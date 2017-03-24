import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI);
Vue.use(VueRouter);
window.Vue = Vue;
const routes = [
    {
        path: '/basic/layout/',
        component: function (resolve) {
            require(['./components/Basic/layout.vue'], resolve)
        }
    },
    {
        path: '/basic/button/',
        component: function (resolve) {
            require(['./components/Basic/button.vue'], resolve)
        }
    },
    {
        path: '/form/radio/',
        component: function (resolve) {
            require(['./components/Form/radio.vue'], resolve)
        }
    },
    {
        path: '/form/checkbox/',
        component: function (resolve) {
            require(['./components/Form/checkbox.vue'], resolve)
        }
    },
    {
        path: '/form/input/',
        component: function (resolve) {
            require(['./components/Form/input.vue'], resolve)
        }
    },
    {
        path: '/form/inputnumber/',
        component: function (resolve) {
            require(['./components/Form/input_number.vue'], resolve)
        }
    },
    {
        path: '/form/select/',
        component: function (resolve) {
            require(['./components/Form/select.vue'], resolve)
        }
    },
    {
        path: '/form/switch/',
        component: function (resolve) {
            require(['./components/Form/switch.vue'], resolve)
        }
    },
    {
        path: '/form/slider/',
        component: function (resolve) {
            require(['./components/Form/slider.vue'], resolve)
        }
    },
    {
        path: '/form/time/',
        component: function (resolve) {
            require(['./components/Form/time.vue'], resolve)
        }
    },
    {
        path: '/form/date/',
        component: function (resolve) {
            require(['./components/Form/date.vue'], resolve)
        }
    },
    {
        path: '/form/date_time/',
        component: function (resolve) {
            require(['./components/Form/date_time.vue'], resolve)
        }
    },
    {
        path: '/form/upload/',
        component: function (resolve) {
            require(['./components/Form/upload.vue'], resolve)
        }
    },
    {
        path: '/form/rate/',
        component: function (resolve) {
            require(['./components/Form/rate.vue'], resolve)
        }
    },
    {
        path: '/form/form/',
        component: function (resolve) {
            require(['./components/Form/form.vue'], resolve)
        }
    },
    {
        path: '/data/table/',
        component: function (resolve) {
            require(['./components/Data/table.vue'], resolve)
        }
    },
    {
        path: '/data/tag/',
        component: function (resolve) {
            require(['./components/Data/tag.vue'], resolve)
        }
    },
    {
        path: '/data/progress/',
        component: function (resolve) {
            require(['./components/Data/progress.vue'], resolve)
        }
    },
    {
        path: '/data/tree/',
        component: function (resolve) {
            require(['./components/Data/tree.vue'], resolve)
        }
    },
    {
        path: '/data/pagination/',
        component: function (resolve) {
            require(['./components/Data/pagination.vue'], resolve)
        }
    },
    {
        path: '/data/badge/',
        component: function (resolve) {
            require(['./components/Data/badge.vue'], resolve)
        }
    },
    {
        path: '/notice/alert/',
        component: function (resolve) {
            require(['./components/Notice/alert.vue'], resolve)
        }
    },
    {
        path: '/notice/loading/',
        component: function (resolve) {
            require(['./components/Notice/loading.vue'], resolve)
        }
    },
    {
        path: '/notice/message/',
        component: function (resolve) {
            require(['./components/Notice/message.vue'], resolve)
        }
    },
    {
        path: '/notice/message_box/',
        component: function (resolve) {
            require(['./components/Notice/message_box.vue'], resolve)
        }
    },
    {
        path: '/notice/notification/',
        component: function (resolve) {
            require(['./components/Notice/notification.vue'], resolve)
        }
    },
    {
        path: '/navigation/nav_menu/',
        component: function (resolve) {
            require(['./components/Navigation/nav_menu.vue'], resolve)
        }
    },
    {
        path: '/navigation/tabs/',
        component: function (resolve) {
            require(['./components/Navigation/tabs.vue'], resolve)
        }
    },
    {
        path: '/navigation/breadcrumb/',
        component: function (resolve) {
            require(['./components/Navigation/breadcrumb.vue'], resolve)
        }
    },
    {
        path: '/navigation/dropdown/',
        component: function (resolve) {
            require(['./components/Navigation/dropdown.vue'], resolve)
        }
    },
    {
        path: '/navigation/steps/',
        component: function (resolve) {
            require(['./components/Navigation/steps.vue'], resolve)
        }
    },
    {
        path: '/others/dialog/',
        component: function (resolve) {
            require(['./components/Others/dialog.vue'], resolve)
        }
    },
    {
        path: '/others/tooltip/',
        component: function (resolve) {
            require(['./components/Others/tooltip.vue'], resolve)
        }
    },
    {
        path: '/others/popover/',
        component: function (resolve) {
            require(['./components/Others/popover.vue'], resolve)
        }
    },
    {
        path: '/others/card/',
        component: function (resolve) {
            require(['./components/Others/card.vue'], resolve)
        }
    },
    {
        path: '/login/',
        component: function (resolve) {
            require(['./components/Auth/login.vue'], resolve)
        }
    },
    {
        path: '*',
        redirect: '/basic/layout/'
    }
];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});
window.router = router;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
