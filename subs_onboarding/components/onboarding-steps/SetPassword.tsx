import { changePassword, checkIsPasswordExists } from "../../api/api";
import { Button, Spinner } from "flowbite-react";
import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import texts from "../../utils/texts.json";

interface SetPasswordProps {
  handleChangeCurrentStep: (value: number) => void;
  isPlanAnnual: boolean;
  email: string;
}

const { setPasswordText, buttonsText } = texts;

function SetPassword({
  handleChangeCurrentStep,
  isPlanAnnual,
  email,
}: SetPasswordProps) {
  const [inputType, setInputType] =
    useState<HTMLInputTypeAttribute>("password");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isPasswordExists, setIsPasswordExists] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const changeInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setPassword(e.target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isError) return;
    handleChangeCurrentStep(isPlanAnnual ? 2 : 1);

    if (!isPasswordExists) {
      try {
        await changePassword(password);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleValidatePassword = () => {
    if (password.length < 5) {
      setIsError(true);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await checkIsPasswordExists(email);
        if (res.data.data.exists && res.data.data.fullRegistration) {
          setIsPasswordExists(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h1 className="mb-3.5 text-3xl sm:text-4xl font-bold">
        {setPasswordText.title}
      </h1>
      <div className="flex items-center mb-3.5">
        <img src="gift.svg" />
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {setPasswordText.gift}
        </h2>
      </div>
      <p className="text-2xl mb-6">{setPasswordText.mostOfSubscription}</p>
      <p className="text-2xl">
        {setPasswordText.userName} <span className="font-bold">{email}</span>
      </p>
      <p className="text-lg mt-3 mb-6">{setPasswordText.rememberEmail}</p>
      <form onSubmit={handleOnSubmit}>
        {isLoading && (
          <div className="sm:w-96 w-80 text-center mb-4">
            <Spinner />
          </div>
        )}
        {!isPasswordExists && !isLoading && (
          <div>
            <div className="relative">
              <input
                className="sm:w-96 w-80 rounded-sm"
                placeholder="Set Up Your Password"
                type={inputType}
                required={true}
                value={password}
                onChange={handlePasswordChange}
                onBlur={handleValidatePassword}
              />
              <span
                onClick={changeInputType}
                className="underline text-neutral-500 hover:text-gray-400 absolute top-3 left-80 z-10 text-xs cursor-pointer"
              >
                {inputType === "password" ? "show" : "hide"}
              </span>
            </div>
            <p className={`${isError ? "text-red-500" : ""} text-sm mb-3`}>
              {setPasswordText.minPasswordLength}
            </p>
          </div>
        )}
        <div className="submit">
          <Button
            type="submit"
            className="sm:w-96 w-80 bg-custom-yellow !rounded"
            color="warning"
          >
            {isPasswordExists ? buttonsText.continueBtn : buttonsText.submitBtn}{" "}
            <BsArrowRight className="ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SetPassword;
