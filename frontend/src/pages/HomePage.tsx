import { Card, PageHeader } from "antd";
import React from "react";

export default class HomePage extends React.Component {
  render() {
    return (
      <PageHeader title="Home" style={{ width: "100%" }}>
        <Card>
          <p style={{ fontSize: 20 }}>
            This web application analyzes social media posts resulting from a
            disaster.The Live Feed page displays incoming social media post that
            contains information about a disaster and associated priority. The
            Analytics Page presents a summary of the numerical values associated
            with each category and priority level.
          </p>
        </Card>
      </PageHeader>
    );
  }
}
