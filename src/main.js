import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// Firebase configuration

import firebase from "firebase/app"
// import "firebase/firestore"
Vue.use(firebase)

Vue.config.productionTip = false,

// The core Firebase JS SDK is always required and must be listed first
// <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>

// export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
