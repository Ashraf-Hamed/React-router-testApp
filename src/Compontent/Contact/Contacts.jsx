import React from "react";


export default function Contacts() {
  return (
    <>
      <section className="contact min-vh-100 ">
        <div className="container  d-flex flex-column justify-content-center align-items-cente">
          <div className="head text-center ">
            <h1 className="text-uppercase mb-3 fs-1 fw-bolder">
            CONATCT SECTION
            </h1>
            <div class="underLine d-flex align-items-center justify-content-center mb-3">
              <div class="line me-3"></div>
              <i class="fa-solid fa-star"></i>
              <div class="line ms-3"></div>
            </div>
          </div>

          <form className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched">
          
          <input type="text"  id="userName" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative my-3 ng-pristine ng-valid ng-touched"/>
          
         
          <input type="text"  id="userAge" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative my-3 ng-pristine ng-valid ng-touched"/>
        
          <input type="email"  id="userEmail" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative my-3 ng-pristine ng-valid ng-touched"/>
          
          
          <input type="password"  id="userPassword" placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative my-3 ng-pristine ng-valid ng-touched"/>
          

          <button className="btn mt-4 text-white"> send Message </button>

          </form>

        </div>
      </section>
    </>
  );
}
