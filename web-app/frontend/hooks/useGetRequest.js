import { useCallback, useState } from "react";
import server from "./server";
import loadingStatus from "../helpers/loadingStatus";

const useGetRequest = (url) => {
  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  const get = useCallback(async () => {
    setLoadingState(loadingStatus.isLoading);
    try {
      const result = await server.get(url);
      setLoadingState(loadingStatus.loaded);
      return result.data;
    } catch {
      setLoadingState(loadingStatus.hasErrored);
    }
  }, [url]);
  return { get, loadingState };
};

export default useGetRequest;