import { PageHeader } from "antd";
import React from "react";
import Analytics from "../components/Analytics";

type Props = {};

class AnalyticsPage extends React.Component<Props> {
  render() {
    return (
      <PageHeader title="Analytics" style={{ width: "100%" }}>
        <Analytics />
      </PageHeader>
    );
  }
}

export default AnalyticsPage;
