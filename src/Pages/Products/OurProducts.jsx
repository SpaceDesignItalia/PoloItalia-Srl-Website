import React from "react";
import { useTranslation } from "react-i18next";
import foto8 from "../../assets/FOTO8.jpg";
import foto9 from "../../assets/FOTO9.jpg";
import foto10 from "../../assets/FOTO10.jpg";
import foto11 from "../../assets/FOTO11.jpg";
import foto12 from "../../assets/FOTO12.jpg";
import foto13 from "../../assets/FOTO13.jpg";
import foto14 from "../../assets/FOTO14.jpg";

export default function OurProducts() {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("OurProducts.OurProds")}
        </h2>
        <div className="relative overflow-hidden rounded-lg mt-16 lg:h-96">
          <div className="absolute inset-0">
            <img
              src={foto8}
              alt="Office content 1"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">
                {t("OurProducts.Product1")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                {t("OurProducts.Product1desc")}
              </p>
            </div>
            <a
              href="/ourProducts/product/1"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              {t("OurProducts.ExploreProduct")}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg mt-16 lg:h-96">
          <div className="absolute inset-0">
            <img
              src={foto9}
              alt="Office content 2"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">
                {t("OurProducts.Product2")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                {t("OurProducts.Product2desc")}
              </p>
            </div>
            <a
              href="/ourProducts/product/2"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              {t("OurProducts.ExploreProduct")}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg mt-16 lg:h-96">
          <div className="absolute inset-0">
            <img
              src={foto10}
              alt="Office content 3"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">
                {t("OurProducts.Product3")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                {t("OurProducts.Product3desc")}
              </p>
            </div>
            <a
              href="/ourProducts/product/3"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              {t("OurProducts.ExploreProduct")}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg mt-16 lg:h-96">
          <div className="absolute inset-0">
            <img
              src={foto11}
              alt="Office content 4"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">
                {t("OurProducts.Product4")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                {t("OurProducts.Product4desc")}
              </p>
            </div>
            <a
              href="/ourProducts/product/4"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              {t("OurProducts.ExploreProduct")}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg mt-16 lg:h-96">
          <div className="absolute inset-0">
            <img
              src={foto12}
              alt="Office content 5"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">
                {t("OurProducts.Product5")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                {t("OurProducts.Product5desc")}
              </p>
            </div>
            <a
              href="/ourProducts/product/5"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              {t("OurProducts.ExploreProduct")}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg mt-16 lg:h-96">
          <div className="absolute inset-0">
            <img
              src={foto13}
              alt="Office content 6"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">
                {t("OurProducts.Product6")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                {t("OurProducts.Product6desc")}
              </p>
            </div>
            <a
              href="/ourProducts/product/6"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              {t("OurProducts.ExploreProduct")}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg mt-16 lg:h-96">
          <div className="absolute inset-0">
            <img
              src={foto14}
              alt="Office content 7"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h2 className="text-xl font-bold text-white">
                {t("OurProducts.Product7")}
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                {t("OurProducts.Product7desc")}
              </p>
            </div>
            <a
              href="/ourProducts/product/7"
              className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >
              {t("OurProducts.ExploreProduct")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
