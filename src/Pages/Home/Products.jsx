import React from "react";
import { useTranslation } from "react-i18next";
import Product1list from "./Product1list";

export default function Products() {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <div className="gap-16 items-center py-2 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row lg:justify-between lg:py-4 lg:px-6">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {t("Home.Product1")}
            </h2>
            <p className="md:text-lg mb-4">{t("Home.Product1desc")}</p>
          </div>

          <div className="mt-8 md:w-1/2">
            <img
              className="mt-4 w-full lg:mt-10"
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              alt="office content 2"
            />
          </div>
        </div>
        <Product1list />
      </section>

      <section>
        <div className="gap-16 items-center py-8 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row-reverse lg:justify-between lg:px-6">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              {t("Home.Product2")}
            </h2>
            <p className="md:text-lg mb-4">{t("Home.Product2desc")}</p>
          </div>
          <div className="mt-8 md:w-1/2">
            <img
              className="mt-4 w-full lg:mt-10"
              style={{ width: "100%", height: "auto" }}
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
