import React, { useContext } from "react";
import CardTrainingEvent from "./CardTrainingEvent";
import { Card, Badge, List, Row, Col, message } from "antd";
import { AppContext } from "../../context/Context";
import LoadingComponent from "../loadingComponent/LoadingComponent";
import InfiniteScroll from "react-infinite-scroll-component";

const AllTraining = () => {
  const { training, items, infiniteScrolldata } = useContext(AppContext);
  if (training.isLoading) return <LoadingComponent />;
  if (training.isError) return message.error("Get data training failed");

  return (
    <div>
      <Card
        style={{
          margin: "10px",
          borderRadius: "10px",
        }}
        title={
          <Badge
            title="All training Events"
            className="basge"
            count={training.data.length}
            offset={[23, 16]}
            color="#e6f7ff"
            style={{
              backgroundColor: "#D6EFED",
              color: "#40a9ff",
            }}
          >
            {" "}
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              All Training Event
            </div>
          </Badge>
        }
      >
        <InfiniteScroll
          dataLength={items.length}
          next={infiniteScrolldata}
          hasMore={items < 20}
          loader={<LoadingComponent />}
          endMessage={
            <p style={{ textAlign: "center" }}>Yay! You have seen it all</p>
          }
          style={{
            overflow: "inherit",
            overflowX: "hidden",
            margin: "15px",
            borderRadius: "10px",
          }}
        >
          <List
            grid={{
              gutter: 8,
              xs: 2,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 5,
            }}
            dataSource={training.data}
            renderItem={(item) => (
              <List.Item>
                <Row justify="space-between">
                  <Col ant-col-xs-24 ant-col-xl-8>
                    <CardTrainingEvent {...item} />
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </Card>
    </div>
  );
};

export default AllTraining;
