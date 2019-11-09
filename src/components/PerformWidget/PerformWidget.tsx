import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import store from "./Store";
import Rings from './Rings'

const Container = styled.div`
  flex: 1;
  height: 100%;
  color: #8e8e8e;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
`;

@observer
export default class PerformWidget extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          {
            !store.clicked ? <Rings data={store.data} /> : undefined
          }
        </Wrapper>
      </Container>
    );
  }
}
