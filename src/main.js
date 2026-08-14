import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Self-hosted fonts (DSGVO-safe — no external requests)
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/600.css'
import '@fontsource/cormorant-garamond/700.css'
import '@fontsource/source-sans-3/400.css'
import '@fontsource/source-sans-3/500.css'
import '@fontsource/source-sans-3/600.css'

import './style.css'

createApp(App).use(router).mount('#app')
