import React, { useState } from "react";
import { createBillingText } from "../services/init";

function OfferInfo({ offer, offerId }) {
  const [isExpand, setIsExpand] = useState(false);

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="offer-info-container p-3 my-4 d-block mx-auto">
      <div className="email-placeholder"></div>
      <div className="offer-info-header my-3 d-flex align-items-baseline">
        <div className="desktop-wrapper d-none d-md-block w-100">
          <span className="access-text" style={{ whiteSpace: "pre-wrap" }}>
            Full Digital Access
          </span>
          <span className="gift-text" style={{ whiteSpace: "pre-wrap" }}>
            {" "}
            + 2 gifts (${offer?.giftValueSum} value)
          </span>
          <div
            onClick={toggleExpand}
            className={`expand-info align-self-center ml-auto ${
              isExpand ? "showing" : ""
            }`}
          ></div>
        </div>
        <div className="mobile-wrapper d-md-none d-block w-100">
          <div className="access-text" style={{ whiteSpace: "pre-wrap" }}>
            Full Digital Access
          </div>
          <div
            onClick={toggleExpand}
            className={`expand-info align-self-center ml-auto ${
              isExpand ? "showing" : ""
            }`}
          ></div>
          <div className="gift-text" style={{ whiteSpace: "pre-wrap" }}>
            + 2 gifts (${offer?.giftValueSum} value)
          </div>
        </div>
      </div>

      <div className="offer-info-price-detail mt-2 mb-4">
        <b>{createBillingText(offer)}</b>
        {". "}
        <span>
          {`After ${offer.paymentDelay} the standard rate is $${
            offer.nextPlanValueCharge
          } every ${offer.nextPlanPeriod === 1 ? "" : offer.nextPlanPeriod} ${offer.nextPlanPeriodUnit}${
            offer.nextPlanPeriod > 1 ? "s" : ""
          }.`}{" "}
        </span>
        Cancel anytime.
      </div>

      <div
        className={`offer-info-expanded ${!isExpand ? "toggled" : ""}`}
      >
        <ul className="offer-info-list my-0">
          <li className="my-0">
            <b>Unlimited access</b> to News, EpochTV, Health, and Games
          </li>
          <li className="my-2">
            <b>Exclusive</b> documentaries and special reports
          </li>
          <li className="my-2">
            <b>Daily briefings</b> and breaking news alerts
          </li>
          <li className="my-2">
            <b>Web and app</b> access on any device
          </li>
          {offerId === "fs-1p1w-4p1w" && (
            <>
              <li className="my-2">
                <b>BONUS:</b>{" "}
                <i>The Coming Food Crisis and How to Prepare For It</i> (Special
                Report - <b>$10 Value</b>)
              </li>
              <li className="my-0">
                <b>BONUS:</b> <i>Investigating The Vaccine</i> (Special Report -{" "}
                <b>$10 Value</b>)
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="separator-grey">
        <hr className="my-3" />
      </div>

      <div className="offer-info-charge mt-2 mb-3 d-flex align-items-center">
        <span className="charge-text">You will be charged</span>
        <span className="charge-price ml-auto">$4</span>
      </div>
    </div>
  );
}

export default OfferInfo;
