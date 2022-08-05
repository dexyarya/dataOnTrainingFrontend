import React from "react";
import { Breadcrumb, Card, Row, Col, Button, Menu, Dropdown } from "antd";
import { PlusOutlined, MoreOutlined } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";

function Breadcrumbs() {
  const roles = localStorage.getItem("roles");
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };
  const params = useParams();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbNameMaps = {
    "/training/create": "Create Training",
    ["/training/edit/" + params.id]: "Edit Training",
  };

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>{breadcrumbNameMaps[url]}</Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key={"/dashboard"}>
      <Link to="/dashboard">Dashboard</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  const menu = (
    <Menu>
      <Menu.Item>
        <Button style={{ border: "none" }} onClick={handleClick}>
          Signout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Card
      className="card"
      style={{
        margin: "0px 10px 10px 10px",
        borderRadius: "10px",
      }}
    >
      <Row className="row__card" justify="space-between">
        <Col className="col__breadcrumb">
          <Breadcrumb
            separator=">"
            style={{
              marginTop: "4px",
            }}
          >
            {breadcrumbItems}
          </Breadcrumb>
        </Col>

        <Row justify="space-between">
          {roles === "ROLE_ADMIN" && (
            <Col>
              <Link to="/training/create">
                <Button
                  type="primary"
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <PlusOutlined /> Create Training Event
                </Button>
              </Link>
            </Col>
          )}

          <Col style={{ marginLeft: "10px" }}>
            <Dropdown overlay={menu}>
              <Button>
                <MoreOutlined /> More
              </Button>
            </Dropdown>
          </Col>
        </Row>
      </Row>
    </Card>
  );
}

export default Breadcrumbs;
