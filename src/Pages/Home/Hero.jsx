import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import React from "react";
import HeroPhoto from "../../assets/hero.jpg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {t("Home.HeroText")}
                </h1>
                <p className="mt-6 text-2xl leading-8 text-gray-600">
                  {t("Home.HeroDesc")}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button color="primary" size="lg" radius="sm">
                    {t("Home.HeroCTA")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={HeroPhoto}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
