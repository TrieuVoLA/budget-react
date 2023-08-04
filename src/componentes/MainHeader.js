import React from "react";
import { Header } from "semantic-ui-react";

function MainHeader({ title, tytle = "h1" }) {
  return <Header as={tytle}>{title}</Header>;
}

export default MainHeader;
