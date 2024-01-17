import React from "react";
import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  return (
    <div className="bg-white max-w-screen-2xl mx-auto py-24 sm:py-32">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
            alt="Office content 1"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              {t("Home.OurStrength")}
            </p>
            <p className="mt-8 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <dl className="justify-center text-center items-center mt-16 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-1">
              <div>
                <dt className="font-medium text-gray-900">Lorem ipsum</dt>
                <dd className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Lorem ipsum</dt>
                <dd className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Lorem ipsum</dt>
                <dd className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
            alt="Office content 1"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              {t("Home.OurStrength")}
            </p>
            <p className="mt-8 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <dl className="justify-center text-center items-center mt-16 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-1">
              <div>
                <dt className="font-medium text-gray-900">Lorem ipsum</dt>
                <dd className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Lorem ipsum</dt>
                <dd className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Lorem ipsum</dt>
                <dd className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
