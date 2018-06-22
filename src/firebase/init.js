import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyCVqr7b8UbRGRCfTtWfgA80TplE7i3Kqp0",
  authDomain: "vue-firebase-localization.firebaseapp.com",
  databaseURL: "https://vue-firebase-localization.firebaseio.com",
  projectId: "vue-firebase-localization",
  storageBucket: "",
  messagingSenderId: "451418544453"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()