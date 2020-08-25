import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import firebase from "firebase/app"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD1UQTITSMpkW_qFMjbo5fwb8XCxhZuB9U",
  authDomain: "vue-product-list.firebaseapp.com",
  databaseURL: "https://vue-product-list.firebaseio.com",
  projectId: "vue-product-list",
  storageBucket: "vue-product-list.appspot.com",
  messagingSenderId: "1081106645700",
  appId: "1:1081106645700:web:998ace41941af60f863f91"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
