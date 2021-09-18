import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { FaSearch, FaArrowDown } from "react-icons/fa";

const NavbarBody = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
  padding: 0 6%;
  margin: 40px 0;
  margin-top: 25px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    height: 16vh;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${(props) => props.theme.elements};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.03);

  border-radius: 8px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Input = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme.text};
  height: 60px;
  width: 440px;
  font-size: 16px;

  &::placeholder {
    font-weight: 600;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: normal;
    width: 100%;
  }
`;

const Select = styled.button`
  padding: 0 40px;
  width: 200px;
  height: 60px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  background: transparent
    url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png");
  background-repeat: no-repeat;
  background-position: 90% 50%;
  background-size: 12px;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-weight: 800;
  position: relative;
`;

const Option = styled.div`
  text-align: left;
  border-radius: 8px;
  padding: 6px 24px;
  font-weight: 800;
  &:hover {
    background-color: ${(props) => props.theme.bg};
  }
`;

const StyledIcon = styled.button`
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16%;
  height: 60px;
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  position: absolute;
  bottom: -320%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  left: 0;
  border-radius: 8px;
  width: 200px;
  background-color: ${(props) => props.theme.elements};
`;

const REGIONS = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const Navbar = ({ filter, setFilter }) => {
  const theme = useContext(ThemeContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const [region, setRegion] = useState("All");

  const toggleMenuVisibility = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleRegionChange = (regionValue) => {
    setRegion(regionValue);
    setFilter((prev) => ({ ...prev, region: regionValue }));
  };

  const searchAndChangeData = (event) => {
    const filterText = event.target.value;
    setFilter((prev) => ({
      ...prev,
      filter: filterText,
    }));
  };

  return (
    <NavbarBody>
      <SearchBar props={theme}>
        <StyledIcon props={theme}>
          <FaSearch></FaSearch>
        </StyledIcon>
        <Input
          placeholder="Search for a country..."
          type="text"
          onChange={(e) => searchAndChangeData(e)}
        ></Input>
      </SearchBar>

      <Select
        onClick={toggleMenuVisibility}
        type="button"
        name="region"
        props={theme}
        el={<FaArrowDown />}
      >
        {region === "" ? "All" : region}
        {menuVisible ? (
          <OptionsContainer props={theme}>
            {REGIONS.map((regionArray) =>
              regionArray === "All" ? (
                <Option
                  onClick={() => {
                    handleRegionChange("");
                  }}
                  key={regionArray}
                >
                  {regionArray}
                </Option>
              ) : (
                <Option
                  onClick={() => {
                    handleRegionChange(regionArray);
                  }}
                  key={regionArray}
                >
                  {regionArray}
                </Option>
              )
            )}
          </OptionsContainer>
        ) : (
          ""
        )}
      </Select>
    </NavbarBody>
  );
};

export default Navbar;
