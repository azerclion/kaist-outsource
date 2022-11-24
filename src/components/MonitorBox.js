import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 260px;
  height: 160px;
  margin: 20px;
  position: relative;
`;
const ImgBox = styled.div`
  width: 260px;
  height: 150px;
  border-radius: 10px 10px 0px 0px;
  background-image: url(${(props) => props.img});
  background-size: contain;
`;
const TextBox = styled.div`
  width: 260px;
  height: 36px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  color: whitesmoke;
  background-color: gray;
`;

function MonitorBox({ img, deviceID, display }) {
  return (
    <BoxContainer>
      <ImgBox img={img}></ImgBox>
      <TextBox display={display}>{deviceID}</TextBox>
    </BoxContainer>
  );
}

export default MonitorBox;
