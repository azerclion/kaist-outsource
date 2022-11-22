import React from "react";
import styled from "styled-components";

const PlayDataContainer = styled.div`
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
const TableHeaderBox = styled.div`
  width: 900px;

  display: flex;
  justify-content: space-around;
  div {
    width: 100px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: whitesmoke;
    background-color: black;
  }
`;
const TableContentBox = styled(TableHeaderBox)`
  border-bottom: 1px solid darkgray;
  div {
    color: black;
    background-color: lightgray;
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

function PlayData() {
  return (
    <PlayDataContainer>
      <TableHeaderBox>
        <div>로그인</div>
        <div>디바이스ID</div>
        <div>디바이스 타입</div>
        <div>플레이 타임(초)</div>
        <div>등록 일자</div>
        <div>심박수그래프</div>
      </TableHeaderBox>
      {data.map((d, idx) => (
        <TableContentBox key={idx}>
          <div>{d.login_id}</div>
          <div>{d.device_id}</div>
          <div>{d.device_type}</div>
          <div>{"30"}</div>
          <div>{d.regdate}</div>
          <div>
            <button>그래프보기 ▷</button>
          </div>
        </TableContentBox>
      ))}
    </PlayDataContainer>
  );
}

export default PlayData;
