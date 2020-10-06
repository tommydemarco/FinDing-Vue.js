import { createApp } from 'vue';
import router from './router.js';

import App from './App.vue';
import store from './store/index.js'

//global components
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);


app.use(router);
app.use(store);

//registering the global components 
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
