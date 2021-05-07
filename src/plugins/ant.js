import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import {
    Icon
} from 'ant-design-vue';

// use使用
const vueUse = [
    Icon
]
vueUse.forEach((item) => {
    Vue.use(item)
})