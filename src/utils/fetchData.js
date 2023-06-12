import { useEffect } from "react";

const fetchData = (fetchFunction, query, setState, setIsfetching) => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetchFunction(query);
      setState(response.data);
      setIsfetching(false);
    } catch (error) {
      console.log(error);
    }
  };
};

export { fetchData };
