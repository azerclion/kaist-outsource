import { Link } from "react-router-dom";
import styled from "styled-components";

const NaviContainer = styled.div`
  width: 300px;
  height: 2000px;
  padding-top: 40px;
  background-color: black;
`;
const Title = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  color: lightgray;
`;
const LinkBox = styled.div`
  padding-left: 20px;
  div {
    margin-bottom: 20px;
    font-size: 10.7px;
    font-weight: 500;
    color: lightgray;
  }
`;

function Navi() {
  return (
    <NaviContainer>
      <Title>다중 사용자용 XR 워크벤치</Title>
      <LinkBox>
        <Link to={"/"} relative="path">
          <div>디바이스관리 </div>
        </Link>
        <Link to={"/playdata"} relative="path">
          <div>회원 플레이데이터 </div>
        </Link>
        <Link to={"/monitor"} relative="path">
          <div> 복수 모니터링</div>
        </Link>
      </LinkBox>
    </NaviContainer>
  );
}

export default Navi;
