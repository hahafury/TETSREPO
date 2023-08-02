<?php
$offerid = (isset($_GET['o'])) ? $_GET['o'] : 'fs-1p1w-4p1w';
$gift = (isset($_GET['gift'])) ? $_GET['gift'] : 'regular';

$expiredOffers = ['fs-1p4m-9_99m_10amz', 'fs-1p4m-9_99m_loyalty100'];
if (in_array($offerid, $expiredOffers)) {
    header('Location: ./?page=subhome&expired');
}
$IS_SANDBOX = false;
$IS_LOCALHOST = false;
$cpEngineUrl = "https://checkout.theepochtimes.com/cached/checkout-eet-digital-inline.html";
if ($_SERVER['HTTP_HOST'] == 'dev-checkout.theepochtimes.com') {
    $IS_SANDBOX = true;
    $cpEngineUrl = "https://dev-checkout.theepochtimes.com/p/?page=checkout-eet-digital-inline";
} else if ($_SERVER['HTTP_HOST'] == 'localhost') {
    $IS_LOCALHOST = true;
    $cpEngineUrl = "http://localhost/checkout/www/checkout.theepochtimes.com/p/?page=checkout-eet-digital-inline";
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta name="robots" content="noindex, noarchive, noimageindex" />
    <title>The Epoch Times</title>
    <link rel="stylesheet" type="text/css" href="./static/cp-eet_5/src/bootstrap.min.css">
    <link rel="stylesheet" href="https://subs.youmaker.com/lib/template.css" />
    <link rel="stylesheet" type="text/css" href="./static/<?php print $page_config['name']; ?>/src/styles-custom.css">
    <link rel="shortcut icon" href="./static/<?php print $page_config['name']; ?>/src/assets/img/etfavicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
</head>

<div class="header d-flex align-items-center justify-content-center">
    <div class="logo">
        <img src="./static/<?php print $page_config['name']; ?>/src/assets/img/logo_eet.svg" alt="" class="m-auto img-responsive" />
    </div>

</div>


<body class="body">

    <div class="offer-info-container p-3 my-4 d-block mx-auto">
        <div class="email-placeholder">
            
        
        </div>
        <div class="offer-info-header my-3 d-flex align-items-baseline">
            <div class="desktop-wrapper d-none d-md-block w-100">
                <span class="access-text" style="white-space:pre-wrap;">Full Digital Access</span>
                <span class="gift-text" style="white-space:pre-wrap;"> + 2 gifts ($20 value)</span>
                <div class="expand-info align-self-center ml-auto"></div>
            </div>
            <div class="mobile-wrapper d-md-none d-block w-100">
                <div class="access-text" style="white-space:pre-wrap;">Full Digital Access</div>
                <div class="expand-info align-self-center ml-auto"></div>
                <div class="gift-text" style="white-space:pre-wrap;">+ 2 gifts ($20 value)</div>
                
            </div>

        </div>

        <div class="offer-info-price-detail mt-2 mb-4">
            <span class="crossed-red-simple">$4</span> <b>$1 per week</b> billed every 4 weeks for your first year. Cancel anytime.
        </div>

        <div class="offer-info-expanded">
            <ul class="offer-info-list my-0">
                <li class="my-0">
                    <b>Unlimited access</b> to News, EpochTV, Health, and Games
                </li>
                <li class="my-2">
                    <b>Exclusive</b> documentaries and special reports
                </li>
                <li class="my-2">
                    <b>Daily briefings</b> and breaking news alerts
                </li>
                <li class="my-2">
                    <b>Web and app</b> access on any device
                </li>
                <li class="my-2">
                    <b>BONUS:</b> <i>The Coming Food Crisis and How to Prepare For It</i> (Special Report - <b>$10 Value</b>)
                </li>
                <li class="my-0">
                    <b>BONUS:</b> <i>Investigating The Vaccine</i> (Special Report - <b>$10 Value</b>)
                </li>
            </ul>
            
        </div>

        <div class="separator-grey">
            <hr class="my-3">
        </div>

        <div class="offer-info-charge mt-2 mb-3 d-flex align-items-center">
            <span class="charge-text">You will be charged</span>
            <span class="charge-price ml-auto">$4</span>
        </div>

    </div>

    <div class="transition-icon d-flex justify-content-center mt-4">

    </div>
    <div class="transition-text d-flex justify-content-center align-items-center mt-2 mb-4">
        <img src="https://cdn.epoch.cloud/assets/static_assets/rw-lock-icon3.png" class="float-left mr-1" style="max-width:17px;">
        <span class="">Secure Express Checkout</span>
    </div>

    <div class="loader-spinner">
        <div class="loader">Loading...</div>
    </div>
    <div class="epcheckout-target px-0 px-md-0">

    </div>

    <div class="py-3" id="cp-footer">
        <div class="container px-0">
            Need help? Call us at <a href="tel: 8336991888">(833) 699-1888</a> or visit our <a href="http://help.theepochtimes.com/" target="_blank">Help Center</a>
            <br />Copyright © 2023 The Epoch Times
        </div>
    </div>

    <div class="modal" id="giftcard-terms-popup">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Terms and Conditions for Gift Card offer</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

            </div>
        </div>
    </div>

    <div class="modal" id="giftcard-amz-terms-popup">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Terms and Conditions for Gift Card offer</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <ul class="pl-3 ml-3">
                        <li>Amazon.com or Home Depot Gift Card will be unlocked upon first renewal.</li>
                        <li>This is a limited time offer, while supplies last.</li>
                        <li>Offer is non-transferable, may not be resold, and may not be combined with other offers.</li>
                        <li>Offer limited to one per customer and account.</li>
                        <li>Offer limited to U.S. residents only.</li>
                        <li>Offer valid for new subscribers only.</li>
                        <li>Amazon.com is not a sponsor of this promotion.</li>
                        <li>Except as required by law, Amazon.com Gift Cards ("GCs") cannot be transferred for value or redeemed for cash.</li>
                        <li>GCs may be used only for purchases of eligible goods at Amazon.com or certain of its affiliated websites.</li>
                        <li>For complete terms and conditions, see www.amazon.com/gc-legal. GCs are issued by ACI Gift Cards, Inc., a Washington corporation.</li>
                        <li>All Amazon ®, ™ & © are IP of Amazon.com, Inc. or its affiliates.</li>
                        <li>No expiration date or service fees.</li>
                        <li>To benefit from this offer, you must subscribe to this Amazon.com Gift Card offer and not other offers by The Epoch Times. </li>
                        <li>The Epoch Times reserves the right to deny Amazon.com Gift Card issuance without stating the reason.</li>
                    </ul>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-lg btn-block btn-primary" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>


    <div class="modal" id="epochcredit-terms-popup">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">Terms and Conditions for Epoch Credit</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <h2>1. Epoch Credit Balance and Redemption</h2>
                    <p>Epoch Credit is brought to you by the Epoch Public Foundation. The amount of the Epoch Credit is automatically added to your account balance upon beginning the promotion. Epoch Credit may only be redeemed towards The Epoch Times subscription renewals and upgrades, which will be deducted from your account balance. </p>

                    <h2>2. Limitations</h2>
                    <p>Your Epoch Credit cannot be used for any products or services except for The Epoch Times subscription renewals and upgrades, and cannot be resold, transferred to others, or redeemed for cash.</p>

                    <h2>3. Epoch Credit Balance Expiration</h2>
                    <p>Your balance does not expire and may be applied to your The Epoch Times subscription renewals and upgrades any time. </p>

                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-lg btn-block btn-primary" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>

    <div class="modal" id="restaurantgc-terms-popup">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h3>Get a $50 Gift Card</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <p>By partnering with Restaurant.com to support 'Reopening America', we are able to offer our subscribers $50 gift cards to be able to dine at local restaurants all across the country.</p>
                    <p>You will immediately receive an email with your $50 gift card code that can be redeemed on Restaurant.com. Restaurant.com is the nation’s largest dining deals site with thousands of restaurants, merchants and online providers nationwide. </p>
                    <p>*Minimum spend requirements and locations vary, and other restrictions apply.</p>
                    <img src="https://cdn.epoch.cloud/assets/static_assets/restaurant-examples.png" class="w-100">

                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-lg btn-block btn-primary" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>

    <script src="../p/shared/jquery.min.js"></script>
    <script src="https://services.epoch.cloud/public-labs/epoch-ai/et_utils.js"></script>

    <script>
        // Google Analytics
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-10465455-30', 'auto');
        ga('set', 'pageview', '/p/?page=<?php print $_GET['page']; ?>');
        ga('set', 'location', '/p/?page=<?php print $_GET['page']; ?>');

        var abtest_id = false;
        if ($('meta[name="page:abtest_id"]').length > 0) {
            abtest_id = $('meta[name="page:abtest_id"]').attr('content');
            ga('set', 'dimension14', abtest_id);
        }

        ga('send', 'pageview', '/p/?page=<?php print $_GET['page']; ?>');
    </script>
    <script>
        $(document).ready(function() {
            init_pipa_paywall();



        });

        function init_pipa_paywall() {
            window.ep = window.ep || [];

            window.ep.push(
                ["config", "www.theepochtimes.com"], // set site_id
                ["url", [window.location.href]], // set the url parameter in 'Pages' of PIPA experience plan
                ["config", "dataDestination", "web_event_data"],
                ["config", "GAID", "UA-10465455-30"]
            );

            // load sdk of PIPA
            const apiHost = "https://subs.theepochtimes.com/lib/api.bundle.js?execute=false";
            $.ajax({
                    'url': apiHost,
                    'dataType': 'script',
                    'cache': true,
                    'timeout': 5000
                })
                .done(async function() {
                    console.log("[LOADING PIPA SUCCESS] hostUrl=", apiHost);
                    if (window.epSubs.isMobileDevice()) {
                        $('body').addClass("mobile");
                    } else {
                        $('body').addClass("desktop");
                    }

                    let checkoutEngineVersion = 'CP-EET_5_01-02-2023-anonuser';
                    let cpEngineUrl = "<?php echo $cpEngineUrl; ?>";
                    let email = '';
                    let est = window.epSubs.getAllUrlParams().est;

                    if (window.ep.pipaId.didLoggedIn()) {
                        checkoutEngineVersion = 'CP-EET_5_01-02-2023-logged-in'; 
                    } else if (est) {
                        checkoutEngineVersion = 'CP-EET_5_01-02-2023-est';
                    }


                    window.offer_id = (window.epSubs.getAllUrlParams().o) ? window.epSubs.getAllUrlParams().o : "fs-1p1w-4p1w";
                    ETUtils.epCheckout.load({
                        selector: ".epcheckout-target",
                        offer_id: window.offer_id,
                        default_offer_id: "fs-1p1w-4p1w",
                        checkCountryMessage: true,
                        return_url: (window.epSubs.getAllUrlParams().return_url) ? window.epSubs.getAllUrlParams().return_url : "https://theepochtimes.com/",
                        cp_engine_url: cpEngineUrl,
                        trackImpressions: true,
                        checkoutEngineVersion: checkoutEngineVersion,
                        callback_loaded: function () {
                            loadCheckoutForm();
                            renderEmailCheckout();
                            
                        }
                    })


                    try {
                        console.log('UpgradeOffer active')
                        window.actionAfterThankYou = function() {
                            window.UpgradeOffer.start()
                        }
                    } catch (e) {
                        console.log(e);
                    }

                    $('.restaurant-gc-popup').click(function(e) {
                        e.preventDefault();
                        $('#restaurantgc-terms-popup').modal();
                    });

                    $('.see-more-restaurant').click(function(e) {
                        e.preventDefault();
                        $(this).remove();
                        $('.see-more-restaurant-text').slideDown();
                    })

                    if (window.epSubs.getAllUrlParams().o == 'fs-1p2m-9_99m-20cr_10amz') {
                        $('.digital-gift-details.mobile').css('background', '#f5f5f5')
                    }
                })
                .fail(function() {
                    console.error("[LOADING PIPA ERROR] hostUrl=", apiHost);
                });
        }

    function loadCheckoutForm() {
        // $('.inlinecp-main-wrapper').show();
        // $(".epcheckout-target .epcheckout-content #cb-payment-method-title").html('Fast & Secure Checkout');
        // $(".epcheckout-target .epcheckout-content #cb-payment-method-title").after('<div id="static-email-info" style="color: gray; font-size: 16px;"><span class="static-email-value"></span></div>');
        // $(".epcheckout-target .epcheckout-content #cb-payment-cards").replaceWith(`<span style="font-family: 'RingsideNarrow'; font-size: 20px;">Credit Card</span>`);
        $(".epcheckout-target .epcheckout-content #cb-payment-cards").html(`<div class="credit-card-text">Credit Card</div>`);
        // $(".epcheckout-target .epcheckout-content #customer-fname").val("");
        // $(".epcheckout-target .epcheckout-content #customer-lname").val("");
        // $(".epcheckout-target .epcheckout-content #card_number").attr("placeholder","Credit card number");
        // $(".epcheckout-target .epcheckout-content #zip").attr("placeholder","Billing ZIP");
        $(".epcheckout-target .epcheckout-content .tos-text").addClass("d-none");
        $(".epcheckout-target .epcheckout-content .secure-badge").html(`<p> By subscribing, you agree to the <a href="https://help.theepochtimes.com/hc/en-us/articles/360052271792-Term-of-Service-Digital-Subscription" class="tos-tos-link" target="_blank">Terms &amp; Conditions</a>. Your introductory offer rate is $1 per week billed as $4 every 4 weeks. After 1 year the standard rate is $16 every 4 weeks. Cancel or pause anytime.</p>`);
        // $(".epcheckout-target .epcheckout-content .secure-badge").html(`<p> By subscribing, you agree to the <a href="https://help.theepochtimes.com/hc/en-us/articles/360052271792-Term-of-Service-Digital-Subscription" class="tos-tos-link" target="_blank">Terms &amp; Conditions</a>, including the Cancellation and Refund Policy. Your introductory offer rate is $1 per week billed as <label
        //                                                     class="price-value"></label> every <label
        //                                                     class="frequency-value"></label>. After 1 year the standard rate is <span class="crossed-red-simple">$16</span> $2.49 every <label class="frequency-value"></label>. Cancel or pause anytime.</p>`);
        // $(".epcheckout-target .epcheckout-content .secure-badge").addClass("d-none");
        $(".epcheckout-target .epcheckout-content .epcheckout").addClass("px-0 px-md-3");
    
        // $("#checkout-form > div.cb-main-footer > div.form-inline.submit-group > div:nth-child(2)").html("");
        // $("#checkout-form > div.cb-main-footer > div.form-inline.submit-group > div:nth-child(2)").html(`<input type="submit" id="purchase-btn" class="btn btn-primary g-recaptcha" value="Subscribe" style="">`);
    
    
        // $("#cb-payment-method-fields img[alt=PayPal]").remove();
        // $("#cb-payment-method-fields > div.row > div:nth-child(2) > div > label").append(`<span style="font-family: 'RingsideNarrow'; font-size: 20px;">Paypal</span>`);

        // $("#cb-card-fields > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(2)").addClass("d-none");
        // $("#cb-card-fields > div:nth-child(2) > div:nth-child(1) > div > div > div.col-6.pl-0").addClass("col-12 pr-0");
        // $("#cb-card-fields > div:nth-child(2) > div:nth-child(1) > div > div > div.col-6.pl-0").removeClass("col-6");
        // $("#cb-card-fields > div:nth-child(2) > div:nth-child(1)").addClass("col-6 pr-1");
        // $("#cb-card-fields > div:nth-child(2) > div:nth-child(1)").removeClass("col-sm-6");
        // $("#cb-card-fields > div:nth-child(2) > div.col-sm-6").addClass("col-6");
        // $("#cb-card-fields > div:nth-child(2) > div.col-sm-6").addClass("col-sm-6");
        // $("#cb-card-fields > div:nth-child(2) > div:nth-child(2) > div > div > div").removeClass("pl-sm-0");
        // $("#cb-card-fields > div:nth-child(2) > div:nth-child(2) > div > div > div").removeClass("px-0");
        // $("#cb-card-fields > div:nth-child(2) > div.col-sm-6.col-6 > div > div > div").addClass("px-0");
    
        $("#cb-account-fields > div:nth-child(2)").remove();
        // $("#cb-account-fields > div:nth-child(2) > div:nth-child(1)").removeClass("col-sm-6");
        // $("#cb-account-fields > div:nth-child(2) > div:nth-child(2)").removeClass("col-sm-6");
        // if (window.popupPaywall.paywallParams.isMobile){
        //     $("#checkout-form > div.cb-main-footer > div.form-inline.submit-group > div:nth-child(2)").html("");
        //     $("#checkout-form > div.cb-main-footer > div.form-inline.submit-group > div:nth-child(2)").html(`<input type="submit" id="purchase-btn" class="btn btn-primary g-recaptcha" value="Subscribe" style="padding: 6px; background: rgb(219, 127, 51); border-color: rgb(219, 127, 51); box-shadow: none">`);
    
        // }
        $('#cb-account-fields').hide();
        window.epCheckoutParams.updateName = true;
        
        $(".loader-spinner").hide();
        $(".epcheckout-target").show();
    
    }
    async function renderEmailCheckout() {
        if ( $.cookie('epoch_token')) {
            const res = await ETUtils.APIs.getUserBasicInfo({token: $.cookie('epoch_token')});
            if (res.email) {
                // $('#cb-account-fields').hide();
                $('.email-placeholder').html(`${res.email} <span class="change-account">(change)</span>`);
            } else {
                $('#cb-account-fields').show();
            }
        } else if ($.cookie("e_pp") || $.cookie("e_st") || window.epSubs.getAllUrlParams().est) {
            const res2 = await getEmailFromEst();
            if (res2) {
                // $('#cb-account-fields').hide();
                $('.email-placeholder').html(`${res2} <span class="change-account">(change)</span>`);
                $("#email").val(res2);
            } else {
                $('#cb-account-fields').show();
            }
        } else {
            $('#cb-account-fields').show();
        }
        
    }


    async function getEmailFromEst() {
        
        try {
            
            if ($.cookie("e_pp")) {
                let pp = JSON.parse(atob($.cookie("e_pp")));
                return pp.email || "";
            }
            else if ($.cookie("e_st") || window.epSubs.getAllUrlParams().est) {
                let userEst = $.cookie('e_st') ? decodeURIComponent($.cookie('e_st')) : window.epSubs.getAllUrlParams().est;
                let ppRes = await ETUtils.APIs.prepareProfile({ est: userEst });
                if (ppRes.status == "ok") {
                    return ppRes.data.email || "";
                }
            }
            return "";
        } catch (e) {
            console.log(e)
            return "";
        }

    }
    </script>
    <script>
        $('.expand-info').click(function () {
            $('.offer-info-expanded').slideToggle();
            $(this).toggleClass('showing');
            // $(this).children(".series-qus").text(function(i, text){
            //     return text === "More" ? "Less" : "More";
            // })
        })

    </script>
    <script>

        $('.email-placeholder').on('click','.change-account',function(){
            
            window.blurTrigger = true
            window.postMessage(JSON.stringify({
                module: "GENERAL",
                action: "POPUP",
                data: {
                    width: "100%",
                    height: "100%",
                    template: {
                        id: "signin-popup"
                    }
                }
            }), "*");
            const blurControl = setInterval(function () {
                if ($('.modal.micromodal-slide.is-open').length < 1) {
                    window.blurTrigger = false;
                    clearInterval(blurControl);
                }
            }, 1000);
        });

    </script>
</body>

</html>