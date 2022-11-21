import React from "react";
import styled from "styled-components";

const DeviceContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: lightgray;
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
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: hotpink;
`;
const DeviceInfo = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  div {
    width: 250px;
    height: 40px;
    margin: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: blueviolet;
  }
`;

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function DeviceManage() {
  return (
    <DeviceContainer>
      {data.map((device, idx) => (
        <DeviceBox key={idx}>
          <DeviceLogo>{device}</DeviceLogo>
          <DeviceInfo>
            <div>ID :</div>
            <div>TYPE :</div>
            <div>PLACE :</div>
          </DeviceInfo>
        </DeviceBox>
      ))}
    </DeviceContainer>
  );
}

export default DeviceManage;
