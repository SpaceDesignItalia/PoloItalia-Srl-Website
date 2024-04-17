import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import foto8 from "../../assets/FOTO8.jpg";
import foto9 from "../../assets/FOTO9.jpg";
import foto10 from "../../assets/FOTO10.jpg";
import foto11 from "../../assets/FOTO11.jpg";
import foto12 from "../../assets/FOTO12.jpg";
import foto13 from "../../assets/FOTO13.jpg";
import foto14 from "../../assets/FOTO14.jpg";

export default function Products() {
  const { id } = useParams();
  const { t } = useTranslation();

  const photoMap = {
    8: foto8,
    9: foto9,
    10: foto10,
    11: foto11,
    12: foto12,
    13: foto13,
    14: foto14,
  };
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 my-auto">
              <div className="flex flex-col gap-5 lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {t("OurProducts.Product" + id)}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {t("OurProducts.Product" + id + "desc")}
                </p>
              </div>
            </div>
            <img
              src={photoMap[id]}
              alt={`Office content ${id}`}
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
