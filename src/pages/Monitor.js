import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MonitorContainer = styled.div`
  width: 100%;
  background-color: lightgray;
`;

function Monitor() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    try {
      setIsLoading(true);
      function getApiUrl() {
        return `http://222.239.255.38:8083/kaisthealth/get_device_status.php`;
      }
      async function axiosFetch() {
        const result = await axios(getApiUrl());
        if (!ignore) {
          setData(result?.data);
          setIsLoading(false);
          console.log("result :", result.data);
        }
      }
      axiosFetch();
      setInterval(() => {
        axiosFetch();
      }, 5000);
    } catch (err) {
      if (!ignore) {
        console.log(err.message);
        console.log(isLoading);
      }
    }
    return () => {
      ignore = true;
    };
    // eslint-disable-next-line
  }, []);
  return <MonitorContainer></MonitorContainer>;
}

export default Monitor;
