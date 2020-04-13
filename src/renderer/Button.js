import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { Component } from "react";

class ConvertButton extends Component {
  //   state = {
  //     size: "large",
  //   };

  render() {
    // const { size } = this.state;

    return (
      <div>
        <Button type="primary" icon={<PlusOutlined />}>
          Add to Workspace
        </Button>
      </div>
    );
  }
}

export default ConvertButton;
