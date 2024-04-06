import { doc, collection, setDoc, updateDoc, getDocs, deleteDoc } from "firebase/firestore";
import {db} from "./firebase"
import { dateToStorageString, stringToDate } from "./utils";

const date = dateToStorageString(new Date());

export const storeConvo = async (messageList) => {
    try {
        const docRef = doc(db, 'conversations', date);
        await setDoc(docRef, {messageList})
      } catch (e) {
        console.error("Error storing to firebase: ", e);
      }
}

export const getConvos = async () => {  
  return await getDocs(collection(db, "conversations"))
  .then((querySnapshot)=>{               
      const convos = querySnapshot.docs
      .map((convo) => 
        ({...convo.data(), date:stringToDate(convo.id)})
      );
      return convos;            
  })
}

export const editConvo = async (convoId, convo) => {
  try {
    const docRef = doc(db, 'conversations', convoId);
    await updateDoc(docRef, convo)
  } catch (e) {
    console.error("Error storing to firebase: ", e);
  }
}

export const deleteConvo = async (convoId) => {
  try {
    const docRef = doc(db, 'conversations', convoId);
    await deleteDoc(docRef)
  } catch (e) {
    console.error("Error storing to firebase: ", e);
  }
}