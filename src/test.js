import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";

const treeData = [
  {
    title: "0-0",
    key: "0-0",
    isLeaf: false,
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        isLeaf: false,
        children: [
          {
            title: "0-0-0-0",
            key: "0-0-0-0f",
            isLeaf: true,
          },
          {
            title: "0-0-0-1",
            key: "0-0-0-1f",
            isLeaf: true,
          },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        isLeaf: false,
        children: [
          {
            title: "0-0-1-0",
            key: "0-0-1-0f",
            isLeaf: true,
          },
          {
            title: "0-0-1-1",
            key: "0-0-1-1f",
            isLeaf: true,
          },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2f",
        isLeaf: true,
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    isLeaf: false,
    children: [
      {
        title: "0-1-0-0",
        key: "0-1-0-0f",
        isLeaf: true,
      },
      {
        title: "0-1-0-1",
        key: "0-1-0-1f",
        isLeaf: true,
      },
    ],
  },
  {
    title: "0-2",
    key: "0-2f",
    isLeaf: true,
  },
];

const dest = ["0-0-0-1f", "0-2f"];

class Test extends Component {
  render() {
    const result = dest.map((i) => {
      const filtering = treeData.filter(function traverse(item) {
        if (!item.isLeaf) {
          traverse(item.children);
        }
        if (item.key === i) {
          return true;
        } else {
          return false;
        }
      });

      if (filtering.length) {
        return filtering[0].isLeaf;
      } else null;
    });

    return (
      <div>
        <h1>"h1"</h1>
        {console.log(result)}
      </div>
    );
  }
}

export default Test;
