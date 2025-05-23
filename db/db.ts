/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(
//     process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
//   ),
//   isTokenAutoRefreshEnabled: true,
// });

// ——— Dynamic App Check init ———
if (typeof window !== "undefined") {
  (async () => {
    const { initializeAppCheck, ReCaptchaV3Provider } = await import(
      "firebase/app-check"
    );
    initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
      ),
      isTokenAutoRefreshEnabled: true,
    });
    console.log("[Firebase][app-check] initialized");
  })();
}

export const db = getFirestore(app);

export const isConfigured = true;
