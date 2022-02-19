import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config.js";


const useFirestore = (collection) => {
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

export default useFirestore;
