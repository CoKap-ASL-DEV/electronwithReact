import ImageGallery from "react-image-gallery";
import React, { Component } from "react";
import "./image-gallery.scss";

const images = [
  {
    original: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    thumbnail: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
  },
  {
    original: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    thumbnail: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
  },
  {
    original: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
    thumbnail: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
  },
];

class MyGallery extends Component {
  render() {
    return <ImageGallery items={images} showThumbnails={true} />;
  }
}

export default MyGallery;
