import { Button } from "@nextui-org/react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="flex flex-col gap-5 lg:max-w-lg">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {t("Home.Product.ProductTitle")}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <Button
                  href="#"
                  color="primary"
                  radius="sm"
                  size="lg"
                  className="md:w-2/3"
                >
                  {t("Home.Product.ProductCTA")}
                </Button>
              </div>
            </div>
            className="w-full max-w-none rounded-xl shadow-xl ring-1
            ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </>
  );
}
