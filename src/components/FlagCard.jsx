import styled, { ThemeContext } from "styled-components";

import React, { useContext } from "react";
import { getFormatted } from "../formatter/populationParser";
import { Link } from "react-router-dom";
import DescriptionText from "./DescriptionText";
const Card = styled(Link)`
  width: 264px;
  height: 336px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.elements};
  text-decoration: none;
`;

const Flag = styled.img`
  height: 45%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
`;

const H2 = styled.h2`
  text-align: left;
  font-size: 20px;
  color: ${(props) => props.theme.text};
  padding: 0 10%;
  margin: 5% 0;
`;

const Stats = styled.div`
  padding: 0 10%;
`;

const FlagCard = ({ name, flagUrl, pop, region, capital }) => {
  const theme = useContext(ThemeContext);

  return (
    <Card theme={theme} to={`/${name}`}>
      <Flag src={flagUrl}></Flag>
      <H2 props={theme}>{name}</H2>
      <Stats>
        <DescriptionText
          category="Population"
          value={getFormatted(pop)}
        ></DescriptionText>
        <DescriptionText category="Region" value={region}></DescriptionText>
        <DescriptionText category="Capital" value={capital}></DescriptionText>
      </Stats>
    </Card>
  );
};

export default FlagCard;
