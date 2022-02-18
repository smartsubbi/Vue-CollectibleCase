import { createApp } from 'vue';


import store from './store/index.js'
import App from './App.vue';
import BaseContainer from './components/ui/BaseContainer.vue';

const app = createApp(App);


app.use(store);

app.component('base-container', BaseContainer);

app.mount('#app');
