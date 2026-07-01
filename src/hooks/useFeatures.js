import { useState, useEffect } from "react";
import { apiClient } from "../lib/apiClient";
import { featureData } from "../data/features";

export const useFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isComponentAlive = true;

    const fetchFeatures = async () => {
      try {
        setLoading(true);
        setError(null);

        // Ambil data dari API
        const response = await apiClient.get("/features");

        if (isComponentAlive) {
          setFeatures(response.data);
        }
      } catch (err) {
        console.warn(
          "API gagal — menggunakan data mock sebagai fallback:",
          err
        );

        console.log("Fallback featureData:", featureData);

        if (isComponentAlive) {
          setFeatures(featureData);
          setError(null);
        }
      } finally {
        console.log("FINALLY DIJALANKAN");

        if (isComponentAlive) {
          setLoading(false);
        }
      }
    };

    fetchFeatures();

    return () => {
      isComponentAlive = false;
    };
  }, []);

  return { features, loading, error };
};