import React from "react";
import Layer from "../Layer/Layer";

export default function Image({ image, showImage}) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="image rounded-2 overflow-hidden position-relative"
        onClick={() => showImage(image)}>
        <img src={image} className="w-100" alt="portfolio" />
        <Layer />
      </div>
    </div>
  );
}
