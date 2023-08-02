import { Button, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import YouTube, { YouTubeProps } from "react-youtube";
import texts from "../../utils/texts.json";

interface SubscriberTipsProps {
  handleChangeCurrentStep: (value: number) => void;
}

const { subscriberTipsText, buttonsText } = texts;

function SubscriberTips({ handleChangeCurrentStep }: SubscriberTipsProps) {
  const [isLoading, setIsLoading] = useState(true);

  const changeCurrentStep = () => {
    handleChangeCurrentStep(1);
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    setIsLoading(false);
    event.target.mute();
  };
  
  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  return (
    <div className="pb-60">
      <p
        onClick={() => handleChangeCurrentStep(-1)}
        className="flex items-center text-neutral-500 mb-6 cursor-pointer"
      >
        <AiOutlineArrowLeft className="mr-1" />
        {buttonsText.back}
      </p>
      <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
        {subscriberTipsText.title}
      </h1>
      <p className="text-xl mb-6">{subscriberTipsText.watchTheVideo}</p>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner aria-label="Default status example" />
        </div>
      )}
      <YouTube
        loading="lazy"
        videoId="WeWzJsFv_-I"
        opts={opts}
        onReady={onPlayerReady}
      />
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
  );
}

export default SubscriberTips;
