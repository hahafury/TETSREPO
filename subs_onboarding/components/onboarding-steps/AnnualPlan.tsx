import { upgradeToAnnualPlan } from "../../api/api";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import texts from "../../utils/texts.json";
import { useRouter } from "next/router";

interface AnnualPlanProps {
  email: string;
  handleChangeCurrentStep: (value: number) => void;
  handleError: (value: boolean) => void;
}

const { annualPlanText, buttonsText } = texts;

function AnnualPlan({
  email,
  handleChangeCurrentStep,
  handleError,
}: AnnualPlanProps) {
  const [isUpgrade, setIsUpgrade] = useState<boolean>(false);

  const router = useRouter();
  const subscriptionId: string | undefined = router?.query
    .subscription_id as string;

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await upgradeToAnnualPlan(subscriptionId);

      if (res.data.status === "failed") {
        handleError(true);
      } else {
        setIsUpgrade(true);
      }
    } catch (error) {
      handleError(true);
      console.log(error);
    }
  };

  const changeCurrentStep = () => {
    handleChangeCurrentStep(1);
    handleError(false);
  };

  return (
    <>
      {!isUpgrade && (
        <div>
          <p
            onClick={() => handleChangeCurrentStep(-1)}
            className="flex items-center text-neutral-500 mb-6 cursor-pointer"
          >
            <AiOutlineArrowLeft className="mr-1" />{buttonsText.back}
          </p>
          <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
            {annualPlanText.title}
          </h1>
          <p className="save-proposition text-5xl font-semibold text-dark-blue">
            {annualPlanText.save}
          </p>
          <p className="text-2xl mb-6">
            <span className="line-through text-neutral-500">
              {annualPlanText.oldPrice}
            </span>{" "}
            <span className="text-custom-coral font-bold">
              {annualPlanText.specialPrice}{" "}
            </span>
            {annualPlanText.specialOffer}
          </p>
          <form action="" onSubmit={handleOnSubmit}>
            <input
              id="checkbox"
              type="checkbox"
              className="mr-3 border-custom-blue rounded border-2"
              required
            />
            <label htmlFor="checkbox">{annualPlanText.agreeToUpgrade}</label>
            <div className="submit">
              <Button
                type="submit"
                className="sm:w-96 w-80 mt-6 bg-custom-yellow !rounded"
                color="warning"
              >
                {annualPlanText.upgradeBtn}
              </Button>
            </div>
            <div className="text-center mt-6 sm:w-96 w-80">
              <p
                onClick={changeCurrentStep}
                className="text-neutral-500 underline text-xl cursor-pointer"
              >
                {annualPlanText.noThankYou}
              </p>
              <p className="text-sm mt-6">{annualPlanText.note}</p>
            </div>
          </form>
        </div>
      )}

      {isUpgrade && (
        <div>
          <p
            onClick={() => handleChangeCurrentStep(-1)}
            className="flex items-center text-neutral-500 mb-6 cursor-pointer"
          >
            <AiOutlineArrowLeft className="mr-1" />{buttonsText.back}
          </p>
          <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
            {annualPlanText.congratulations}
          </h1>
          <p className="text-xl">
            {annualPlanText.emailSent}{" "}
            <span className="font-bold">{email}</span>
            {annualPlanText.details}
          </p>
          <div className="submit">
            <Button
              onClick={changeCurrentStep}
              className="sm:w-96 w-80 mt-6 bg-custom-yellow !rounded"
              color="warning"
            >
              {buttonsText.continueBtn} <BsArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default AnnualPlan;
