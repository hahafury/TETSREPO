import React from "react";
import { useRouter } from "next/router";
import { getOfferDetails } from "../components/OfferData";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import OfferInfo from "../components/OfferInfo";
import Footer from "../components/Footer";
import PaymentForm from "../components/PaymentForm";
import Transition from "../components/Transition";

export default function Page() {
  const { o } = useRouter().query;
  let offerId;
  offerId = o ? o : "fs-1p1w-4p1w";
  const { offer, isLoading, isError } = getOfferDetails(offerId);

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage>
          {typeof isError === "string" ? isError : "Something went wrong"}
        </ErrorMessage>
      )}
      {offer && (
        <>
          <Header />
          <OfferInfo
            offer={offer}
            offerId={offerId}
          />
          <Transition />
          <PaymentForm
            offer={offer}
          />
          <Footer />
        </>
      )}
    </>
  );
}
