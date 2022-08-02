import React, { useState } from "react";
import { Divider, Card, Row, Col, Form, Input, Checkbox, Button } from "antd";
import CarouselImage from "./CarouselImage";
import Headers from "../header/Header";
import "./Login.css";

const Login = () => {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onFinish = () => {
    formValues;
  };

  return (
    <Card style={{ background: "#d2eefa" }}>
      <Card style={{ margin: 10, borderRadius: 12 }}>
        <Headers />
        <Divider style={{ margin: 0 }} />
        <Row>
          <Col span={14}>
            <CarouselImage />
          </Col>
          <Col span={8}>
            <Row>
              <Col span={14}>
                <h1 className="login_text">
                  Pelase enter your credential to access the system
                </h1>
              </Col>
            </Row>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Username"
                style={{ fontWeight: "bold" }}
                name="username"
                rules={[
                  { required: true, message: "Username is required" },
                  { max: 12, message: "Username must be max 12 characters" },
                  {
                    pattern: new RegExp(/^[a-zA-Z 0-9]+$/i),
                    message: "Username must be alphabets and numbers only",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your username"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                style={{ fontWeight: "bold" }}
                name="password"
                rules={[
                  { required: true, message: "Password is required" },
                  { min: 8, message: "Password must be at least 8 characters" },
                ]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item>
                <Row justify="space-between">
                  <Col>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                  </Col>

                  <Col>
                    <a className="login_form_forgot" href="">
                      Forgot password
                    </a>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: 150, background: "#40b3fb", border: "none" }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <div className="footer">
          <p className="copy_right">
            This product is licensed for Dataon Corporation
          </p>
          <p>&copy;1999 - 2022 DataOn Technology. All Rights Reserved</p>
        </div>
      </Card>
    </Card>
  );
};

export default Login;
