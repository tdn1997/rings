import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { observer } from "mobx-react";

interface IProps {
  data: any[];
}

@observer
export default class Rings extends Component<IProps, {}> {
  render() {
    const { props } = this;
    return (
      <HighchartsReact
        immutable={true}
        highcharts={Highcharts}
        options={{
          title: {
            text: ""
          },
          xAxis: {
            labels: {
              enabled: false
            }
          },
          yAxis: {
            labels: {
              enabled: false
            }
          },
          series: [
            {
              type: "pie",
              innerSize: 230,
              size: 280,
              data: [props.data[0].value, 100 - props.data[0].value],
              colors: ["#007820", "#383838"],
              borderWidth: 0,
              startAngle: 45,
              states: {
                inactive: {
                  opacity: 1
                }
              }
            },
            {
              type: "pie",
              innerSize: 170,
              size: 220,
              data: [props.data[1].value, 100 - props.data[1].value],
              colors: ["#199139", "#383838"],
              borderWidth: 0,
              startAngle: 135,
              states: {
                inactive: {
                  opacity: 1
                }
              }
            },
            {
              type: "pie",
              innerSize: 110,
              size: 160,
              data: [props.data[2].value, 100 - props.data[2].value],
              colors: ["#32aa52", "#383838"],
              borderWidth: 0,
              startAngle: 225,
              states: {
                inactive: {
                  opacity: 1
                }
              }
            },
            {
              type: "pie",
              innerSize: 50,
              size: 100,
              data: [props.data[3].value, 100 - props.data[3].value],
              colors: ["#4bc36b", "#383838"],
              borderWidth: 0,
              startAngle: 315,
              states: {
                inactive: {
                  opacity: 1
                }
              }
            }
          ],
          chart: {
            backgroundColor: "#1a1a1a",
            borderColor: "#000",
            borderWidth: 1
          },
          tooltip: { enabled: false },
          plotOptions: {
            series: {
              dataLabels: {
                enabled: false
              }
            }
          }
        }}
      />
    );
  }
}
