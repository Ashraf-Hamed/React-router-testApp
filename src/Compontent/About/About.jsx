import React from "react";

export default function About() {
  return (
    <div className="about">
    <div className="container  min-vh-100  text-white d-flex flex-column justify-content-center align-items-center ">
      <h1 className="text-uppercase mb-3 fs-1 fw-bolder">ABOUT COMPONENT</h1>
      <div class="underLine d-flex align-items-center justify-content-center mb-3">
        <div class="line me-3"></div>
        <i class="fa-solid fa-star"></i>
        <div class="line ms-3"></div>
      </div>

      <div className="row">
        <div className="col-md-5 offset-1">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </div>
        <div className="col-md-6">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </div>
      </div>
    </div>
    </div>
  );
}
