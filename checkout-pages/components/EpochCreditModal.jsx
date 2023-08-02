import React from "react";

function EpochCreditModal() {
  return (
    <div className="modal" id="epochcredit-terms-popup">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">
              Terms and Conditions for Epoch Credit
            </h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          {/* Modal body */}
          <div className="modal-body">
            <h2>1. Epoch Credit Balance and Redemption</h2>
            <p>
              Epoch Credit is brought to you by the Epoch Public Foundation. The
              amount of the Epoch Credit is automatically added to your account
              balance upon beginning the promotion. Epoch Credit may only be
              redeemed towards The Epoch Times subscription renewals and
              upgrades, which will be deducted from your account balance.{" "}
            </p>

            <h2>2. Limitations</h2>
            <p>
              Your Epoch Credit cannot be used for any products or services
              except for The Epoch Times subscription renewals and upgrades, and
              cannot be resold, transferred to others, or redeemed for cash.
            </p>

            <h2>3. Epoch Credit Balance Expiration</h2>
            <p>
              Your balance does not expire and may be applied to your The Epoch
              Times subscription renewals and upgrades any time.{" "}
            </p>
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

export default EpochCreditModal;
