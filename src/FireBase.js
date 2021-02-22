import firebase from 'firebase/app'
import "firebase/auth" 
// import FirebaseConfig from './src/config/FirebaseConfig';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAN9z_OIPIzbttrJ1NXS3uqOYM4WwMR-9o",
    authDomain:process.env.REACT_APP_AUTHDOMAIN ,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
    appId:process.env.REACT_APP_APP_ID ,
    measurementId:process.env.REACT_APP_MEASUREMENT_ID
})
export const auth = app.auth()
export default app