export const getBundleApi = () =>
  new Promise((resolve, reject) => {
    const API_URI = process.env.NEXT_PUBLIC_BUNDLE_API_URL;
    const API_NAME = "epSubs";

    const script = document.createElement("script");
    script.src = API_URI;
    script.onload = () => {
      resolve(window[API_NAME]);
    };
    script.onerror = (error) => {
      reject(error);
    };
    document.body.appendChild(script);
  });

export async function renderEmailCheckout() {
  if ($.cookie("epoch_token")) {
    const res = await ETUtils.APIs.getUserBasicInfo({
      token: $.cookie("epoch_token"),
    });
    if (res.email) {
      $(".email-placeholder").html(
        `${res.email} <span class="change-account">(change)</span>`
      );
    } else {
      $(".email-wrapper").show();
    }
  } else if (
    $.cookie("e_pp") ||
    $.cookie("e_st") ||
    window.epSubs.getAllUrlParams().est
  ) {
    const res2 = await getEmailFromEst();
    if (res2) {
      $(".email-placeholder").html(
        `${res2} <span class="change-account">(change)</span>`
      );
      $("#email").val(res2);
    } else {
      $(".email-wrapper").show();
    }
  } else {
    $(".email-wrapper").show();
  }
}

async function getEmailFromEst() {
  try {
    if ($.cookie("e_pp")) {
      let pp = JSON.parse(atob($.cookie("e_pp")));
      return pp.email || "";
    } else if ($.cookie("e_st") || window.epSubs.getAllUrlParams().est) {
      let userEst = $.cookie("e_st")
        ? decodeURIComponent($.cookie("e_st"))
        : window.epSubs.getAllUrlParams().est;
      let ppRes = await ETUtils.APIs.prepareProfile({ est: userEst });
      if (ppRes.status == "ok") {
        return ppRes.data.email || "";
      }
    }
    return "";
  } catch (e) {
    console.log(e);
    return "";
  }
}

export const createBillingText = (offer) => {
  if (!offer) return;
  if (offer.billingTextMain && offer.billingTextDetail) {
    return `${offer.billingTextMain} ${offer.billingTextDetail}`;
  } else {
    return `$${offer.valueCharge / offer.planPeriod} per ${
      offer.planPeriodUnit
    } billed as $${offer.valueCharge} every ${offer.planPeriod} ${
      offer.planPeriodUnit
    }${offer.planPeriod > 1 ? "s" : ""}`;
  }
};

export const loadCheckoutForm = (offer) => {
  $(".epcheckout-target .epcheckout-content #cb-payment-cards").html(
    `<div class="credit-card-text">Credit Card</div>`
  );

  $(".epcheckout-target .epcheckout-content .tos-text").addClass("d-none");

  let node = $("<p></p>");
  let subscribingText = $("<span></span>");
  let termsAndConditions = $(
    "<a href='https://help.theepochtimes.com/hc/en-us/articles/360052271792-Term-of-Service-Digital-Subscription' class='tos-tos-link' target='_blank'>Terms &amp; Conditions</a>"
  );
  let offerDescription = $("<span></span>");

  node.append(subscribingText, termsAndConditions, offerDescription);

  $(".epcheckout-target .epcheckout-content .secure-badge").html(node);

  subscribingText.text(`By subscribing, you agree to the `);
  offerDescription.text(`. Your introductory offer rate is ${createBillingText(
    offer
  )}. 
      After ${offer.paymentDelay} the standard rate is $${
    offer.nextPlanValueCharge
  } every ${offer.nextPlanPeriod === 1 ? "" : offer.nextPlanPeriod} ${
    offer.nextPlanPeriodUnit
  }${offer.nextPlanPeriod > 1 ? "s" : ""}. 
      Cancel or pause anytime.`);

  $(".epcheckout-target .epcheckout-content .epcheckout").addClass(
    "px-0 px-md-3"
  );

  $(".email-wrapper").hide();

  $(".loader-spinner").hide();
  $(".epcheckout-target").show();
};
