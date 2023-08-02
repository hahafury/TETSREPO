import { Progress } from "flowbite-react";
import React, { useState } from "react";

interface ProgressBarProps {
  currentStep: number;
  isPlanAnnual: boolean;
}

interface IStep {
  id: number;
  value: string;
}

const steps: IStep[] = [
  {
    id: 1,
    value: "Set a password",
  },
  {
    id: 2,
    value: "Save with annual plan",
  },
  {
    id: 3,
    value: "Newsletters",
  },
  {
    id: 4,
    value: "Mobile app",
  },
  {
    id: 5,
    value: "Free seat",
  },
  {
    id: 6,
    value: "Subscriber tips",
  },
  {
    id: 7,
    value: "Free gift",
  },
];

function ProgressBar({ currentStep, isPlanAnnual }: ProgressBarProps) {
  const getDefaultSteps = (): IStep[] => {
    if (isPlanAnnual) {
      return steps.filter((item) => item.id !== 2);
    } else return steps;
  };

  const [progressSteps, setProgressSteps] = useState<IStep[]>(
    getDefaultSteps()
  );

  const calculateProgress = () => {
    if (isPlanAnnual && currentStep !== 1) {
      return (currentStep - 1) * (100 / progressSteps.length);
    }
    return currentStep * (100 / progressSteps.length);
  };
  
  return (
    <div className="px-16 py-4 bg-custom-blue relative">
      <Progress
        className="mb-3.5"
        progress={calculateProgress()}
        color="yellow"
      />
      <div className="justify-between hidden sm:flex text-xs">
        {progressSteps.map((step) => (
          <p key={step.id} className={`step text-blue-100 ${currentStep === step.id ? "font-semibold" : ""}`}>
            {step.value}
          </p>
        ))}
      </div>
      <img className="absolute right-10 top-1" src="gift_2.svg" alt="gift" />
    </div>
  );
}

export default ProgressBar;
