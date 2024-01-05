import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

import { Container } from "./styles.js";

function Loading() {
  return (
    <Container>
      <BiLoaderAlt className="loading" />
    </Container>
  );
}

export default Loading;
