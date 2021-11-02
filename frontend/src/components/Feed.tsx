import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../store/store";
import { updateFilters } from "../features/filter/filterSlice";
import {
  Comment,
  Avatar,
  Checkbox,
  Tooltip,
  Tag,
  Typography,
  Card,
  Row,
} from "antd";
import { Filters, Post } from "../interfaces/types";
import moment from "moment";

const { Title } = Typography;

type ComponentProps = {};

const mapState = (state: RootState) => ({
  feedPosts: state.feed.postFeed,
  filters: state.filters,

  counts: state.feed.counts,
});

const mapDispatch = {
  updateFilters,
};

const connector = connect(mapState, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>;
type Props = ReduxProps & ComponentProps;

class Feed extends React.Component<Props> {
  render() {
    let filterPosts = this.props.feedPosts.filter((value: Post) => {
      return (
        this.props.filters[value.problem] && this.props.filters[value.priority]
      );
    });

    return (
      <div>
        <Title level={5}>Filter: </Title>

        {Object.values(Filters).map((value) => (
          <Checkbox
            key={value}
            onChange={() => this.props.updateFilters(value)}
            checked={this.props.filters[value]}
          >
            {value}
          </Checkbox>
        ))}

        {filterPosts.map((post) => {
          const { name, problem, priority, photo, content } = post;

          return (
            <Card
              title=""
              bordered={true}
              style={{ width: "100%", marginTop: 20 }}
            >
              <Comment
                author={<a>{name}</a>}
                avatar={<Avatar src={photo} alt="image" />}
                content={
                  <p>
                    <Row style={{ marginTop: 10 }}>
                      <Tag color="error">{problem}</Tag>
                      <Tag color="warning">{priority}</Tag>
                    </Row>
                    <Row style={{ marginTop: 20 }}>{content}</Row>
                  </p>
                }
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
              />
            </Card>
          );
        })}
      </div>
    );
  }
}

export default connector(Feed);
