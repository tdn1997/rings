import React, { Component } from "react";
import styled from "styled-components";
import store from '../PerformWidget/Store'

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const ChangeButton = styled.button`
  padding: 7px;
  color: #6e6e6e;
  border: 1px solid #8e8e8e;
  outline: none;
  border-radius: 7px;
  background-color: #1a1a1a;
  color: #9a9a9a;
  cursor: pointer;
`

export default class HandleWidget extends Component {
  handleClick = (): void => {
    store.setData([
      {
        label: 'A',
        value: 25,
      },
      {
        label: 'B',
        value: 15,
      },
      {
        label: 'C',
        value: 5,
      },
      {
        label: 'D',
        value: 65,
      },
    ])
    
  }
  render() {
    return <Container><ChangeButton onClick={() => this.handleClick()}>Change</ChangeButton></Container>;
  }
}
