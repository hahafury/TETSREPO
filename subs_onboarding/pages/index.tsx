import ProgressBar from "../components/ProgressBar";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import SetPassword from "../components/onboarding-steps/SetPassword";
import AnnualPlan from "../components/onboarding-steps/AnnualPlan";
import Newsletters from "../components/onboarding-steps/Newsletters";
import MobileApp from "../components/onboarding-steps/MobileApp";
import FreeSeat from "../components/onboarding-steps/FreeSeat";
import SubscriberTips from "../components/onboarding-steps/SubscriberTips";
import FreeGift from "../components/onboarding-steps/FreeGift";
import { initPipa } from "../utils/utils";
import GiftModal from "../components/GiftModal";
import ErrorMessage from "../components/ErrorMessage";
import { Spinner } from "flowbite-react";
import texts from "../utils/texts.json";
import { checkIsPlanAnnual } from "../api/api";

const { errorsText } = texts;

export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isPlanAnnual, setIsPlanAnnual] = useState<boolean>(false);
  const [isGiftModalOpen, setIsGiftModalOpen] = useState<boolean>(false);
  const [isModalBeenOpened, setIsModalBeenOpened] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    initPipa(function () {
      if (!window.ep?.pipaId?.didLoggedIn()) {
        window.epSubs.showTemplate("signin-popup", "POPUP", {
          hideCloseBtn: true,
        });
      } else {
        setIsLoggedIn(true);
        setIsLoading(false);
        setEmail(window.ep.pipaId.getUserData().email);
      }
    });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await checkIsPlanAnnual();
        if (
          res.data.data.planPeriod == 1 &&
          res.data.data.planPeriodUnit === "year"
        ) {
          setIsPlanAnnual(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isPlanAnnual]);

  const handleChangeCurrentStep = (value: number) => {
    setCurrentStep((cur) => cur + value);
  };

  const handleOpenModal = (open: boolean, e?: any) => {
    if (e?.target.localName === "input") return;
    setIsModalBeenOpened(true);
    if (open && !isModalBeenOpened) {
      setIsGiftModalOpen(true);
    }
    if (!open) {
      setIsGiftModalOpen(false);
    }
  };

  const handleError = (value: boolean) => {
    setIsError(value);
  };

  const getMainContent = (): JSX.Element | undefined => {
    switch (currentStep) {
      case 1:
        return (
          <SetPassword
            email={email}
            isPlanAnnual={isPlanAnnual}
            handleChangeCurrentStep={handleChangeCurrentStep}
          />
        );
      case 2:
        return (
          <AnnualPlan
            email={email}
            handleChangeCurrentStep={handleChangeCurrentStep}
            handleError={handleError}
          />
        );
      case 3:
        return (
          <Newsletters
            handleChangeCurrentStep={handleChangeCurrentStep}
            email={email}
            isPlanAnnual={isPlanAnnual}
          />
        );
      case 4:
        return <MobileApp handleChangeCurrentStep={handleChangeCurrentStep} />;
      case 5:
        return <FreeSeat handleChangeCurrentStep={handleChangeCurrentStep} />;
      case 6:
        return (
          <SubscriberTips handleChangeCurrentStep={handleChangeCurrentStep} />
        );
      case 7:
        return <FreeGift handleChangeCurrentStep={handleChangeCurrentStep} />;
    }
  };
  return (
    <div>
      <title>The Epoch Times Onboarding</title>
      {isLoading && (
        <div className="flex justify-center mt-6">
          <Spinner aria-label="Default status example" />
        </div>
      )}
      {isLoggedIn && !isLoading && (
        <div onMouseLeave={(e) => handleOpenModal(true, e)}>
          <Header />
          <ProgressBar currentStep={currentStep} isPlanAnnual={isPlanAnnual} />
          {isError && <ErrorMessage errorMsg={errorsText.message} />}
          <div
            className={`container my-0 mx-auto ${
              currentStep === 3 ? "max-w-6xl" : "max-w-600"
            } px-4 pb-10 pt-14`}
          >
            {getMainContent()}
          </div>
          <GiftModal
            isGiftModalOpen={isGiftModalOpen}
            handleOpenModal={handleOpenModal}
          />
        </div>
      )}
      {!isLoggedIn && !isLoading && (
        <ErrorMessage errorMsg="You must to be logged in" />
      )}
    </div>
  );
}
