import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import styled, { ThemeContext } from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { fetchCountryByCode, fetchCountryByName } from "../api/fetchFunctions";
import { getFormatted } from "../formatter/populationParser";
import DescriptionText from "../components/DescriptionText";

const Body = styled.div`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
`;

const BackButton = styled.button`
  background-color: ${(props) => props.theme.elements};

  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.333);
  margin: 8vh 6vw;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 10px;

  padding: 10px 40px;
`;

const MainContent = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8vw;
  height: 100%;
  padding: 0 6vw;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Flag = styled.img`
  width: 40vw;
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  align-items: flex-start;
  flex-direction: column;
  height: 40vh;
  width: 100%;

  @media screen and (max-width: 980px) {
    height: auto;
    gap: 40px;
  }
`;

const H1 = styled.h1`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 40%;
  gap: 10px;
`;

const BordersBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  font-weight: 600;

  & > p {
    width: 100%;
  }

  @media screen and (max-width: 980px) {
    padding-bottom: 100px;
  }
`;

const BordersButton = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.elements};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.07);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  gap: 10px;
  width: 90px;
  border-radius: 4px;
  padding: 8px 6px;
`;

const CountryInfo = () => {
  const { countryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [countryInfo, setCountryInfo] = useState({});
  const [countryBorders, setCountryBorders] = useState([]);

  useEffect(() => {
    async function fetchCountry() {
      setCountryBorders([]);
      const country = await fetchCountryByName(countryName);
      await setCountryInfo(country[0]);
      await setIsLoading(false);
      return country[0];
    }

    async function fetchAllData() {
      const country = await fetchCountry();
      await Promise.all([
        country.borders.map((borderCountry) =>
          fetchCountryByCode(borderCountry)
        ),
      ]).then((res) =>
        res[0].map((item) => {
          return item.then((resolve) =>
            setCountryBorders((prev) => [...prev, resolve])
          );
        })
      );
    }
    fetchAllData();
  }, [countryName]);

  const theme = useContext(ThemeContext);
  return (
    <Body>
      <Header></Header>

      <BackButton theme={theme}>
        <LinkStyled to="/">
          <FaArrowLeft />
          Back
        </LinkStyled>
      </BackButton>
      <MainContent>
        <Flag src={countryInfo.flag}></Flag>
        {isLoading ? null : (
          <TextContainer>
            <H1 theme={theme}>{countryInfo.name}</H1>
            <DescriptionContainer>
              <DescriptionText
                category="Nativa Name"
                value={countryInfo.nativeName}
              ></DescriptionText>
              <DescriptionText
                category="Population"
                value={getFormatted(countryInfo.population)}
              ></DescriptionText>
              <DescriptionText
                category="Region"
                value={countryInfo.region}
              ></DescriptionText>
              <DescriptionText
                category="Sub Region"
                value={countryInfo.subregion}
              ></DescriptionText>
              <DescriptionText
                category="Capital"
                value={countryInfo.capital}
              ></DescriptionText>
              <DescriptionText
                category="Top Level Domain"
                value={countryInfo.topLevelDomain
                  .map((domain) => domain)
                  .join(", ")}
              ></DescriptionText>
              <DescriptionText
                category="Currencies"
                value={countryInfo.currencies
                  .map((currency) => currency.name)
                  .join(", ")}
              ></DescriptionText>
              <DescriptionText
                category="Languages"
                value={countryInfo.languages
                  .map((language) => language.name)
                  .join(", ")}
              ></DescriptionText>
            </DescriptionContainer>
            <BordersBox>
              <p>Border Countries: </p>
              {countryBorders.map((country) => (
                <BordersButton
                  key={countryName + country.name}
                  theme={theme}
                  to={`/${country.name.toLowerCase()}`}
                  replace
                >
                  {country.name}
                </BordersButton>
              ))}
            </BordersBox>
          </TextContainer>
        )}
      </MainContent>
    </Body>
  );
};

export default CountryInfo;
