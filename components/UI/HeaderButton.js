import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";

const CustomHeaderButton = (props) => {
  return <HeaderButton {...props} color={props.color} />;
};

export default CustomHeaderButton;
