import {
  //Link,
  Container,
  Typography,
} from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import Links from "../components/Links";

// styles

// markup
const Exam = () => {
  return (
    <>
      <Header />
      <Container style={{ maxWidth: "100%" }}>
        <Typography gutterBottom variant="h6">
          可用题库
        </Typography>
        <Links />
      </Container>
    </>
  );
};

export default Exam;
