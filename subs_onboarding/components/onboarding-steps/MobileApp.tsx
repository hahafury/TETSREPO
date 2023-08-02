import { Button } from "flowbite-react";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import texts from "../../utils/texts.json";
import Input from "react-phone-number-input/input";
import { sendAppDownloadLink } from "../../api/api";
import { useRouter } from "next/router";
import ErrorMessage from "../ErrorMessage";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface MobileAppProps {
  handleChangeCurrentStep: (value: number) => void;
}

const { mobileAppText, buttonsText, errorsText } = texts;

function MobileApp({ handleChangeCurrentStep }: MobileAppProps) {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState<boolean>(true);

  const router = useRouter();
  const subscriptionId: string | undefined = router?.query
    .subscription_id as string;

  const handlePhoneNumberChange = (e: string) => {
    setIsValidPhoneNumber(true);
    setPhoneNumber(e);
  };

  const handleOnSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      await sendAppDownloadLink(phoneNumber, subscriptionId);
    } catch (error) {
      setIsError(true);
      console.log(error);
      return;
    }

    handleChangeCurrentStep(1);
  };

  const changeCurrentStep = () => {
    setIsError(false);
    handleChangeCurrentStep(1);
  };

  const handleValidatePassword = () => {
    if (phoneNumber?.length !== 12) {
      setIsValidPhoneNumber(false);
    }
  };
  return (
    <div>
      <p
        onClick={() => handleChangeCurrentStep(-1)}
        className="flex items-center text-neutral-500 mb-6 cursor-pointer"
      >
        <AiOutlineArrowLeft className="mr-1" />
        {buttonsText.back}
      </p>
      <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
        {mobileAppText.title}
      </h1>
      <div className="stay-mobile-images sm:flex sm:justify-around p-5 rounded-xl">
        <img
          width={262}
          height={302}
          src="./2023-ETTablet.png"
          alt="ETTablet"
        />
        <img src="Frame_409.svg" alt="Frame_409" />
      </div>
      <p className="text-xl font-bold mb-6 mt-4">{mobileAppText.powerApp}</p>
      <div className="relative">
        <Input
          country="US"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onBlur={handleValidatePassword}
          className="pl-6 pt-7px sm:w-96 w-80"
          maxLength="14"
        />
        <span className="absolute top-2 left-2">+1</span>
      </div>
      {!isValidPhoneNumber && (
        <span className="text-red-500 ml-2">
          Please enter a valid phone number
        </span>
      )}
      <div className="submit mt-3">
        <div className="sm:w-96 w-80 mb-2">
          {isError && <ErrorMessage errorMsg={errorsText.shortMessage} />}
        </div>{" "}
        <Button
          onClick={handleOnSubmit}
          type="submit"
          className="sm:w-96 w-80 font-bold bg-custom-yellow !rounded"
          color="warning"
        >
          {buttonsText.submitBtn} <BsArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="text-center mt-6 sm:w-96 w-80">
        <p
          onClick={changeCurrentStep}
          className="text-neutral-500 underline text-xl cursor-pointer"
        >
          {buttonsText.skip}
        </p>
        <p className="text-sm mt-6">{mobileAppText.note}</p>
      </div>
    </div>
  );
}

export default MobileApp;
