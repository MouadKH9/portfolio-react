import React from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

export default function Portfolio() {
  return (
    <PortfolioContainer>
      <SectionTitle title="Portfolio" />
    </PortfolioContainer>
  );
}

const PortfolioContainer = styled.div`
  width: 100%;
`;
