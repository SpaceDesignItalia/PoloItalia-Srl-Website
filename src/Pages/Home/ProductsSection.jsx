import React from "react";
import { Button, Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import foto9 from "../../assets/FOTO9.jpg";

export default function ProductsSection() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-primary-900">
      <div className="relative h-80 overflow-hidden bg-primary md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img className="h-full w-full object-cover" src={foto9} alt="" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("Home.Product.ProductTitle")}
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-300">
            {t("Home.Product.ProductDesc")}
          </p>
          <div className="mt-8">
            <Button
              color="primary"
              radius="sm"
              size="lg"
              as={Link}
              href="/ourProducts"
            >
              {t("Home.Product.ProductCTA")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
