import { Button, Radio } from "antd";
import { DownloadOutlined, MinusOutlined } from "@ant-design/icons";
import React, { Component } from "react";
class RemoveButton extends Component {
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
        <Button
          type="primary"
          shape="circle"
          icon={<MinusOutlined />}
          size={size}
        ></Button>
      </div>
    );
  }
}

export default RemoveButton;
