import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB60uj7ZZiu3M-k9STCDnoGnWZMpfEDt3c",
    authDomain: "motionview-e30fc.firebaseapp.com",
    projectId: "motionview-e30fc",
    storageBucket: "motionview-e30fc.appspot.com",
    messagingSenderId: "641075293542",
    appId: "1:641075293542:web:b8ed54be86728c592b2ca7"
  };

  const app= initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const db=getFirestore(app);
  const storage=getStorage(app);

  export { auth,db,storage };