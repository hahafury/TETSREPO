import { Button } from "flowbite-react";
import React, { useState } from "react";
import SelectUsStates from "../SelectUsStates";
import { usePlacesWidget } from "react-google-autocomplete";
import texts from "../../utils/texts.json";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface IState {
  id: string;
  name: string;
}

export interface IAddress {
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: IState;
  zipcode: string;
}

const initialValues: IAddress = {
  name: "",
  address1: "",
  address2: "",
  city: "",
  state: {
    id: "",
    name: "",
  },
  zipcode: "",
};

const { freeGiftText, buttonsText } = texts;

interface FreeGiftProps {
  handleChangeCurrentStep: (value: number) => void;
}

function FreeGift({ handleChangeCurrentStep }: FreeGiftProps) {
  const [values, setValues] = useState<IAddress>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValues({
      ...values,
      state: {
        name: e.target.selectedOptions[0].innerText,
        id: e.target.value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("values", values);
  };

  const extractAddress = (place: google.maps.places.PlaceResult) => {
    const extractAddressLine = (): string => {
      if (place.formatted_address) {
        return place.formatted_address;
      } else return "";
    };

    const findCity = (): string => {
      if (place.address_components) {
        const city = place.address_components.find((component) =>
          component.types.includes("locality")
        );
        if (city && city.long_name) {
          return city.long_name;
        } else return "";
      } else return "";
    };

    const findState = (): IState => {
      if (place.address_components) {
        const state = place.address_components.find((component) =>
          component.types.includes("administrative_area_level_1")
        );
        if (state && state.long_name) {
          return { id: state.short_name, name: state.long_name };
        } else return { id: "", name: "" };
      } else return { id: "", name: "" };
    };

    const findZipcode = (): string => {
      if (place.address_components) {
        const zipcode = place.address_components.find((component) =>
          component.types.includes("postal_code")
        );
        if (zipcode && zipcode.long_name) {
          return zipcode.long_name;
        } else return "";
      } else return "";
    };

    setValues((prev) => ({
      ...prev,
      address1: extractAddressLine(),
      city: findCity(),
      state: findState(),
      zipcode: findZipcode(),
    }));
  };

  const { ref } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY,
    onPlaceSelected: (place) => {
      extractAddress(place);
    },
    options: {
      types: [],
      componentRestrictions: { country: "us" },
    },
  });

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
        {freeGiftText.title}
      </h1>
      <p className="text-xl mt-4 mb-8">{freeGiftText.subtitle}</p>
      <img src="AE-V1.jpg" alt="ae-v1" />
      <p className="text-2xl font-bold mt-8">{freeGiftText.addressTitle}</p>
      <p className="text-xl">{freeGiftText.note}</p>
      <form className="mt-4 address-form" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-bold leading-6" htmlFor="name">
            {freeGiftText.name}
          </label>
          <input
            id="name"
            className="sm:w-96 w-80 border-neutral-500 rounded-sm"
            type="text"
            required={true}
            value={values.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <p className="text-xs leading-6 mb-3">{freeGiftText.namesNote}</p>
          <label
            className="text-xs font-bold leading-6"
            htmlFor="address-line-1"
          >
            {freeGiftText.addressLine1}
          </label>
          <input
            id="address-line-1"
            ref={ref as any}
            placeholder=""
            className="sm:w-96 w-80 border-neutral-500 mb-4 rounded-sm"
            type="text"
            value={values.address1}
            onChange={(e) => handleChange(e, "address1")}
          />
          <label
            className="text-xs font-bold leading-6"
            htmlFor="address-line-2"
          >
            {freeGiftText.addressLine2}
          </label>
          <input
            id="address-line-2"
            className="sm:w-96 w-80 border-neutral-500 mb-4 rounded-sm"
            type="text"
            value={values.address2}
            onChange={(e) => handleChange(e, "address2")}
          />
          <div className="flex sm:w-96 w-80 flex-wrap justify-between">
            <div className="sm:w-40 w-full">
              <label
                className="text-xs font-bold leading-6"
                htmlFor="address-line-2"
              >
                {freeGiftText.city}
              </label>
              <input
                id="city"
                className="border-neutral-500 mb-4 rounded-sm w-full"
                type="text"
                value={values.city}
                onChange={(e) => handleChange(e, "city")}
              />
            </div>
            <div className="sm:ml-3.5 sm:w-24 w-36">
              <label className="text-xs font-bold leading-6" htmlFor="states">
                {freeGiftText.state}
              </label>
              <SelectUsStates
                values={values}
                handleSelectChange={handleSelectChange}
              />
            </div>
            <div className="sm:ml-3.5 sm:w-24 w-36">
              <label className="text-xs font-bold leading-6" htmlFor="zipcode">
                {freeGiftText.zipcode}
              </label>
              <input
                id="zipcode"
                className="border-neutral-500 mb-4 rounded-sm w-full"
                type="text"
                value={values.zipcode}
                onChange={(e) => handleChange(e, "zipcode")}
              />
            </div>
          </div>
          <div className="submit mt-3">
            <Button
              type="submit"
              className="sm:w-96 w-80 font-bold bg-custom-yellow !rounded"
              color="warning"
            >
              {freeGiftText.submit}
            </Button>
          </div>
          <div className="text-center mt-6 sm:w-96 w-80">
            <p className="text-neutral-500 underline text-xl cursor-pointer">
              {freeGiftText.skip}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FreeGift;
