import React from "react";

function Transition() {
  return (
    <>
      <div className="transition-icon d-flex justify-content-center mt-4"></div>
      <div className="transition-text d-flex justify-content-center align-items-center mt-2 mb-4">
        <img
          src="https://cdn.epoch.cloud/assets/static_assets/rw-lock-icon3.png"
          className="float-left mr-1"
          style={{ maxWidth: "17px" }}
        />
        <span className="">Secure Express Checkout</span>
      </div>

      <div className="loader-spinner">
        <div className="loader">Loading...</div>
      </div>
    </>
  );
}

export default Transition;
