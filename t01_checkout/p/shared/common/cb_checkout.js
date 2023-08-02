jQuery(document).ready(function () {

  if(location.host + location.pathname == "offers.theepochtimes.com/trial-offer14a") {
      window.location.href = "https://offers.theepochtimes.com/trial-spygate-special" + window.location.search;
  }
  if(location.host + location.pathname == "offers.theepochtimes.com/trial-offer14b") {
      window.location.href = "https://offers.theepochtimes.com/trial-spygate-special" + window.location.search;
  }
  // if(location.host + location.pathname == "offers.theepochtimes.com/trial-offer17") {
  //     window.location.href = "https://offers.theepochtimes.com/trial-spygate-special" + window.location.search;
  // }
  if(location.host + location.pathname == "offers.theepochtimes.com/trial-special-new") {
      window.location.href = "https://offers.theepochtimes.com/trial-spygate-special" + window.location.search;
  }



  // TheTest
  thetest=function(){this.test_id=!1,this.group_id=!1,this.settings={},this.init=function(t){this.test_id=t.testid,this.settings=t,this.get_group(),this.settings.gatrack&&ga("send","event","TheTest",this.test_id,this.group_id)},this.get_group=function(){if(this.group_id)return this.group_id;var t=this.getURLParam("thetestgroup",location.href);if(t)return this.group_id=t,this.group_id;var i=localStorage.getItem("thetest_"+this.test_id+"_group");return i||(i=this.assign_group(),localStorage.setItem("thetest_"+this.test_id+"_group",i)),this.group_id=i,this.group_id},this.assign_group=function(){var t=0,i=Math.random(),s=!1;for(group in this.settings.groups)if((t+=this.settings.groups[group])>i){s=group;break}return s},this.getURLParam=function(t,i){i||(i=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var s=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(i);return s?s[2]?decodeURIComponent(s[2].replace(/\+/g," ")):"":null}};

  // Manually override products for specific pages
  if(location.host + location.pathname == "offers.theepochtimes.com/trial-spygate-special") {
    $('<meta name="page:trial_product" content="trial_$1_6week_spygate_trump_print_digitalsub" />').appendTo('head');
  }
  

  // Add Plan details to the buttons
  $('.conversion_wrapper a').click(function (e) {

    e.preventDefault();

    // Decide trial product and after trial product - use some default
    var trial_product = 'trial_$1_6week_first_month_print_and_digitalsub';
    if ($('meta[name="page:trial_product"]').length === 1) {
      trial_product = $('meta[name="page:trial_product"]').attr('content');
    }

    var product_after_trial = 'print_digital_3months_39_digitalsub';
    if ($('meta[name="page:product_after_trial"]').length === 1) {
      product_after_trial = $('meta[name="page:product_after_trial"]').attr('content');
    }

    $(this)
    .attr('cb-checkout-account', 'theepochtimes')
    .attr('cb-checkout-plan-id', trial_product)
    .attr('cb-checkout-source-landing-page', 'Offers-TRIAL')
    .attr('cb-checkout-plan-after-trial-ends', product_after_trial)

    console.log('Select product ' + $(this).attr('cb-checkout-plan-after-trial-ends'))
    ga('send', 'event', 'Conversion CTA', 'Checkout Button', product_after_trial); 
    
    CB_checkout_btn(this)
    try {
      // Add To Cart tracking
      fbq('track', 'AddToCart');
      rdt('track', 'AddToCart');
      obApi('track', 'Add to cart');
    } catch(error) {
        console.error(error);
    }
  });

  var lotame_pixel = "<img src='https://bcp.crwdcntrl.net/5/c=3165/b=63101884' width='1' height='1'/>";
  $(lotame_pixel).appendTo('body');


  send_ping_ga_track_event();


}); 


function CB_checkout_btn(el) {

  // Extract plan details from button element
  var acc = $(el).attr('cb-checkout-account');
  var plan = $(el).attr('cb-checkout-plan-id');
  var lp = $(el).attr('cb-checkout-source-landing-page');
  var np = $(el).attr('cb-checkout-plan-after-trial-ends');

  var utm_campaign = (getAllUrlParams().utm_campaign) ? getAllUrlParams().utm_campaign : "";
  var utm_source = (getAllUrlParams().utm_source) ? getAllUrlParams().utm_source : "";
  var utm_medium = (getAllUrlParams().utm_medium) ? getAllUrlParams().utm_medium : "";
  var utm_content = (getAllUrlParams().utm_content) ? getAllUrlParams().utm_content : "";
  var utm_term = (getAllUrlParams().utm_term) ? getAllUrlParams().utm_term : "";

  var source_page_url = location.host + location.pathname;
  if(getAllUrlParams().page) {

    // Sometimes we want to override URL that is sent to tracking because of the AB test
    var real_page = getAllUrlParams().page;
    if($('meta[name="page:real_page"]').length > 0) {
      var real_page = $('meta[name="page:real_page"]').attr('content');
      console.log('real page set: ' + real_page);
    }
    source_page_url = source_page_url + "?page=" + real_page;
  }

  var source_page_variant = ($('meta[name="test:variant"]').attr('content')) ? $('meta[name="test:variant"]').attr('content') : location.pathname;

  var referral_fields = '';
  var referral_offer = ($('meta[name="referral:offer"]').attr('content')) ? $('meta[name="referral:offer"]').attr('content') : false;
  var referral_friend = (getAllUrlParams().friend) ? getAllUrlParams().friend : false;
  if(referral_offer && referral_friend) {
    referral_fields = '<input type="hidden" name="subscription[cf_referral_offer]" value="'+referral_offer+'" /><input type="hidden" name="subscription[cf_friend_referral]" value="'+referral_friend+'" />'
  }
  
  // LeadDyno affiliate ID
  //get tracking id from LeadDyno
  var affiliate_fields = '';
  try {
    var LDtrackingId = LeadDyno.devTools.getTrackingId();
    console.log('dyno')
    console.log(LDtrackingId);
    var affiliate_fields = '<input type="hidden" name="subscription[affiliate_token]" value="'+LDtrackingId+'" />';
  } catch (e) {
    console.log(e);
  }
  

  // extract all addons
  // console.log('dd:' + $('meta[name="page:product_addons"]').attr('content'))
  // var addons = ($('meta[name="page:product_addons"]').attr('content')) ? $('meta[name="page:product_addons"]').attr('content').split(';') : false;
  // if (addons) {
  //   console.log('ss')
  //   var addons_fields = '';
  //   for (var i=0; i < addons.length; i++) {
  //     addons_fields += '<input type="hidden" name="addons[id][' +i+ ']" value="' + addons[i] + '" /><input type="hidden" name="addons[quantity][' +i+ ']" value="1" />';
  //     console.log(addons_fields)
  //   }
  // }

  
  // Generate checkout GET form and submit
  // See docu: https://www.chargebee.com/docs/advanced_hosted_page_sign_up.html

  var checkout_form = '<form action="https://'+acc+'.chargebee.com/hosted_pages/plans/'+plan+'" id="cb_checkout_form" style="display:none" method="GET">' + 
                        // addons_fields + 
                      '<input type="hidden" name="subscription[cf_source_landing_page]" value="'+lp+'" />' +
                      '<input type="hidden" name="subscription[cf_plan_after_trial_ends]" value="'+np+'" />' +
                      '<input type="hidden" name="subscription[cf_utm_campaign]" value="'+utm_campaign+'" />' +
                      '<input type="hidden" name="subscription[cf_utm_source]" value="'+ utm_source  +'" />' +
                      '<input type="hidden" name="subscription[cf_utm_medium]" value="'+utm_medium+'" />' +
                      '<input type="hidden" name="subscription[cf_utm_term]" value="'+utm_term+'" />' +
                      '<input type="hidden" name="subscription[cf_utm_content]" value="'+utm_content+'" />' +
                      '<input type="hidden" name="subscription[cf_source_page_variant]" value="'+source_page_variant+'" />' +
                      '<input type="hidden" name="subscription[cf_source_page_url]" value="'+source_page_url+'" />' +
                      referral_fields + 
                      affiliate_fields +
                      '</form>';

  $('body').append(checkout_form);
  $('#cb_checkout_form').submit();
}

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      // if (typeof paramValue === 'string') paramValue = decodeURIComponent(paramValue.toLowerCase());

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}


if (typeof window.fast_redirect == 'undefined' || !window.fast_redirect) {
console.log('pixeled');
// Sometimes we want to override URL that is sent to tracking because of the AB test
real_url = window.location.pathname + window.location.search;
if($('meta[name="page:real_page"]').length > 0) {
  var real_page = $('meta[name="page:real_page"]').attr('content');
  var real_url = real_url.replace('page='+getAllUrlParams().page, 'page='+real_page);
  console.log('real URL set: ' + real_url);
}

// Facebook PageView
!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1984366038554916');
  fbq('track', 'PageView');


// Google Analytics 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-72468956-10', 'auto');

if($('meta[name="page:abtest_id"]').length > 0) {
  ga('set', 'dimension14', $('meta[name="page:abtest_id"]').attr('content'));
}

ga('send', 'pageview', real_url);


// Reddit PageView
!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_1sz87a87');rdt('track', 'PageVisit');


// Twitter PageView
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','nzye8');
twq('track','PageView');


// Lotame Pageview
var lotame_pixel = '<img src="https://bcp.crwdcntrl.net/5/c=3165/b=63101884" width="1" height="1"/>';
$(lotame_pixel).appendTo('body');


// Outbrain Pixel
!function(_window, _document) {
  var OB_ADV_ID='00ee3c7395c78ecfe3f14e63fa4f6f83cb';
  if (_window.obApi) {var toArray = function(object) {return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];};_window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;}
  var api = _window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = '1.1';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = _document.createElement('script');tag.async = true;tag.src = '//amplify.outbrain.com/cp/obtp.js';tag.type = 'text/javascript';var script = _document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag, script);}(window, document);
obApi('track', 'PAGE_VIEW');

}

load_time = (new Date().getTime()) / 1000; // convert milliseconds to seconds.
function send_ping_ga_track_event() {
  ga('send', 'event', 'Ping', 'Ping', 'Ping');

  var currentTime = (new Date().getTime()) / 1000;
  if (currentTime - load_time <= 300) {
      setTimeout(send_ping_ga_track_event, 5000);
  }
}

if (typeof window.footerCallback === "function") {
footerCallback();
}