import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Text = styled.p`
  text-align: left;
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

const SmallText = styled.small`
  text-align: left;
  font-size: 14px;
  padding: 0 6px;
  font-weight: 300;
  color: ${(props) => props.theme.text};
`;

const DescriptionText = ({ category, value }) => {
  const theme = useContext(ThemeContext);

  return (
    <Text props={theme}>
      {`${category}: `}
      <SmallText>{value}</SmallText>
    </Text>
  );
};

export default DescriptionText;
