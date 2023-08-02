import React from "react";

function RestaurantGcModal() {
  return (
    <div className="modal" id="restaurantgc-terms-popup">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h3>Get a $50 Gift Card</h3>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          {/* Modal body */}
          <div className="modal-body">
            <p>
              By partnering with Restaurant.com to support 'Reopening America',
              we are able to offer our subscribers $50 gift cards to be able to
              dine at local restaurants all across the country.
            </p>
            <p>
              You will immediately receive an email with your $50 gift card code
              that can be redeemed on Restaurant.com. Restaurant.com is the
              nation’s largest dining deals site with thousands of restaurants,
              merchants and online providers nationwide.{" "}
            </p>
            <p>
              *Minimum spend requirements and locations vary, and other
              restrictions apply.
            </p>
            <img
              src="https://cdn.epoch.cloud/assets/static_assets/restaurant-examples.png"
              className="w-100"
            />
          </div>

          {/* Modal footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-lg btn-block btn-primary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantGcModal;
