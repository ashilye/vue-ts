import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.less'
import { axionInit } from './utils/axios.config'
import { asyncComponent } from './utils/global'

// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

export const app = createApp(App)
axionInit()
asyncComponent()

// createApp(App).use(store).use(router).mount('#app')
app.use(store).use(router).mount('#app')
