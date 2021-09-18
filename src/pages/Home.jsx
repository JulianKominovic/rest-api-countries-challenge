import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import FlagCard from "../components/FlagCard";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const HomeContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 75px;
  padding: 0% 6%;
`;

const Home = ({ countries }) => {
  const theme = useContext(ThemeContext);

  const [filter, setFilter] = useState({ filter: "", region: "" });

  const filterCard = (country, index) => {
    if (
      country.name.toLowerCase().includes(filter.filter.toLowerCase()) &&
      country.region.toLowerCase().includes(filter.region.toLowerCase())
    ) {
      return <FlagCard key={country.name} {...country}></FlagCard>;
    }
    return null;
  };

  return (
    <HomeContainer theme={theme}>
      <Header></Header>

      <Navbar {...{ filter, setFilter }}></Navbar>
      <CardContainer>
        {countries.map((country, index) => filterCard(country, index))}
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;
