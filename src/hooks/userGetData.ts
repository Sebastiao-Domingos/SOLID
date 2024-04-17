import { userResquest } from "@/types/user";
import axios from "axios";
import { useState, useEffect } from "react";

const userGetData = () => {
  const [query, setQuery] = useState<{ total: number }>({ total: 20 });
  const [isLoaading, setIsLoading] = useState(true);
  const [data, setData] = useState<userResquest>();

  const handleFetch = async () => {
    const response = await axios.get(
      `https://randomuser.me/api?results=${query?.total}`
    );

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleFetch();
  }, [query]);

  function filtro(data: { total: number }) {
    setQuery(data);
  }

  return {
    isLoaading,
    data,
    filtro,
  };
};

export { userGetData };
