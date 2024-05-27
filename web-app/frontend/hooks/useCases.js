import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useCases = () => {
  const [cases, setCases] = useState([]);
  const { get, loadingState } = useGetRequest(`/listofcases`);

  useEffect(() => {
    const fetchCases = async () => {
      const cases = await get();
      setCases(cases);
    };
    fetchCases();
  }, [get]);

  return { cases, setCases, loadingState };
};

export default useCases;