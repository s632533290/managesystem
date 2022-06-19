import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import G2 from '@antv/g2';
import router from './router/index'

createApp(App).use(Antd).use(router).use(G2).mount('#app')



