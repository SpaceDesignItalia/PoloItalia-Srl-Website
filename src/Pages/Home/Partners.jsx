import React from "react";
import { useTranslation } from "react-i18next";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";
import partner5 from "../../assets/partner5.png";
import partner6 from "../../assets/partner6.png";

export default function Partners() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold leading-8 text-gray-900">
            {t("Home.Partners")}
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
            <a target="blank" href="https://krytem.de">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={partner5}
                alt="Transistor"
                width={158}
                height={48}
              />
            </a>
            <a target="blank" href="https://www.igas-ts.com">
              <img
                className="col-span-2 col-start-1 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={partner1}
                alt="Statamic"
                width={158}
                height={48}
              />
            </a>
            <a target="blank" href="https://www.m-tech-gmbh.de">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={partner2}
                alt="Reform"
                width={158}
                height={48}
              />
            </a>
            <a target="blank" href="https://igph.net">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={partner3}
                alt="Tuple"
                width={158}
                height={48}
              />
            </a>
            <a target="blank" href="https://www.vtechvacuumfluid.com">
              <img
                className="col-span-2 col-start-1 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={partner6}
                alt="Statamic"
                width={158}
                height={48}
              />
            </a>
            <a target="blank" href="https://www.aeroflex.co.uk">
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-1 lg:col-span-1"
                src={partner4}
                alt="SavvyCal"
                width={158}
                height={48}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
