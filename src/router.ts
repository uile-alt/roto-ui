import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch.vue'
import Tabs from './components/Tabs.vue'
import Dialog from './components/Dialog.vue'
import Button from './components/Button.vue'


const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,children:[
        {path: 'switch', component: Switch},
        {path: 'tabs', component: Tabs},
        {path: 'dialog', component: Dialog},
        {path: 'button', component: Button},
    ]}
  ]
})
