import React from "react";

function GiftCardAmzModal() {
  return (
    <div className="modal" id="giftcard-amz-terms-popup">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">
              Terms and Conditions for Gift Card offer
            </h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          {/* Modal body */}
          <div className="modal-body">
            <ul className="pl-3 ml-3">
              <li>
                Amazon.com or Home Depot Gift Card will be unlocked upon first
                renewal.
              </li>
              <li>This is a limited time offer, while supplies last.</li>
              <li>
                Offer is non-transferable, may not be resold, and may not be
                combined with other offers.
              </li>
              <li>Offer limited to one per customer and account.</li>
              <li>Offer limited to U.S. residents only.</li>
              <li>Offer valid for new subscribers only.</li>
              <li>Amazon.com is not a sponsor of this promotion.</li>
              <li>
                Except as required by law, Amazon.com Gift Cards ("GCs") cannot
                be transferred for value or redeemed for cash.
              </li>
              <li>
                GCs may be used only for purchases of eligible goods at
                Amazon.com or certain of its affiliated websites.
              </li>
              <li>
                For complete terms and conditions, see www.amazon.com/gc-legal.
                GCs are issued by ACI Gift Cards, Inc., a Washington
                corporation.
              </li>
              <li>
                All Amazon ®, ™ & © are IP of Amazon.com, Inc. or its
                affiliates.
              </li>
              <li>No expiration date or service fees.</li>
              <li>
                To benefit from this offer, you must subscribe to this
                Amazon.com Gift Card offer and not other offers by The Epoch
                Times.{" "}
              </li>
              <li>
                The Epoch Times reserves the right to deny Amazon.com Gift Card
                issuance without stating the reason.
              </li>
            </ul>
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

export default GiftCardAmzModal;
