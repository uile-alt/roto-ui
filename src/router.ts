import {createWebHashHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo  from './components/DialogDemo.vue'
import ButtonDemo  from './components/ButtonDemo.vue'
import DocDemo  from './components/DocDemo.vue'


const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,children:[
        {path: '', component: DocDemo },
        {path: 'switch', component: SwitchDemo },
        {path: 'tabs', component: TabsDemo },
        {path: 'dialog', component: DialogDemo },
        {path: 'button', component: ButtonDemo },
    ]}
  ]
})
