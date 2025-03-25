import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "/api", // This matches your Vite proxy path
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default function useFetch(path, method, body = null) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const config = {
          url: path,
          method: method.toLowerCase(),
          signal: abortController.signal,
        };

        if (["post", "put", "patch"].includes(config.method)) {
          config.data = body;
        }

        const res = await instance.request(config);
        console.log(res);
        setResponse(res.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [path, method, body]);

  return { response, loading, error };
}
