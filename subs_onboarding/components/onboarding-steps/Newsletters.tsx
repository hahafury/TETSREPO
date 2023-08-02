import { Button } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import texts from "../../utils/texts.json";

interface NewslettersProps {
  handleChangeCurrentStep: (value: number) => void;
  email: string;
  isPlanAnnual: boolean;
}

const { newslettersText, buttonsText } = texts;

function Newsletters({ handleChangeCurrentStep, email, isPlanAnnual }: NewslettersProps) {
  const router = useRouter();
  const subscriptionId: string | undefined = router?.query
    .subscription_id as string;

  const changeCurrentStep = () => {
    handleChangeCurrentStep(1);
  };

  useEffect(() => {
    ETUtils.renderEmailPanel({
      tid: "3b952d88-8159-4b4b-8156-a2f3649f145c",
      version: 10,
      mode: "new-onboarding",
      userEmail: email,
      target: ".newsletter-management",
      continuePostMessage: true,
      subscription_id: subscriptionId,
      delayRender: 2500,
    });
  }, []);

  return (
    <div>
      <p
        onClick={() => handleChangeCurrentStep(isPlanAnnual ? -2 : -1)}
        className="flex items-center text-neutral-500 mb-6 cursor-pointer"
      >
        <AiOutlineArrowLeft className="mr-1" />{buttonsText.back}
      </p>
      <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
        {newslettersText.title}
      </h1>
      <p className="text-xl mt-4 mb-8">{newslettersText.youCanControl}</p>
      <div className="newsletter-management h-screen mb-3"></div>
      <div className="submit flex justify-center">
        <Button
          onClick={changeCurrentStep}
          type="submit"
          className="w-96 font-bold mb-6 !rounded"
          color="warning"
        >
          {buttonsText.submitBtn} <BsArrowRight className="ml-2" />
        </Button>
      </div>
      <div className="text-center">
        <p
          onClick={changeCurrentStep}
          className="text-neutral-500 underline text-xl cursor-pointer"
        >
          {buttonsText.skip}
        </p>
        <p className="text-sm mt-6">{newslettersText.note}</p>
      </div>
    </div>
  );
}

export default Newsletters;
