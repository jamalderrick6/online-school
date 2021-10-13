import React from "react";
import Gallery from "react-photo-gallery";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80",
    width: 320,
    height: 300,
  },
  {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 320,
    height: 212,
  },
  {
    src: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 320,
    height: 220,
  },
  {
    src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 320,
    height: 212,
  },
  {
    src: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 320,
    height: 212,
  },
  {
    src: "https://images.unsplash.com/photo-1597589827703-f4b68eafa0ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 320,
    height: 212,
  },
];

class GalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="section gallery">
        <div className="container">
          <div className="wrapper">
            <Gallery photos={IMAGES} />
          </div>
        </div>
      </section>
    );
  }
}

export default GalleryComponent;
