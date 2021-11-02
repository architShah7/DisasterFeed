import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/store";
import { Row, Col, Card } from "antd";

type ComponentProps = {};

const mapState = (state: RootState) => ({
  counts: state.feed.counts,
});

const mapDispatch = {};

const connector = connect(mapState, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>;
type Props = ReduxProps & ComponentProps;

class Analytics extends React.Component<Props> {
  render() {
    let [low, medium, high, critical] = Object.values(this.props.counts);
    let lowR = Object.values(low);
    let mediumR = Object.values(medium);
    let highR = Object.values(high);
    let criticalR = Object.values(critical);
    let lowSum = lowR.reduce((sum, current) => sum + current, 0);
    let mediumSum = mediumR.reduce((sum, current) => sum + current, 0);
    let highSum = highR.reduce((sum, current) => sum + current, 0);
    let criticalSum = criticalR.reduce((sum, current) => sum + current, 0);

    return (
      <div>
        <Card>
          <Row gutter={[10, 10]} align="middle" justify="end">
            <Col span={2}></Col>
            <Col span={4}>Fire</Col>
            <Col span={4}>Flood</Col>
            <Col span={4}>Medical</Col>
            <Col span={4}>Power</Col>
            <Col span={4}>Total</Col>
          </Row>
          <Row gutter={[10, 10]} align="middle" justify="end">
            Low
            <Col span={2}></Col>
            {lowR.map((value) => (
              <Col span={4}>{value}</Col>
            ))}
            <Col span={4}>{lowSum}</Col>
          </Row>
          <Row gutter={[10, 10]} align="middle" justify="end">
            Medium
            <Col span={2}></Col>
            {mediumR.map((value) => (
              <Col span={4}>{value}</Col>
            ))}
            <Col span={4}>{mediumSum}</Col>
          </Row>
          <Row gutter={[10, 10]} align="middle" justify="end">
            High
            <Col span={2}></Col>
            {highR.map((value) => (
              <Col span={4}>{value}</Col>
            ))}
            <Col span={4}>{highSum}</Col>
          </Row>
          <Row gutter={[10, 10]} align="middle" justify="end">
            Critical
            <Col span={2}></Col>
            {criticalR.map((value) => (
              <Col span={4}>{value}</Col>
            ))}
            <Col span={4}>{criticalSum}</Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default connector(Analytics);
