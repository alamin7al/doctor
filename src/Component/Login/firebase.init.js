import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFarebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFarebase