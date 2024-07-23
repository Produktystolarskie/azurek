import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from '../src/router/index'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'


import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(Quasar, {
    plugins: {}
})

app.mount('#app')
