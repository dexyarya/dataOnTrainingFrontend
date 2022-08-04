import React, { useState } from "react";
import {
  Divider,
  Card,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Button,
  message,
} from "antd";
import CarouselImage from "./CarouselImage";
import Headers from "../header/Header";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    console.log(" formValues; ", formValues);

    axios
      .post("http://localhost:8080/api/auth/signin", {
        username: formValues.username,
        password: formValues.password,
      })
      .then((res) => {
        localStorage.setItem("roles", res.data.roles);
        navigate("/dashboard");
        message.success("Login Success");
      })
      .catch((err) => {
        console.log("err", err);
        message.error("Username or password is incorrect");
      });
  };

  return (
    <div>
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
              <Form layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                  label="Username"
                  style={{ fontWeight: "bold" }}
                  name="username"
                  rules={[
                    { required: true, message: "Username is required" },
                    {
                      max: 12,
                      message: "Username must be max 12 characters",
                    },
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
                    {
                      min: 8,
                      message: "Password must be at least 8 characters",
                    },
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
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                      >
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
                    style={{
                      width: 150,
                      background: "#40b3fb",
                      border: "none",
                    }}
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
    </div>
  );
};

export default Login;
