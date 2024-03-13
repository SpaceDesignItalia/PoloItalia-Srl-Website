import React, { useState, useEffect } from "react";
import world from "../../assets/world.svg";
import { t } from "i18next";

export default function WorldMap() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            {t("Home.CustomersAroundWorld")}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <img src={world} alt="" />
        </div>
      </div>
    </div>
  );
}
