import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import {
    Icon,Layout,Menu
} from 'ant-design-vue';

// use使用
const vueUse = [
    Icon,Layout,Menu
]
vueUse.forEach((item) => {
    Vue.use(item)
})