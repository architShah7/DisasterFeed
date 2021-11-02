import { PageHeader } from "antd";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Feed from "../components/Feed";

export default class LiveFeedPage extends React.Component {
  render() {
    return (
      <PageHeader title="Live Feed" style={{ width: "100%" }}>
        <Container>
          <Row>
            <Col>
              <Feed />
            </Col>
          </Row>
        </Container>
      </PageHeader>
    );
  }
}
