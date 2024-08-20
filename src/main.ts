import './assets/main.css'
import './assets/fonts.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// pinia para getenciamento de estado
import { createPinia } from 'pinia'

// fontawesome para icones
import { FontAwesomeIcon } from '@/plugins/fontawesome'

// vuei18n para traduções
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ptBR from './locales/pt-BR.json'


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

const i18n = createI18n({
  legacy: false,
  locale: 'pt-BR',
  fallbackLocale: 'en',
  messages: {
    en: en,
    'pt-BR': ptBR
  }
})


app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
