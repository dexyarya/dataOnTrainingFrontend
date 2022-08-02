import React from "react";
import { Row, Col, Image, Select } from "antd";
import image1 from "../../assets/logo2.png";
import "./Header.css";
const Logo = image1;
const { Option } = Select;

const Header = () => {
  return (
    <Row justify="space-around" align="stretch">
      <Col>
        <Image src={Logo} className="logo" width={150} />
      </Col>
      <Col flex={1}>
        <Col>
          <p className="nav_desc">Human Resources Information System</p>
        </Col>
        <Col>
          <p className="nav_title">SunFish 7</p>
        </Col>
      </Col>
      <Col>
        <Select
          bordered={false}
          labelInValue
          defaultValue={{
            value: " English",
            label: " English (En)",
          }}
          style={{
            width: 136,
          }}
        >
          <Option value=" English"> English (En)</Option>
          <Option value="Indonesia">Indonesia (Ind)</Option>
        </Select>
      </Col>
    </Row>
  );
};

export default Header;
