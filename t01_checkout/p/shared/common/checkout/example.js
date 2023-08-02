import * as checkout from './dist/bundle.js';
// https://stackoverflow.com/questions/29652716/module-exports-module-is-not-defined
// I give up, let's try again later

const submitBtn = document.getElementById('purchase-btn');

$(function() {
  debugger;
  const initCheckout = checkout.default;

  const eventCallbackHandlers = {
      clientCreateError: (err) => handleFirstClientCreateError(err),
      backupClientCreateError: (err) => handleBackupClientCreateError(err),
      formSubmitEvent: onFormSubmitBehavior,
      tokenizeError: (err) => handleTokenizeError(err),
      successCallback: (payload) => continueCheckoutProcess(payload),
  };

  initCheckout({ 
      submitSelector: 'purchase-btn', 
      gateway: 'braintree',
      eventCallbackHandlers: eventCallbackHandlers
  });

  $('#checkout-form').on('submit', function() {
    const gatewayHandler = checkout.getGatewayHandler();

    gatewayHandler.initializedSubmitHandler();
  });
});

function handleTokenizeError(err) {
  submitBtn.removeAttribute('disabled');
  $('.loading-throbber-wrapper').hide();
  $('.subscription-create-error').text('Unable to checkout, please verify that your payment details are correct.');
  ga('send', 'event', 'Digital Checkout Page', 'ERROR - hosted fields tokenize', err.message);
}

function onFormSubmitBehavior() {
  $('.subscription-create-error').text('');
  submitBtn.setAttribute('disabled', 'disabled');
  $('#checkout-form .loading-throbber-wrapper').fadeIn('fast');
}

function handleFirstClientCreateError(err) {
  // attempt to load second gateway fields
  console.log('ERROR: ', err);
  ga('send', 'event', 'Digital Checkout Page', 'First gateway loading error', 'hostedFieldsDidCreate: ' + err.message);
}

function handleBackupClientCreateError(err) {
  // first gateway and second gateway failed, show error
  console.log('ERROR: ', err);
  submitBtn.setAttribute('disabled', 'disabled');
  $('.cb-main-footer .error-holder p.error').text('Error loading checkout form, please reload and try again.');
  ga('send', 'event', 'Digital Checkout Page', 'Backup gateway loading error', 'hostedFieldsDidCreate: ' + err.message);
}

function continueCheckoutProcess(token) {
  alert('form submitted, token created: ', token);
}
