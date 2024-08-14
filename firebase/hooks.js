import { database } from "../app/firebase";
import { ref, onValue, set } from "firebase/database";
import { useState, useEffect } from "react";

const useAquarioData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const aquarioRef = ref(database, "Aquario");

    const unsubscribe = onValue(
      aquarioRef,
      (snapshot) => {
        const value = snapshot.val();
        setData(value);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching data: ", error);
        setError(error);
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { data, loading, error };
};

const useToggleAquarioStatus = () => {
  const toggleStatus = async (key, currentValue) => {
    try {
      const statusRef = ref(database, `Aquario/${key}`);
      await set(statusRef, !currentValue); // Toggle the value
    } catch (error) {
      console.error("Error updating status: ", error);
    }
  };

  return { toggleStatus };
};

export { useAquarioData, useToggleAquarioStatus };
