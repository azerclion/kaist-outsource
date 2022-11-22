import React from "react";
import styled from "styled-components";

const DeviceContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: lightgray;
`;
const DeviceBox = styled.div`
  width: 400px;
  height: 200px;
  margin: 20px 40px;
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

const data = [
  {
    id: "1",
    login_id: "testlogin01",
    device_id: "deviceid0000000000",
    device_type: "occulus",
    regdate: "2022-10-17 23:43:37",
  },
  {
    id: "2",
    login_id: "testlogin01",
    device_id: "deviceid0000000000",
    device_type: "occulus",
    regdate: "2022-10-18 00:35:23",
  },
  {
    id: "3",
    login_id: "testlogin01",
    device_id: "deviceid0000000000",
    device_type: "occulus",
    regdate: "2022-10-19 16:55:40",
  },
  {
    id: "4",
    login_id: "testlogin01",
    device_id: "deviceid0000000000",
    device_type: "occulus",
    regdate: "2022-10-19 17:16:17",
  },
];

function DeviceManage() {
  return (
    <DeviceContainer>
      {data.map((d, idx) => (
        <DeviceBox key={idx}>
          <DeviceLogo>{idx}</DeviceLogo>
          <DeviceInfo>
            <OnOffSignal>OFF LINE 🟢</OnOffSignal>
            <InfoUint>
              <div>ID</div>
              <div>{d.device_id}</div>
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
      ))}
    </DeviceContainer>
  );
}

export default DeviceManage;
