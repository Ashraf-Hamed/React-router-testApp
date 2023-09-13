import React from "react";
import img from "../../assest/avataaars.svg";


export default function FramWork() {
  return (
    <>
     <div className="frameWork min-vh-100 pt-5">
     <div className="container  ">
     <div className="content d-flex flex-column text-center text-white py-5 mt-5">
       <img src={img} className="w-25 mx-auto mb-4" alt="" />
       <h1 className="text-uppercase mb-3 fs-1 fw-bolder">
         START FRAMEWORK
       </h1>
       <div class="underLine d-flex align-items-center justify-content-center mb-3">
         <div class="line me-3"></div>
         <i class="fa-solid fa-star"></i>
         <div class="line ms-3"></div>
       </div>
       <p>Graphic Artist - Web Designer - Illustrator</p>
     </div>
   </div>
     </div>
    </>
  );
}
