import { assignFreeSeatToUser } from "../../api/api";
import { Button } from "flowbite-react";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import texts from "../../utils/texts.json";
import ErrorMessage from "../ErrorMessage";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface FreeSeatProps {
  handleChangeCurrentStep: (value: number) => void;
}

const { freeSeatText, buttonsText, errorsText } = texts;

function FreeSeat({ handleChangeCurrentStep }: FreeSeatProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (id === "name") {
      setName(e.target.value);
    } else if (id === "email") {
      setEmail(e.target.value);
    } else return;
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await assignFreeSeatToUser(email);
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
        {freeSeatText.title}
      </h1>
      <p className="text-xl leading-5 mb-9">{freeSeatText.description}</p>
      <form onSubmit={handleOnSubmit}>
        <input
          id="name"
          className="sm:w-96 w-80 border-neutral-500 mb-4 rounded-sm"
          type="text"
          required={true}
          placeholder="Their Name"
          value={name}
          onChange={(e) => handleInputChange(e, "name")}
        />
        <input
          id="email"
          className="sm:w-96 w-80 text-neutral-500 border-neutral-500 mb-5 rounded-sm"
          type="email"
          required={true}
          placeholder="Enter Email"
          value={email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        <div className="submit mt-3">
          <div className="sm:w-96 w-80 mb-2">
            {isError && <ErrorMessage errorMsg={errorsText.shortMessage} />}
          </div>
          <Button
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
        </div>
      </form>
    </div>
  );
}

export default FreeSeat;
