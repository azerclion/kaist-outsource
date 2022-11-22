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
  div {
    color: black;
    background-color: lightgray;
  }
`;

const data = [1, 2, 3, 4, 5, 6];

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
          <div>{d}</div>
          <div>{d}</div>
          <div>{d}</div>
          <div>{d}</div>
          <div>{d}</div>
          <div>{d}</div>
        </TableContentBox>
      ))}
    </PlayDataContainer>
  );
}

export default PlayData;
