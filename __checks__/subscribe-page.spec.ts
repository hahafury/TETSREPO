import { test, expect } from '@playwright/test'

/**
 * URLS
 */
const TEST_URL = 'https://secure-checkout.epochtimes.de/pages/checkout/cp-eet-de_2/index.html?o=test_offer1_id&checkout=test-for-development&return_url=https%3A%2F%2Fwww.epochtimes.de%2Fpolitik%2Fdeutschland%2Foesterreich-zahl-der-asylantraege-ruecklaeufig-aber-15-000-pushbacks-aus-deutschland-a4358440.html&src_tmp=149-deET-230724%40Expired-T_08_26-CAStyle&src_url=%2Fpolitik%2Fdeutschland%2Foesterreich-zahl-der-asylantraege-ruecklaeufig-aber-15-000-pushbacks-aus-deutschland-a4358440.html';
const ONBOARDING_URL = 'https://static.epochtimes.de/pages/onboardingflow-conductor/';
const RETURN_URL = 'https://www.epochtimes.de/politik/deutschland/oesterreich-zahl-der-asylantraege-ruecklaeufig-aber-15-000-pushbacks-aus-deutschland-a4358440.html';
const OFFER_ID = 'test_offer1_id';
/**
 * FORM
 */
const SUBMIT_BUTTON_SELECTOR = '#purchase-btn';
/**
 * EMAIL
 */
const EMAIL_INPUT_SELECTOR = '#email';
const EMAIL_VALID_VALUE = `test-${Math.floor(Date.now() / 1000)}@code4good.men`;
/**
 * FIRSTNAME
 */
const FIRSTNAME_INPUT_SELECTOR = '#customer-fname'
const FIRSTNAME_VALUE = 'Name';
/**
 * SURNAME
 */
const SURNAME_INPUT_SELECTOR = '#customer-lname'
const SURNAME_VALUE = 'Surname';
/**
 * CARD
 */
const CARD_TAB_BUTTON_SELECTOR = '#credit-card-tab';
const CARD_NUMBER_VALUE = '4111111111111111';
const CARD_NUMBER_FORMATTED_VALUE = '4111 1111 1111 1111';
const CARD_CVC_VALUE = '123'
const CARD_EXPIRATION_DATE_VALUE = '12/50'
const CARD_EXPIRATION_DATE_FORMATTED_VALUE = '12 / 50'
const CARD_POSTAL_CODE_VALUE = '99999'
const CARD_ELEMENT_SELECTOR = '#card-element';
const CARD_NUMBER_INPUT_SELECTOR = `input[name='cardnumber']`;
const CARD_EXPIRATION_DATE_INPUT_SELECTOR = `input[name='exp-date']`;
const CARD_CVC_INPUT_SELECTOR = `input[name='cvc']`;
const CARD_POSTAL_CODE_INPUT_SELECTOR = `input[name='postal']`;
/**
 * IBAN
 */
const IBAN_TAB_BUTTON_SELECTOR = '#lastschrift-tab';
/**
 * TERMS AND CONDITIONS
 */
const TERMS_AND_CONDITIONS_INPUT_SELECTOR = '#chkbox-terms-and-conditions';
/**
 * SUCCESS POPUP
 */
const SUCCESS_POPUP_SELECTOR = '#successPopup.modal.show';
const SUCCESS_POPUP_CREATE_PASSWORD_BUTTON_SELECTOR = '#create-password-btn'
/**
 * PASSWORD
 */
const PASSWORD_INPUT_SELECTOR = '#ymkpassword';
const PASSWORD_VALUE = '12345678';
/**
 * SURVEY
 */
const SURVEY_SELECT_SELECTOR = '#success_survey_answer';
const SURVEY_VALUE = '1';
/**
 * STRIPE
 */
const STRIPE_CARD_ELEMENT_WRAPPER_SELECTOR = `${CARD_ELEMENT_SELECTOR} .__PrivateStripeElement`;
const STRIPE_CARD_ELEMENT_IFRAME_SELECTOR = `${STRIPE_CARD_ELEMENT_WRAPPER_SELECTOR} iframe`;
/**
 * SUBSCRIPTION ENDPOINT
 */
const SUBSCRIPTION_ENDPOINT = 'https://mkt.epochbase.eu/epochsubs/v2/create_subscription_using_offer';
/**
 * CHANGE PASSWORD ENDPOINT
 */
const CHANGE_PASSWORD_ENDPOINT = 'https://auth.epochbase.eu/user/changepassword';
/**
 * CONTINUE BUTTON
 */
const CONTINUE_BUTTON_SELECTOR = '.continue_btn_survey';
/**
 * THANKS BUTTON
 */
const THANKS_BUTTON_SELECTOR = '.continue_btn_thanks';

test.setTimeout(0);

test('Subscribe page ', async ({ page }) => {
  const response = await page.goto(TEST_URL);
  await expect(response?.status()).toBeLessThan(400);
  const emailInput = page.locator(EMAIL_INPUT_SELECTOR);
  const firstNameInput = page.locator(FIRSTNAME_INPUT_SELECTOR);
  const surnameInput = page.locator(SURNAME_INPUT_SELECTOR);
  const cardTabButton = page.locator(CARD_TAB_BUTTON_SELECTOR);
  const ibanTabButton = page.locator(IBAN_TAB_BUTTON_SELECTOR);
  const submitButton = page.locator(SUBMIT_BUTTON_SELECTOR);
  const termsAndConditionsInput = page.locator(TERMS_AND_CONDITIONS_INPUT_SELECTOR);
  
  let subscriptionKey = null;
  
  await test.step('should fill a form inputs with test data', async () => {
    await emailInput.fill(EMAIL_VALID_VALUE);
    await firstNameInput.fill(FIRSTNAME_VALUE);
    await surnameInput.fill(SURNAME_VALUE);

    await expect(emailInput).toHaveValue(EMAIL_VALID_VALUE);
    await expect(firstNameInput).toHaveValue(FIRSTNAME_VALUE);
    await expect(surnameInput).toHaveValue(SURNAME_VALUE);
  });

  await test.step('should open a tab with stripe card', async () => {
    await page.waitForTimeout(5000);
    await cardTabButton.click();
    await ibanTabButton.click();
    await page.waitForTimeout(5000);
    await cardTabButton.click();
    const stripeCardElement = page.locator(CARD_ELEMENT_SELECTOR);
    await expect(stripeCardElement).toHaveCount(1);
  });

  await test.step('should fill a card with test data', async () => {
    await page.waitForSelector(STRIPE_CARD_ELEMENT_WRAPPER_SELECTOR)
    const stripeFrame = await page.frameLocator(STRIPE_CARD_ELEMENT_IFRAME_SELECTOR).first();

    const cardNumInput = stripeFrame.locator(CARD_NUMBER_INPUT_SELECTOR)
    const cardExpInput = stripeFrame.locator(CARD_EXPIRATION_DATE_INPUT_SELECTOR)
    const cardCVCInput = stripeFrame.locator(CARD_CVC_INPUT_SELECTOR)
    const cardZipInput = stripeFrame.locator(CARD_POSTAL_CODE_INPUT_SELECTOR)

    await page.waitForTimeout(1500);
    await cardNumInput.fill(CARD_NUMBER_VALUE);
    await cardExpInput.fill(CARD_EXPIRATION_DATE_VALUE);
    await cardCVCInput.fill(CARD_CVC_VALUE);
    await cardZipInput.fill(CARD_POSTAL_CODE_VALUE)
    
    await expect(cardNumInput).toHaveValue(CARD_NUMBER_FORMATTED_VALUE);
    await expect(cardExpInput).toHaveValue(CARD_EXPIRATION_DATE_FORMATTED_VALUE);
    await expect(cardCVCInput).toHaveValue(CARD_CVC_VALUE);
    await expect(cardZipInput).toHaveValue(CARD_POSTAL_CODE_VALUE);
  });
  
  await test.step('should open a success modal after submitting', async () => {
    await termsAndConditionsInput.check();
    await expect(termsAndConditionsInput.isChecked()).toBeTruthy();
    await submitButton.click();
    await page.waitForResponse(async (response) => {
      try {
        if (response.url().split('?')[0] !== SUBSCRIPTION_ENDPOINT) {
          return false;
        }
        const body = (await response.body()).toString();
        subscriptionKey = JSON.parse(body).data.subscription_key;
        return true;
      } catch (e) {
        return false;
      }
    });
    await page.waitForSelector(SUCCESS_POPUP_SELECTOR);
    const successPopup = page.locator(SUCCESS_POPUP_SELECTOR);
    await expect(successPopup).toHaveCount(1);
  });

  await test.step('should enter a password and select survey', async () => {
    const successPopup = page.locator(SUCCESS_POPUP_SELECTOR);
    const passwordInput = successPopup.locator(PASSWORD_INPUT_SELECTOR);
    const surveySelect = successPopup.locator(SURVEY_SELECT_SELECTOR);

    await passwordInput.fill(PASSWORD_VALUE);
    await surveySelect.selectOption(SURVEY_VALUE);

    await expect(passwordInput).toHaveValue(PASSWORD_VALUE);
    await expect(surveySelect).toHaveValue(SURVEY_VALUE);
  });

  await test.step('should redirect to onboarding page', async () => {
    const createPasswordButton = page.locator(SUCCESS_POPUP_CREATE_PASSWORD_BUTTON_SELECTOR);
    const changePasswordRequest = page.waitForRequest(request => {
      return request.url().split('?')[0] === CHANGE_PASSWORD_ENDPOINT;
    });
    const onboardingRedirect = page.waitForURL((url) => {
      if (url.href.split('?')[0] !== ONBOARDING_URL) {
        return false;
      }
      return url.searchParams.get('sub_id') === subscriptionKey 
        && url.searchParams.get('return_url') === RETURN_URL 
        && url.searchParams.get('offer') && OFFER_ID 
        && url.searchParams.get('e') === EMAIL_VALID_VALUE
        && true;
    });
    await Promise.all([
      changePasswordRequest,
      onboardingRedirect,
      createPasswordButton.click()
    ]);
  });
  
  await test.step('thanks button should appear after clicking continue button', async () => {
    const continueButton = await page.locator(CONTINUE_BUTTON_SELECTOR);
    await expect(continueButton).toHaveCount(1);
    await continueButton.click();
    const thanksButton = await page.locator(THANKS_BUTTON_SELECTOR);
    await expect(thanksButton).toHaveCount(1);
  });
  
  await test.step('should redirect to return_url after clicking thanks button', async () => {
    const thanksButton = await page.locator(THANKS_BUTTON_SELECTOR);
    const returnUrlRedirect = page.waitForURL(url => {
      return url.href === RETURN_URL;
    })
    await Promise.all([
      returnUrlRedirect,
      thanksButton.click()
    ]);
  });
});
