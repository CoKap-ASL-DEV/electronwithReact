import { Button, Radio } from "antd";
import { RetweetOutlined } from "@ant-design/icons";
import React, { Component } from "react";
class ExecButton extends Component {
  state = {
    size: "large",
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Button type="primary" icon={<RetweetOutlined />} size={size}>
          Generate Augmented Images
        </Button>
      </div>
    );
  }
}

export default ExecButton;
