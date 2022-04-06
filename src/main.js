import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  VueGoogleMaps from '@fawmi/vue-google-maps'
import mitt from 'mitt'

const emitter = mitt();

const app = createApp(App)
app.config.globalProperties.emitter = emitter;

app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_MAPS_API_KEY,      
    }}
);

app.use(router);

app.mount('#app');
