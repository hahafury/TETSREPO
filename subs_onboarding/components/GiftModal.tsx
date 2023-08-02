import { Button, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import texts from "../utils/texts.json";

interface GiftModal {
  isGiftModalOpen: boolean;
  handleOpenModal: (open: boolean, e?: any) => void;
}

const { giftModalText } = texts;

function GiftModal({ isGiftModalOpen, handleOpenModal }: GiftModal) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <Modal show={isGiftModalOpen} onClose={() => handleOpenModal(false)}>
          <Modal.Body className="text-center p-12">
            <div className="flex justify-center">
              <img src="gift.svg" />
            </div>

            <h1 className="mb-4 text-3xl sm:text-4xl font-bold">
              {giftModalText.title}
            </h1>
            <p className="text-2xl mb-6">{giftModalText.desc}</p>
            <div className="submit mt-3  mb-6  flex justify-center">
              <Button
                onClick={(e) => handleOpenModal(false, e)}
                className="sm:w-96 w-80 font-bold bg-custom-yellow !rounded"
                color="warning"
              >
                {giftModalText.button}
              </Button>
            </div>
            <p
              onClick={(e) => handleOpenModal(false, e)}
              className="text-neutral-500 underline text-xl cursor-pointer"
            >
              {giftModalText.skip}
            </p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default GiftModal;
