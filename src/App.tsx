import React, { Component } from "react";
import styled from "styled-components";
import HandleWidget from "./components/HandleWidget/HandleWidget";
import PerformWidget from "./components/PerformWidget/PerformWidget";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <HandleWidget />
        <PerformWidget />
      </Container>
    );
  }
}
