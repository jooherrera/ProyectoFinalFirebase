import admin from 'firebase-admin'
import dotenv from 'dotenv'
dotenv.config()
//  var serviceAccount = require("./coder.json");

const serviceAccount = {
  "type": process.env.TYPE,
  "project_id": process.env.PROYECT_ID,
  "private_key_id": process.env.PRIVATE_KEY_ID,
  "private_key": process.env.PRIVATE_KEY,
  "client_email": process.env.CLIENT_EMAIL,
  "client_id": process.env.CLIENT_ID,
  "auth_uri":process.env.AUTH_URI,
  "token_uri": process.env.TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_x509_CERT_URL,
  "client_x509_cert_url": process.env.CLIENT_x509_CERT_URL,
}

// import {serviceAccount} from "./firebase.js"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASEURL
});



const db = admin.firestore()
const query = db.collection('productos')
const queryCart = db.collection('cart')


console.log("Conectado")

export {query,queryCart}