import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const AUTH_URL: string | undefined = process.env.NEXT_PUBLIC_AUTH_URL;
const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_BASE_URL;
const EPOCH_AUTH_URL: string | undefined =
  process.env.NEXT_PUBLIC_EPOCH_AUTH_URL;
const SUBS_URL: string | undefined = process.env.NEXT_PUBLIC_SUBS_URL;

const token = getCookie("epoch_token");

//for testing isPlanAnnual feature:
setCookie(
  "epoch_subscribed",
  "digitalonly_fullsubscription_1usd_w_4usd_w_1styear"
);
const epochSubscribed = getCookie("epoch_subscribed");

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
};

export const changePassword = (password: string) =>
  axios.post(
    `${AUTH_URL}/user/changepassword?token=${encodeURIComponent(
      token as string
    )}`,
    { password, confirmpassword: password },
    config
  );

export const upgradeToAnnualPlan = (subscriptionId: string | undefined) =>
  axios.post(
    `${BASE_URL}/chargebee/upgrade_plan?plan=digitalonly_77_yearly_1styear&subscription_id=${
      subscriptionId ? subscriptionId : "169q2TTSkxDyK5A79"
    }&token=${encodeURIComponent(token as string)}`,
    null,
    config
  );

export const sendAppDownloadLink = (
  phoneNumber: string,
  subscriptionId: string | undefined
) =>
  axios.post(`${BASE_URL}/chargebee/send_sms_to_download_app`, {
    subscription_id: subscriptionId ? subscriptionId : "169q2TTSkxDyK5A79",
    phone_number: phoneNumber,
    send_welcome_digital: true,
  });

export const assignFreeSeatToUser = (email: string) =>
  axios.post(
    `${BASE_URL}/seats/assign?token=${encodeURIComponent(
      token as string
    )}&guest_email=${encodeURIComponent(email)}`,
    null,
    config
  );

export const checkIsPasswordExists = (email: string) =>
  axios.get(
    `${EPOCH_AUTH_URL}/user/check_account?site_id=www.theepochtimes.com&email=${encodeURIComponent(
      email
    )}`
  );

export const checkIsPlanAnnual = () =>
  axios.get(
    `${SUBS_URL}/chargebee/retrieve_plan?siteid=www.theepochtimes.com&planid=${encodeURIComponent(epochSubscribed as string)}`
  );
