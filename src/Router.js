import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Navi from "./pages/Navi";
import DeviceManage from "./pages/DeviceManage";
import Monitor from "./pages/Monitor";
import PlayData from "./pages/PlayData";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

function Router() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Navi />
        <Routes>
          <Route path="/" element={<DeviceManage></DeviceManage>}></Route>
          <Route path="/monitor" element={<Monitor></Monitor>}></Route>
          <Route path="/playdata" element={<PlayData></PlayData>}></Route>
        </Routes>
      </LayoutContainer>
    </BrowserRouter>
  );
}

export default Router;
