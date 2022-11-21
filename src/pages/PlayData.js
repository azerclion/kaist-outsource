import React from "react";
import styled from "styled-components";

const PlayDataContainer = styled.div`
  width: 100%;
  padding: 50px 50px;
  background-color: lightgray;
`;
const TableHeaderBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  div {
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
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
        <div>심박수 그래프 보기</div>
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
