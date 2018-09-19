import Vue from 'vue'
import App from './App.vue'

import { Button, Select,Input } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Input.name, Input);

// Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
