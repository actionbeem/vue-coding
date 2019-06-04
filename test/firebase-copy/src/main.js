import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index.js'
import * as firebase from "firebase/app";

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCpGU7mRL0lvq-Ne95x4iVK3oV8b7tLtoU",
  authDomain: "sample-firebase-be78b.firebaseapp.com",
  databaseURL: "https://sample-firebase-be78b.firebaseio.com",
  projectId: "sample-firebase-be78b",
  storageBucket: "sample-firebase-be78b.appspot.com",
  messagingSenderId: "894408147883",
  appId: "1:894408147883:web:88eb8bf0ae99721a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var config = {
//   apiKey: "AIzaSyBJ6t_P_HVpmybrMIDHMD1JG-Ma0AEp1cU",
//   authDomain: "vuesite-3c8e0.firebaseapp.com",
//   databaseURL: "https://vuesite-3c8e0.firebaseio.com",
//   projectId: "vuesite-3c8e0",
//   storageBucket: "vuesite-3c8e0.appspot.com",
//   messagingSenderId: "784181576601",

//   // apiKey: "AIzaSyD67nEd_zlkr3o3hnrwy35s08rvIk0f-Qg",
//   // authDomain: "blog-d24e2.firebaseapp.com",
//   // databaseURL: "https://blog-d24e2.firebaseio.com",
//   // projectId: "blog-d24e2",
//   // storageBucket: "blog-d24e2.appspot.com",
//   // messagingSenderId: "274757690132",
//   // appId: "1:274757690132:web:ee0d4aff601a24b4"
// };
// firebase.initializeApp(config);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
