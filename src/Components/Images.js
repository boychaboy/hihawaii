import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import { render } from "react-dom";
import { photos } from "./photos.js";

class Images extends Component {
    
  render() {
    const BasicRows = () => <Gallery photos={photos} />;
    return (
        <section id='images'>
            <BasicRows/>
        </section>
    );
  }
}

export default Images;
