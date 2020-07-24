import { useState, useEffect } from "react";
import apiFetch from "./apiFetch";

const CACHE = {};

export default function useStaleRefresh(url, defaultValue = []) {
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    // cacheID is how a cache is identified against a unique request
    const cacheID = url;
    // look in cache and set response if present
    if (CACHE[cacheID] !== undefined) {
      setData(CACHE[cacheID]);
    }
    // fetch new data
    apiFetch(url).then((newData) => {
      CACHE[cacheID] = newData.data;
      setData(newData.data);
    });
  }, [url]);

  return data;
}
