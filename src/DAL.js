import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import { format, parseISO } from "date-fns";

export const curretDate = () => {
  const todayUTC = new Date().toISOString();
  const date = parseISO(todayUTC);
  return format(date, "yyyy-MM-dd'T'HH:mm:ss");
};

// Save new entry to Firestore
export const saveToFirestore = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "reports"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Gets all of the entries from Firestore
export const getAllFromFirestore = async (inputDate = null) => {
  const dataFromDB = [];
  const date = inputDate?.split("T")[0] || curretDate().split("T")[0];

  const q = query(
    collection(db, "reports"),
    where("fecha", ">=", `${date}T00:00:00.000Z`),
    where("fecha", "<=", `${date}T23:59:59.999Z`)
  );

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      dataFromDB.push({ id: doc.id, ...doc.data() });
    });

    return dataFromDB;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromFirestore = async (id) => {
  try {
    const dogRef = doc(db, "reports", id);
    await deleteDoc(dogRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateFirestore = async (id, updateData) => {
  try {
    const docRef = doc(db, "reports", id);
    await updateDoc(docRef, updateData);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
