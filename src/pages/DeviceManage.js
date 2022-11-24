import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import purple from "../assets/images/profile_Purple.png";

const DeviceContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const BoxContainer = styled.div`
  width: 900px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const DeviceBox = styled.div`
  width: 400px;
  height: 200px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  background-color: whitesmoke;
`;
const DeviceLogo = styled.div`
  width: 90px;
  height: 90px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 45px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-color: hotpink;
`;
const DeviceInfo = styled.div`
  width: 280px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const OnOffSignal = styled.div`
  font-size: 12px;
  align-self: flex-end;
  margin-top: -10px;
  margin-right: 5px;
  margin-bottom: 10px;
`;
const InfoUint = styled.div`
  width: 270px;
  height: 40px;
  margin: 4px;
  padding-left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 14px;
  color: lightgray;
  div:nth-child(1) {
    width: 50px;
    color: black;
  }
  div:nth-child(2) {
    width: 200px;
    margin-left: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 12px;
    background-color: black;
  }
`;
const ModalWarning = styled.div`
  width: 300px;
  height: 200px;
  display: ${(props) => props.confirm};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 10px;
  background-color: whitesmoke;
`;
const SubModal = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div:nth-child(2) {
    width: 150px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    color: whitesmoke;
    background-color: black;
  }
  div:nth-child(3) {
  }
  div:nth-child(4) {
    width: 300px;
    font-size: 20px;
    background-color: darkgray;
  }
`;

function DeviceManage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    let ignore = false;
    try {
      setIsLoading(true);
      function getApiUrl() {
        return `http://222.239.255.38:8083/kaisthealth/get_device_status.php`;
        // return `http://localhost:8081/kaisthealth/get_device_status.php`;
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
  return (
    <DeviceContainer>
      <BoxContainer>
        {Array.isArray(data)
          ? data.map((d, idx) => (
              <div key={idx}>
                <DeviceBox>
                  <DeviceLogo img={purple}>{idx}</DeviceLogo>
                  <DeviceInfo>
                    <OnOffSignal>ONLINE 🟢</OnOffSignal>
                    <InfoUint>
                      <div>ID</div>
                      <div>{d.devide_id}</div>
                    </InfoUint>
                    <InfoUint>
                      <div>TYPE</div>
                      <div>{d.device_type}</div>
                    </InfoUint>
                    <InfoUint>
                      <div>PLACE</div>
                      <div>{d.device_loc ? d.device_loc : "실험실"}</div>
                    </InfoUint>
                  </DeviceInfo>
                </DeviceBox>
                {d.alram_rs_support === "1" ||
                d.alram_zoom === "1" ||
                d.device_alram === "1"
                  ? setModal(true)
                  : null}
                <ModalWarning
                  display={
                    d.alram_rs_support === "1"
                      ? "block"
                      : d.alram_zoom === "1"
                      ? "block"
                      : d.device_alram === "1"
                      ? "block"
                      : "block"
                  }
                  confirm={modal ? "block" : "none"}
                >
                  <SubModal>
                    <div>
                      <div style={{ marginLeft: "-100px" }}>🚨</div>
                      <div></div>
                    </div>
                    <div>비상호출</div>
                    <div>{d.devide_id}</div>
                    <div
                      onClick={() => {
                        setModal(false);
                      }}
                    >
                      확 인
                    </div>
                  </SubModal>
                </ModalWarning>
              </div>
            ))
          : null}
      </BoxContainer>
    </DeviceContainer>
  );
}

export default DeviceManage;
