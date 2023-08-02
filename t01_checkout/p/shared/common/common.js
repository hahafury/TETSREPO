// Double Opt-in newsletter SIGN-UP request
function signup_2step_email_subscription(settings = false) {
  
  var signup_data = {
    email: settings['email'],
    list_id: settings['list_id'],
    tags: settings['tags'] || "",
    groups: settings['groups'] || "",
    mc_template: settings['mc_template'],
    from_email: settings['from_email'],
    subject: settings['subject'],
    utm_campaign: settings['utm_campaign'] || "",
    utm_medium: settings['utm_medium'] || "",
    utm_source: settings['utm_source'] || "",
    utm_term: settings['utm_term'] || "",
  }

  console.log(signup_data)

  $.ajax({
    url: 'https://gohapi.epoch.cloud/mailchimp/add_member_2step',
    data: signup_data,
    method: 'POST',
    success: function (response) {
      console.log(response)
      if(response.success) {
        if(typeof settings['callback_success'] == "function") {
          settings['callback_success']()
        }
      } else {
        if(typeof settings['callback_failure'] == "function") {
          settings['callback_failure']() 
        }
      }
    }
  });
}



// Double Opt-in newsletter VERIFICATION (confirmation) request with specific token
// You can define success and failure callback. Both has response as an arugment
function verify_email_subscription_request(verification_token, callback_success = false, callback_failure = false) {
    $.ajax({
        url: 'https://gohapi.epoch.cloud/mailchimp/verify_subscription_request',
        data: {
            token: verification_token
        },
        success: function (response) {
            if(response.success) {
                console.log('Subscription Verification Success')
                if(typeof callback_success === "function") {
                    callback_success();
                }
            } else {
                console.log('Subscription Verification Failure')
                console.log(response)
                if(typeof callback_failure === "function") {
                    callback_failure(response);
                }
            }
            
        }
    })   
}


// Check if the URL was visited in a legit way or shared as a direct UR (shadow)
function shadow_sharing_protection(callback_shadow_visit) {
    if(window.location.hash != '#noshadow') {
        callback_shadow_visit()
    } else {
        window.location.hash = '';
    }
}

// Open new tab and download a file to the disk
function download_asset_file(asset, callback_success = false ) {
    window.open("http://services.epoch.cloud/public-labs/files/download.php?asset=" + asset);
}


// Return all URL params as an object
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
