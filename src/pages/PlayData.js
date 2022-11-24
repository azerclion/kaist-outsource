import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PlayDataContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

function PlayData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    try {
      setIsLoading(true);
      function getApiUrl() {
        return `http://222.239.255.38:8083/kaisthealth/get_playinfo.php`;
        // return `http://localhost:8081/kaisthealth/get_playinfo.php`;
      }
      async function axiosFetch() {
        const result = await axios(getApiUrl());
        if (!ignore) {
          setData(result?.data);
          setIsLoading(false);
          console.log("result :", result);
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
    <PlayDataContainer>
      <TableHeaderBox>
        <div>로그인</div>
        <div>디바이스ID</div>
        <div>디바이스 타입</div>
        <div>플레이 타임(초)</div>
        <div>등록 일자</div>
        <div>심박수그래프</div>
      </TableHeaderBox>
      {Array.isArray(data)
        ? data.map((d, idx) => (
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
          ))
        : null}
    </PlayDataContainer>
  );
}

export default PlayData;
