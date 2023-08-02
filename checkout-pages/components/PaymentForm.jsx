import React, { useEffect, useState } from "react";
import {
  getBundleApi,
  loadCheckoutForm,
  renderEmailCheckout,
} from "../services/init";

const CP_ENGINE_URL =
  process.env.NEXT_PUBLIC_MODE === "development"
    ? process.env.NEXT_PUBLIC_CP_ENGINE_URL_DEV
    : process.env.NEXT_PUBLIC_CP_ENGINE_URL;

function PaymentForm({ offer }) {
  const [apiInstance, setApiInstance] = useState(null);
  const [apiInitialized, setApiInitialized] = useState(false);

  const initPaywall = () => {
    let checkoutEngineVersion = "CP-EET_5_01-02-2023-anonuser";
    let est = apiInstance.getAllUrlParams().est;
    if (window.ep.pipaId.didLoggedIn()) {
      checkoutEngineVersion = "CP-EET_5_01-02-2023-logged-in";
    } else if (est) {
      checkoutEngineVersion = "CP-EET_5_01-02-2023-est";
    }
    window.offer_id = apiInstance.getAllUrlParams().o
      ? apiInstance.getAllUrlParams().o
      : "fs-1p1w-4p1w";
    ETUtils.epCheckout.load({
      selector: ".epcheckout-target",
      offer_id: window.offer_id,
      default_offer_id: "fs-1p1w-4p1w",
      checkCountryMessage: true,
      return_url: window.epSubs.getAllUrlParams().return_url
        ? window.epSubs.getAllUrlParams().return_url
        : "https://theepochtimes.com/",
      cp_engine_url: CP_ENGINE_URL,
      trackImpressions: true,
      checkoutEngineVersion: checkoutEngineVersion,
      callback_loaded: function () {
        loadCheckoutForm(offer);
        renderEmailCheckout();
      },
    });
    try {
      window.actionAfterThankYou = function () {
        window.UpgradeOffer.start();
      };
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getBundleApi().then(setApiInstance);
  }, []);

  useEffect(() => {
    if (apiInitialized) return;

    window.ep = window.ep || [];
    window.ep.push(
      ["config", "www.theepochtimes.com"], // set site_id
      ["url", [window.location.href]], // set the url parameter in 'Pages' of PIPA experience plan
      ["config", "dataDestination", "web_event_data"],
      ["config", "GAID", "UA-10465455-30"]
    );
  }, []);

  useEffect(() => {
    if (!apiInstance || apiInitialized || offer == null) return;
    initPaywall();
    setApiInitialized(true);
  }, [apiInstance, apiInitialized, offer]);

  return <div className="epcheckout-target px-0 px-md-0"></div>;
}

export default PaymentForm;
