window.checkoutUILogic = {
  init: () => {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const offerid = urlParams.get("o") ? urlParams.get("o") : "fs-1p1w-2_49p1w";
    const supportWrapper = document.getElementById("support-wrapper");
    const topMobileWrapper = document.getElementById("top-mobile-wrapper");
    const limitedTimeOfferMob = document.getElementById(
      "limited-time-offer-mob"
    );
    const imageWrapperMob = document.getElementById("image-wrapper-mob");
    const textRightNotice = document.getElementById("text-right-notice");
    const mobilePaymentInfoWrapper = document.getElementById(
      "mobile-payment-info-wrapper"
    );
    const productDetailsDesc = document.getElementById("product-details-desc");
    const limitedTimeOffer = document.getElementById("limited-time-offer");
    const reportList = document.getElementById("report-list");
    const imageWrapper = document.getElementById("image-wrapper");
    const textNotice = document.getElementById("text-notice");
    const paymentInfoWrapper = document.getElementById("payment-info-wrapper");

    if (offerid === "fs-free2m-9_99m" || offerid === "fs-free1y-99y") {
      supportWrapper.innerHTML = `                                  
            <div class="support-text">
                <div class="top">Thank you for supporting us on Patreon!</div>
                <div class="descr">
                    We are now moving to Epoch TV, which is our solution to Big Tech censorship. Join us now to watch our exclusive programming without censorship and help us continue to report news in Truth and Tradition. Thank you for your support!
                </div>
            </div>
        `;
    } else {
      supportWrapper.innerHTML = `
            <div class="support-text">
                <div class="top">YOUR SUPPORT FOR TRUTHFUL JOURNALISM IS IMPORTANT</div>
                <div class="descr">
                    Your subscription will not only provide accurate news, but will also contribute
                    to the revival of American journalism and help safeguard our freedoms and
                    democracy for future generations. Thank you for your support!
                </div>
            </div>
        `;
    }

    if (offerid === "vs-4_99m" || offerid === "vs-49y") {
      topMobileWrapper.innerHTML = null;
    }

    if (
      [
        "fs-1p1w-2_49p1w",
        "fs-1p1w-2_49p1w-bf",
        "fs-1p1w-2_49p1w-news",
        "fs-1_50p1w-4p1w-bundle",
        "fs-1p1w-4p1w",
        "fs-40y-99y",
      ].indexOf(offerid) > -1
    ) {
      limitedTimeOfferMob.innerHTML = `
            <div class="top">
                Limited-time Offer:<br> <strong>2 Free Gifts</strong> </br>valued at $20
            </div>
        `;
      limitedTimeOffer.innerHTML = `
            <div class="top">
            Limited-time Offer: <strong>2 Free Gifts</strong> valued at $20
            </div>
        `;
    } else {
      limitedTimeOfferMob.innerHTML = `
            <div class="top">
                Limited-time Offer:</br> <strong>2 Free Gifts</strong></br> valued at $<span class="total-gifts-value price-value"></span>
            </div>
        `;
      limitedTimeOffer.innerHTML = `
            <div class="top">
            Limited-time Offer: <strong>2 Free Gifts</strong> valued at $20
            </div>
        `;
    }

    if (offerid === "fs-1p1w-2_49p1w") {
      imageWrapperMob.innerHTML = `
            <div class="row justify-content-center align-items-center">
                <div class="col-5 px-1">
                    <img class="w-100 d-block img-fluid p-0" src="./static/cp-eet_4/src/assets/img/midterm_white_min.png" alt="" class="" />
                </div>
                <div class="col-5 px-1">
                    <img class="w-100 d-block img-fluid p-0" src="./static/cp-eet_4/src/assets/img/votesecure_black_min.png" alt="infraplan" class="" />
                </div>
            </div>
        `;
      const firstReport = document.createElement("li");
      firstReport.innerHTML = `Special Report: <i>Will the House and Senate Flip? Decision 2022</i> (digital)`;
      reportList.appendChild(firstReport);

      const secondReport = document.createElement("li");
      secondReport.innerHTML = `Special Report: <i>Election Integrity - Is Your Vote Secure?</i> (digital)`;
      reportList.appendChild(secondReport);

      imageWrapper.innerHTML = `
        <div class="col-5">
            <img src="./static/cp-eet_4/src/assets/img/midterm_white_min.png" alt="infraplan" class="d-block w-100 img-fluid">
        </div>
        <div class="col-5">
            <img src="./static/cp-eet_4/src/assets/img/votesecure_black_min.png" alt="infraplan" class="d-block w-100 img-fluid">
        </div>
        `;
    } else if (
      [
        "fs-1p1w-2_49p1w-bf",
        "fs-1p1w-2_49p1w-news",
        "fs-1_50p1w-4p1w-bundle",
        "fs-1p1w-4p1w",
        "fs-40y-99y",
      ].indexOf(offerid) > -1
    ) {
      imageWrapperMob.innerHTML = `
            <div class="row justify-content-center align-items-center">
                <div class="col-5 px-1">
                    <img class="w-100 d-block img-fluid p-0" src="./static/cp-eet_4/src/assets/img/vaccine_white_min.png" alt="" class="" />
                </div>
                <div class="col-5 px-1">
                    <img class="w-100 d-block img-fluid p-0" src="./static/cp-eet_4/src/assets/img/foodcrisis_black_min.png" alt="infraplan" class="" />
                </div>
            </div>
        `;
      const firstReport = document.createElement("li");
      firstReport.innerHTML = `Special Report: <i>Investigating the Vaccine</i> (digital)`;
      reportList.appendChild(firstReport);

      const secondReport = document.createElement("li");
      secondReport.innerHTML = `Special Report: <i>The Coming Food Crisis and How to Prepare for It</i> (digital)`;
      reportList.appendChild(secondReport);

      imageWrapper.innerHTML = `
            <div class="col-5">
                <img src="./static/cp-eet_4/src/assets/img/vaccine_white_min.png" alt="infraplan" class="d-block w-100 img-fluid">
            </div>
            <div class="col-5">
                <img src="./static/cp-eet_4/src/assets/img/foodcrisis_black_min.png" alt="infraplan" class="d-block w-100 img-fluid">
            </div>
        `;
    } else if (offerid.includes("bordercris-d")) {
      imageWrapperMob.innerHTML = `
            <div class="row justify-content-center align-items-center">
                <div class="col-12 px-1">
                    <img class="w-100 d-block img-fluid p-0" src="./static/cp-eet_4/src/assets/img/bordersec_d_combo_min.png" alt="" class="" />
                </div>
            </div>
        `;
      const firstReport = document.createElement("li");
      firstReport.innerHTML = `Special Report: <i>The Border Crisis and America's Fate</i> (digital)`;
      reportList.appendChild(firstReport);

      const secondReport = document.createElement("li");
      secondReport.innerHTML = `Special Feature Program: Border Deception`;
      reportList.appendChild(secondReport);

      imageWrapper.innerHTML = `
            <div class="col-12 pt-2">
                <img src="./static/cp-eet_4/src/assets/img/bordersec_d_combo_min.png" alt="infraplan" class="d-block w-100 img-fluid">
            </div>
        `;
    } else {
      imageWrapperMob.innerHTML = `
            <div class="row justify-content-center align-items-center">
                <div class="col-5 px-1">
                    <img class="w-100 d-block img-fluid p-0" src="./static/cp-eet_4/src/assets/img/midterm_white_min.png" alt="" class="" />
                </div>
                <div class="col-5 px-1">
                    <img class="w-100 d-block img-fluid p-0" src="./static/cp-eet_4/src/assets/img/votesecure_black_min.png" alt="infraplan" class="" />
                </div>
            </div>
        `;

      const firstReport = document.createElement("li");
      firstReport.innerHTML = `Special Report: <i>Will the House and Senate Flip? Decision 2022</i> (digital)`;
      reportList.appendChild(firstReport);

      const secondReport = document.createElement("li");
      secondReport.innerHTML = `Special Report: <i>Election Integrity - Is Your Vote Secure?</i> (digital)`;
      reportList.appendChild(secondReport);

      imageWrapper.innerHTML = `
            <div class="col-5">
                <img src="./static/cp-eet_4/src/assets/img/midterm_white_min.png" alt="infraplan" class="d-block w-100 img-fluid">
            </div>
            <div class="col-5">
                <img src="./static/cp-eet_4/src/assets/img/votesecure_black_min.png" alt="infraplan" class="d-block w-100 img-fluid">
            </div>
        `;
    }

    if (offerid.includes("bordercris-d")) {
      textRightNotice.innerText =
        "*Please note that only the digital version of the Special Report is available and you will receive it by email.";
      textNotice.innerText =
        "*Please note that only the digital version of the Special Report is available and you will receive it by email.";
    } else {
      textRightNotice.innerText = "You will receive the gifts by email.";
      textNotice.innerText = "You will receive the gifts by email.";
    }

    if (
      [
        "fs-1p1w-2_49p1w",
        "fs-1p1w-2_49p1w-bf",
        "fs-1p1w-2_49p1w-news",
        "fs-1_50p1w-4p1w-bundle",
        "fs-1p1w-4p1w",
      ].indexOf(offerid) > -1
    ) {
      mobilePaymentInfoWrapper.innerHTML = `
            <div class="col-12 mobile-payment-info mobile next">
                Your payment method will automatically be charged the introductory offer rate of 
                <label class="price-value"></label> every <label class="frequency-value"></label> 
                for <span class="payment-delay-text"></span>.
                After <span class="payment-delay-text"></span>
                the standard rate of $<span class="value-digital-sub"></span> every <label class="frequency-value"></label>, 
                starting on <label class="date-value"></label><label class="weekly-rate-value"></label>. 
                You can cancel anytime.
                <p class="total-value">
                    REGULAR CHARGE ($<span class="value-digital-sub"></span>) + GIFT VALUE ($<span class="total-gifts-value"></span>) is <span class="today-total"><span class="crossed-red-thin-strike">$<span class="value-total"></span></span> </span> &nbsp; $<label class="today-total-value"></label>
                </p>
            </div>
        `;
      paymentInfoWrapper.innerHTML = `
        <p class="next">
            Your payment method will automatically be charged the introductory offer rate of 
            <label class="price-value"></label> every <label class="frequency-value"></label> 
            for <span class="payment-delay-text"></span>.
            After <span class="payment-delay-text"></span>
            the standard rate of $<span class="value-digital-sub"></span> every <label class="frequency-value"></label>, 
            starting on <label class="date-value"></label><label class="weekly-rate-value"></label>. 
            You can cancel anytime.
        </p>
        `;
    } else if (offerid === "fs-40y-99y") {
      mobilePaymentInfoWrapper.innerHTML = `
            <div class="col-12 mobile-payment-info mobile next">
                Your payment method will automatically be charged the introductory offer rate of 
                $<label class="today-total-value"></label> for the first <label class="frequency-value"></label>.
                Starting on <label class="date-value"></label>, the rate will become $<span class="value-digital-sub"></span>/<label class="frequency-value"></label>. 
                You can cancel anytime.
                <p class="total-value">
                    REGULAR CHARGE ($<span class="value-digital-sub"></span>) + GIFT VALUE ($<span class="total-gifts-value"></span>) is <span class="today-total"><span class="crossed-red-thin-strike">$<span class="value-total"></span></span> </span> &nbsp; $<label class="today-total-value"></label>
                </p>
            </div>
        `;
      paymentInfoWrapper.innerHTML = `
            <div class="col-12 mobile-payment-info mobile next">
                Your payment method will automatically be charged the introductory offer rate of 
                $<label class="today-total-value"></label> for the first <label class="frequency-value"></label>.
                Starting on <label class="date-value"></label>, the rate will become $<span class="value-digital-sub"></span>/<label class="frequency-value"></label>. 
                You can cancel anytime.
                <p class="total-value">
                    REGULAR CHARGE ($<span class="value-digital-sub"></span>) + GIFT VALUE ($<span class="total-gifts-value"></span>) is <span class="today-total"><span class="crossed-red-thin-strike">$<span class="value-total"></span></span> </span> &nbsp; $<label class="today-total-value"></label>
                </p>
            </div>
        `;
    } else if (offerid.includes("bordercris-d")) {
      mobilePaymentInfoWrapper.innerHTML = `
            <div class="col-12 mobile-payment-info mobile next">
                After <span class="payment-delay-text"></span>, your payment method will be automatically charged <label class="price-value"></label> every <label class="frequency-value"></label>, starting on <label class="date-value"></label><label class="weekly-rate-value"></label>. You can cancel anytime.
                <p class="total-value">
                    REGULAR CHARGE ($<span class="value-digital-sub"></span>) + GIFT VALUE ($<span class="total-gifts-value"></span>) is <span class="today-total"><span class="crossed-red-thin-strike">$<span class="value-total"></span></span> </span> &nbsp; $<label class="today-total-value"></label>
                </p>
            </div>
        `;
      paymentInfoWrapper.innerHTML = `
            <p class="next">
                After <span class="payment-delay-text"></span>, your payment method will be automatically charged <label class="price-value"></label> every <label class="frequency-value"></label>, starting on <label class="date-value"></label><label class="weekly-rate-value"></label>. You can cancel anytime.
                <div  class="savings">
                </label>
            </p>
        `;
    } else {
      mobilePaymentInfoWrapper.innerHTML = `
            <div class="col-12 mobile-payment-info mobile next">
                Your payment method will automatically be charged the introductory offer rate of 
                <label class="price-value"></label> every <label class="frequency-value"></label> 
                for <span class="payment-delay-text"></span>.
                After <span class="payment-delay-text"></span>
                the standard rate of $<span class="value-digital-sub"></span> every <label class="frequency-value"></label>, 
                starting on <label class="date-value"></label><label class="weekly-rate-value"></label>. 
                You can cancel anytime.
                <p class="total-value">
                    REGULAR CHARGE ($<span class="value-digital-sub"></span>) + GIFT VALUE ($<span class="total-gifts-value"></span>) is <span class="today-total"><span class="crossed-red-thin-strike">$<span class="value-total"></span></span> </span> &nbsp; $<label class="today-total-value"></label>
                </p>
            </div>
        `;
      paymentInfoWrapper.innerHTML = `
            <p class="next">
                Your payment method will automatically be charged the introductory offer rate of 
                <label class="price-value"></label> every <label class="frequency-value"></label> 
                for <span class="payment-delay-text"></span>.
                After <span class="payment-delay-text"></span>
                the standard rate of $<span class="value-digital-sub"></span> every <label class="frequency-value"></label>, 
                starting on <label class="date-value"></label><label class="weekly-rate-value"></label>. 
                You can cancel anytime.
            </p>
        `;
    }

    if (
      [
        "fs-1p1w-2_49p1w",
        "fs-1p1w-2_49p1w-bf",
        "fs-1p1w-2_49p1w-news",
        "fs-1p1w-4p1w",
      ].indexOf(offerid) > -1
    ) {
      productDetailsDesc.innerHTML = `
            <strong class="digital-reminder" style="text-transform:uppercase;">Digital Subscription: </strong>
            <span class="weekly-price">$1/week</span>
            <span class="bill-price">(billed as $4 every 4 weeks)</span>
            <p class="today today-price">
                You will be charged <span class="today-total float-right">$<label class="today-total-value"></label></span>
            </p>
        `;
    } else if (offerid === "fs-1_50p1w-4p1w-bundle") {
      productDetailsDesc.innerHTML = `
            <strong class="digital-reminder" style="text-transform:uppercase;">Digital Subscription: </strong>
            <span class="weekly-price-s">$1.5/week</span>
            <span class="bill-price">(billed as $6 every 4 weeks)</span>
            <p class="today today-price">
                You will be charged <span class="today-total float-right">$<label class="today-total-value"></label></span>
            </p>
        `;
    } else {
      productDetailsDesc.innerHTML = `
            <strong class="digital-reminder" style="text-transform:uppercase;">Digital Subscription: <span class="payment-delay-text"></span></strong>
            <p class="today today-price">
                You will be charged <span class="today-total float-right">$<label class="today-total-value"></label></span>
            </p>
        `;
    }
  },
};
