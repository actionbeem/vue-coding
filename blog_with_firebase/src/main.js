import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase/app";

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgrwrZT0KAyHLab3PaqYfb3ILubTUBDr4",
  authDomain: "blogapp-c7bcb.firebaseapp.com",
  databaseURL: "https://blogapp-c7bcb.firebaseio.com",
  projectId: "blogapp-c7bcb",
  storageBucket: "",
  messagingSenderId: "720246890431",
  appId: "1:720246890431:web:2d413551f0f5f7e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
