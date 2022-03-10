
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAz6Cc3aBTD-5uXCIMsmXo7Z9trTjhSAk4",
    authDomain: "amzonclone-36565.firebaseapp.com",
    projectId: "amzonclone-36565",
    storageBucket: "amzonclone-36565.appspot.com",
    messagingSenderId: "449670051451",
    appId: "1:449670051451:web:c7a0fd7d549d4d8d9214de"
  };

  firebase.initializeApp(firebaseConfig)
  export const auth = firebase.auth()
  export const storage = firebase.storage()
  export const firestore = firebase.firestore()
  export const db={
    users:firestore.collection('users'),
    address:firestore.collection('addresses'),
    wishlist:firestore.collection('wishlist'),
    reviews:firestore.collection('reviews'),
    cart:firestore.collection('cart'),
    orders:firestore.collection('orders'),
    product:firestore.collection('spring-oasis-product'),
    formatedDoc:doc=>{
      return{id:doc.id,...doc.data()}
    },
    getCurrentTimeStamp:firebase.firestore.FieldValue.serverTimestamp,
  }
  export default firebase;