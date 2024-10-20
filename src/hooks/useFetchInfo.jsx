import { useCallback, useEffect, useState } from "react";

const useFetchInfo = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    const controller = new AbortController();
    try {
      setIsLoading(true);
      const res = await fetch("https://www.course-api.com/react-tabs-project", {
        signal: controller.signal,
      });
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const data = await res.json();
      setData(data);
    } catch (err) {
      if (err.name !== "AbortError") setError(err.message);
    } finally {
      setIsLoading(false);
    }

    // Cleanup function to abort fetch if the component unmounts
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, setData, isLoading, error };
};

export { useFetchInfo };
