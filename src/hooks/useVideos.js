import { useEffect, useState } from "react";
import Youtube from "../apis/Youtube";

const useVideos = (defualtSearchTerm) => {
  const [videos, setVideos] = useState([]);


  const search = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  useEffect(() => {
    search(defualtSearchTerm);
  }, [defualtSearchTerm]);

  return [videos,search];
};

export default useVideos;
