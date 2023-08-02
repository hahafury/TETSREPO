import { BraintreeError, Client, HostedFields } from 'braintree-web';
import { loadStripe, Stripe, StripeCardNumberElement, StripeElementChangeEvent } from '@stripe/stripe-js';

const client = require('braintree-web/client');
const hostedFields = require('braintree-web/hosted-fields');

import { callbackTypes, paramsType, TGatewayType, TPlanType } from './types';
import { BRAINTREE, BRAINTREE_KEY, gatewayConstants, STRIPE, STRIPE_KEY } from './constants';

const checkoutHandler: any = {};

let finalGatewayType: TGatewayType;
let enableBackupFields: boolean;

const init = (params: paramsType) => {

    const selector = params.submitSelector;
    const submitBtn = document.getElementById(selector);
    const eventCallbackHandlers = params.eventCallbackHandlers;
    
    const gatewayType = params.gateway;
    finalGatewayType = params.gateway;
    enableBackupFields = params.enableBackupFields;
    
    if (gatewayType === BRAINTREE) {
        showBraintreeFields(submitBtn, eventCallbackHandlers, gatewayType);
    } else if (gatewayType === STRIPE) {
        showStripeFields(submitBtn, eventCallbackHandlers, gatewayType);
    } else {
        // fallback
        showBraintreeFields(submitBtn, eventCallbackHandlers, gatewayType);
    }
}

export const getGatewayHandler = () => {
    return checkoutHandler;
}

export const getGatewayId = (plan_type: TPlanType) => {
    if (!gatewayConstants[finalGatewayType][plan_type]) {
        plan_type = 'default';
    }

    const gatewayId = encodeURIComponent(gatewayConstants[finalGatewayType][plan_type].gatewayId);

    return gatewayId;
}

const showBraintreeFields = (submitBtn: HTMLElement, eventCallbackHandlers: callbackTypes, initialGatewayType: string) => {
    client.create({
        authorization: BRAINTREE_KEY
    }, clientDidCreate);
  
    function clientDidCreate(err: BraintreeError, client: Client) {

        if (err) {
            if (initialGatewayType === BRAINTREE && enableBackupFields) {
                eventCallbackHandlers.clientCreateError(err);
                showStripeFields(submitBtn, eventCallbackHandlers, initialGatewayType);
            } else {
                eventCallbackHandlers.backupClientCreateError(err);
            }
            return;
        }

        if (initialGatewayType !== BRAINTREE) {
            // we are here as a fallback
            eventCallbackHandlers.backupClientCreateSuccess(BRAINTREE);
            // replace input zip field with BT
            const zipMarkup = `<div id="bt-cvv" class="form-control"></div>`;
            document.getElementById("zip").outerHTML = zipMarkup; 
        } else {
            eventCallbackHandlers.clientCreateSuccess(BRAINTREE);
        }

        hostedFields.create({
            client: client,
            styles: {
                'input': {
                    'font-size': '18px',
                    'color': '#555'
                }
            },
            fields: {
                number: {
                    selector: '#bt-card-number',
                    placeholder: 'Card Number',
                    maxCardLength: 16
                },
                cvv: {
                    selector: '#bt-cvv',
                    placeholder: 'CVV',
                    maxlength: 4
                },
                expirationDate: {
                    selector: '#bt-expiration-date',
                    placeholder: 'Expiry (MM/YY)',
                },
                postalCode: {
                    selector: '#bt-postal-code',
                    placeholder: 'Billing Postal Code',
                }
            }
        }, hostedFieldsDidCreate);

        function hostedFieldsDidCreate(err: BraintreeError, hostedFields: HostedFields, initialGatewayType: string) {

            if (err || !hostedFields) {
                if (initialGatewayType === BRAINTREE) {
                    eventCallbackHandlers.clientCreateError(err);
                    showStripeFields(submitBtn, eventCallbackHandlers, initialGatewayType);
                } else {
                    eventCallbackHandlers.backupClientCreateError(err);
                }
                return;
            } else {
                finalGatewayType = BRAINTREE;
            }

            // access function that we can call from the jquery submitHandler
            // to finalize the BrainTree payment
            checkoutHandler.initializedSubmitHandler = () => {
                brainTreeSubmitHandler(hostedFields);
            }

            hostedFields.on('blur', function (event) {
                // console.log('blur:', event);
                const field = event.emittedBy;
                if (!event.fields[field].isValid && !event.fields[field].isEmpty) {
                    $(`#cb-payment .error.${field}`).show();
                    submitBtn.setAttribute('disabled', 'disabled');
                }
            });

            hostedFields.on('validityChange', function (event) {
                // console.log('validityChange:', event);
                const field = event.emittedBy;
                if (!event.fields[field].isValid) {
                    $(`#cb-payment .error.${field}`).show();
                    submitBtn.setAttribute('disabled', 'disabled');
                } else {
                    $(`#cb-payment .error.${field}`).hide();
                    submitBtn.removeAttribute('disabled');
                }
            });

            hostedFields.on('inputSubmitRequest', function () {
                // User requested submission, e.g. by pressing Enter or equivalent
                submitBtn.click();
            });
            submitBtn.removeAttribute('disabled');
        }

        function brainTreeSubmitHandler(hostedFields: HostedFields) {
            eventCallbackHandlers.formSubmitEvent();
            hostedFields.tokenize(function (err, payload) {
                if (err) {
                    eventCallbackHandlers.tokenizeError(err);
                } else {
                    eventCallbackHandlers.successCallback(payload.nonce);
                }
            });
        }
    }
}

async function showStripeFields(submitBtn: HTMLElement, eventCallbackHandlers: callbackTypes, initialGatewayType: string) {
    let stripe: Stripe;

    try {
        stripe = await loadStripe(STRIPE_KEY);
    } catch(e) {
        if (initialGatewayType === STRIPE && enableBackupFields) {
            eventCallbackHandlers.clientCreateError(e);
            showBraintreeFields(submitBtn, eventCallbackHandlers, initialGatewayType);
        } else {
            eventCallbackHandlers.backupClientCreateError(e);
        }
        return;
    }

    finalGatewayType = STRIPE;

    if (initialGatewayType !== STRIPE) {
        eventCallbackHandlers.backupClientCreateSuccess(STRIPE);
    } else {
        eventCallbackHandlers.clientCreateSuccess(STRIPE);
    }

    checkoutHandler.initializedSubmitHandler = () => {
        stripeSubmitHandler(stripe, cardNumberElement);
    }

    const elements = stripe.elements();

    const styles = {
        base: {
            fontSize: '18px',
            color: '#3A3A3A',
            '::-webkit-input-placeholder': {
                color: 'rgb(169, 169, 169)'
            },
            ':-moz-placeholder': {
                color: 'rgb(169, 169, 169)'
            },
            '::-moz-placeholder': {
                color: 'rgb(169, 169, 169)'
            },
            ':-ms-input-placeholder ': {
                color: 'rgb(169, 169, 169)'
            },
        },
        invalid: {
            color: 'red',
        },
    }

    const cardNumberElement = elements.create("cardNumber", {style: styles});
    const cardExpiryElement = elements.create("cardExpiry", {style: styles});
    const cardCvvElement = elements.create("cardCvc", {style: styles});
    cardNumberElement.mount("#bt-card-number");
    cardExpiryElement.mount("#bt-expiration-date");
    cardCvvElement.mount("#bt-cvv");

    // replace BT iframe with input field
    const zipMarkup = `<input name="zip" id="zip" placeholder="Billing Postal Code" class="form-control" validate="true" data-cb='zip'>`;
    document.getElementById("bt-postal-code").outerHTML = zipMarkup; 

    cardNumberElement.on('change', function(event) {
        handleCardElementChange(event, 'number');
    });

    cardExpiryElement.on('change', function(event) {
        handleCardElementChange(event, 'expirationDate');
    });

    cardCvvElement.on('change', function(event) {
        handleCardElementChange(event, 'cvv');
    });

    function handleCardElementChange(event: StripeElementChangeEvent, elementClass: string) {
        const complete = event.complete;
        const error = event.error;
        if (complete) {
            submitBtn.removeAttribute('disabled');
            $(`.error.${elementClass}`).hide();
        } else if (error) {
            submitBtn.setAttribute('disabled', 'disabled');
            $(`.error.${elementClass}`).show();
        }
    }

    async function stripeSubmitHandler(stripe: Stripe, cardNumberElement: StripeCardNumberElement) {

        eventCallbackHandlers.formSubmitEvent();

        try {
            const zip = (document.getElementById('zip') as HTMLInputElement).value;
            const res = await stripe.createToken(cardNumberElement, {
                address_zip: zip
            });
            if (res && res.error) {
                eventCallbackHandlers.tokenizeError(res.error);
            } else {
                eventCallbackHandlers.successCallback(res.token.id);
            }
        } catch(e) {
            eventCallbackHandlers.tokenizeError(e);
        }
    }
}

export default init;