"use client";

import React from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Header";
import { StyledRootBox, StyledRootStack } from "./styles";

const MainLayout = ({ children }) => {
  return (
    <StyledRootStack direction="row">
      <Sidebar />
      <StyledRootBox>
        <Header />
        {children}
      </StyledRootBox>
    </StyledRootStack>
  );
};

export default MainLayout;
