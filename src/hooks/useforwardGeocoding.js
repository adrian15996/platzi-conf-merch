import React, { useState } from "react";
import axios from "axios";

const useForwardGeocoding = (address) => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=e5d86bac23b6135af102204e7efe258f&query=${address}`;

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API);
      // console.log(response.data.data[0]);
      setMap({
        latitude: response.data.data[0].latitude,
        longitude: response.data.data[0].longitude,
      });
    };
    fetchData();
  }, []);

  return { map };
};

export { useForwardGeocoding };
