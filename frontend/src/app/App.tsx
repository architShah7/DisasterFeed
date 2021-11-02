import React from "react";
import "./App.css";
import io from "socket.io-client";
import HomePage from "../pages/HomePage";
import LiveFeedPage from "../pages/LiveFeedPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import { AuditOutlined, HomeOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { add, updateCounts } from "../features/feed/postsSlice";
import { Layout, Menu } from "antd";
import { Filters, Post } from "../interfaces/types";

const { Sider } = Layout;

const socket = io("http://localhost:3001");

const mapDispatch = {
  add,
  updateCounts,
};

const connector = connect(null, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>;
type ComponentState = {};
type Props = ReduxProps & {};
type State = ComponentState;

function Nav() {
  return (
    <Sider style={{ position: "sticky", height: "100vh", top: "0" }}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]}>
        <Menu.ItemGroup title="Main">
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/liveFeed" icon={<AuditOutlined />}>
            <Link to="/liveFeed">Live Feed</Link>
          </Menu.Item>
          <Menu.Item key="/analytics" icon={<AuditOutlined />}>
            <Link to="/analytics">Analytics</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
}

function Routes() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <HomePage />
      </Route>
      <Route path={"/liveFeed"}>
        <LiveFeedPage />
      </Route>
      <Route path={"/analytics"}>
        <AnalyticsPage />
      </Route>
    </Switch>
  );
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    socket.on("connect", () => {
      socket.on("post", ({ name, photo, content, problem, priority }: Post) => {
        this.props.add({
          name,
          photo,
          content,
          problem,
          priority,
        });
        this.props.updateCounts({ priority, problem });
      });
    });
  }

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Nav />
          <Routes />
        </Layout>
      </Router>
    );
  }
}

export default connector(App);
