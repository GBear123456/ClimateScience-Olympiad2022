import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config.ts";

// get record...
export const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore
          .collection(collection)
          .orderBy("_id", "asc")
          .onSnapshot((snap) => {
            let documents = [];
            snap.forEach((doc) => {
                //console.log(doc.data(), doc.id);
              documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs(documents);
          });

          return () => unsub();
    }, [collection]);

    return { docs };
}

// batch set record...
export const useSetFirestore = (collection, record) => {
    let batch = projectFirestore.batch();
    var index = record.length;
    console.log('setFireStore => : ', index, record);
    const unsub = async () => {
      for (let i=0; i < index; i++) {
        var docRef = projectFirestore.collection(collection).doc(); //automatically generate unique id
        batch.set(docRef, record[i]);
        // YOUR UPDATES
        if ((i + 1) % 499 === 0) {
          await batch.commit();
          batch = projectFirestore.batch();
          console.log('setFireStore => : ', i / 500);
        }
      }
      // For committing final batch
      if (((index % 499) == 0) === false) {
        await batch.commit();
        console.log('setFireStore => : end');
      }
      console.log('write completed');
    }
    unsub();
}

// batch set record...
export const useUpdateFirestore = (collection, record) => {
  let collectionRef = projectFirestore.collection(collection);
  const unsub = async () => {
    try {
      let batch = projectFirestore.batch();
      const documentSnapshotArray = await collectionRef.get(); // here you can add condition...like this => .where('uid', '==', before.uid)
      const records = documentSnapshotArray.docs;
      const index = documentSnapshotArray.size;
        for (let i=0; i < index; i++) {
          const docRef = records[i].ref;
          // YOUR UPDATES
          batch.update(docRef, {isDeleted: false}); // record[i].mark or content...
          if ((i + 1) % 499 === 0) {
            await batch.commit();
            batch = projectFirestore.batch();
          }
        }
        // For committing final batch
        if (((index % 499) == 0) === false) {
          await batch.commit();
        }
        console.log('update completed');
    } catch (error)
    {
      console.error(`updateWorkers() errored out : ${error.stack}`);
    }
  }

  return () => unsub();
}
