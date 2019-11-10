import React, { Component } from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import store from "./Store";
import Rings from "./Rings";

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
  position: relative;
`;
const LabelWrapper = styled.div<{ left: number; top: number }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  color: #eee;
  z-index: 1;
  width: 120px;
  height: 50px;
  font-weight: 100;
`;

const Number = styled.div<{ align: string }>`
  width: 100%;
  flex: 1;
  font-size: 30px;
  border-bottom: 2px solid #eee;
  padding: 5px;
  text-align: ${props => props.align};
`;
const Label = styled.div<{ align: string }>`
  width: 100%;
  flex: 1;
  padding: 5px;
  font-size: 22px;
  text-align: ${props => props.align};
`;
const Line = styled.div<{
  width: number;
  left: number;
  top: number;
  rotate: number;
}>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  height: 2px;
  width: ${props => props.width}px;
  background-color: #eee;
  transform: rotate(${props => props.rotate}deg);
  ::before {
    content: "";
    position: absolute;
    background-color: #eee;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: -7px;
    left: -14px;
    border: 1px solid #1a1a1a;
  }
`;

@observer
export default class PerformWidget extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <LabelWrapper left={75} top={5}>
            <Number align={"right"}>{store.data[1].value}%</Number>
            <Label align={"right"}>Label A</Label>
            <Line width={95} left={-81} top={61} rotate={-45} />
          </LabelWrapper>
          <LabelWrapper left={75} top={80}>
            <Number align={"right"}>{store.data[3].value}%</Number>
            <Label align={"right"}>Label B</Label>
            <Line width={160} left={-136} top={-28} rotate={45} />
          </LabelWrapper>
          <LabelWrapper left={3.5} top={80}>
            <Number align={"left"}>{store.data[2].value}%</Number>
            <Label align={"left"}>Label C</Label>
            <Line width={125} left={110} top={-16} rotate={135} />
          </LabelWrapper>
          <LabelWrapper left={3.5} top={5}>
            <Number align={"left"}>{store.data[0].value}%</Number>
            <Label align={"left"}>Label D</Label>
            <Line width={65} left={120} top={51} rotate={-135} />
          </LabelWrapper>
          <Rings data={store.data} />
        </Wrapper>
      </Container>
    );
  }
}
