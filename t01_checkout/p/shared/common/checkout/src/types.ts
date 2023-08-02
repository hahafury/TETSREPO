import { StripeError } from "@stripe/stripe-js";
import { BraintreeError } from "braintree-web";

export interface paramsType {
  submitSelector: string;
  gateway: TGatewayType;
  eventCallbackHandlers: callbackTypes;
  enableBackupFields: boolean;
}

export interface callbackTypes {
  clientCreateSuccess: (gateway: TGatewayType) => void;
  clientCreateError: (err: BraintreeError | StripeError) => void;
  backupClientCreateSuccess: (gateway: TGatewayType) => void;
  backupClientCreateError: (err: BraintreeError | StripeError) => void;
  formSubmitEvent: () => void;
  tokenizeError: (err: BraintreeError | StripeError) => void;
  successCallback: (payload: any) => void;
}

export type TGatewayType = 'braintree' | 'stripe';

export type TPlanType = 'default' | 'digital' | 'donation' | 'epochtv' | 'ae_magazine';