import React from "react";
import styled from "styled-components";

import MonitorBox from "../components/MonitorBox";
import Help from "../assets/images/help.png";
import Zoom from "../assets/images/zoom.png";
import RView from "../assets/images/remoteView.png";
import Moni from "../assets/images/monitoring.png";

const MonitorContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const MonitorBoxContainer = styled.div`
  width: 900px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

function Monitor() {
  return (
    <MonitorContainer>
      <MonitorBoxContainer>
        <MonitorBox img={Help} deviceID={"device-id 00000023"}></MonitorBox>
        <MonitorBox img={Zoom} deviceID={"device-id 00000023"}></MonitorBox>
        <MonitorBox img={RView} deviceID={"device-id 00000023"}></MonitorBox>
        <MonitorBox img={Moni} deviceID={"device-id 00000023"}></MonitorBox>
        <MonitorBox img={Moni} deviceID={"device-id 00000023"}></MonitorBox>
        <MonitorBox img={Moni} deviceID={"device-id 00000023"}></MonitorBox>
      </MonitorBoxContainer>
    </MonitorContainer>
  );
}

export default Monitor;

// const [data, setData] = useState(null);
// const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//   let ignore = false;
//   try {
//     setIsLoading(true);
//     function getApiUrl() {
//       return `http://222.239.255.38:8083/kaisthealth/get_device_status.php`;
//     }
//     async function axiosFetch() {
//       const result = await axios(getApiUrl());
//       if (!ignore) {
//         setData(result?.data);
//         setIsLoading(false);
//         console.log("result :", result.data);
//       }
//     }
//     axiosFetch();
//     setInterval(() => {
//       axiosFetch();
//     }, 5000);
//   } catch (err) {
//     if (!ignore) {
//       console.log(err.message);
//       console.log(isLoading);
//     }
//   }
//   return () => {
//     ignore = true;
//   };
//   // eslint-disable-next-line
// }, []);
