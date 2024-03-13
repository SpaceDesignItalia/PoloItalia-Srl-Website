import React from "react";
import StrenghtPhoto from "../../assets/strenght.jpg";
import { useTranslation } from "react-i18next";
import BrushRoundedIcon from "@mui/icons-material/BrushRounded";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";

export default function OurStrengths() {
  const { t } = useTranslation();

  const features = [
    {
      name: t("Home.Strength1.name"),
      description: t("Home.Strength1.description"),
      icon: BrushRoundedIcon,
    },
    {
      name: t("Home.Strength2.name"),
      description: t("Home.Strength2.description"),
      icon: SettingsSuggestIcon,
    },
    {
      name: t("Home.Strength3.name"),
      description: t("Home.Strength3.description"),
      icon: SupportAgentRoundedIcon,
    },
  ];
  return (
    <div className="bg-white max-w-7xl mx-auto sm:py-32">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src={StrenghtPhoto}
            alt="Office content 1"
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              {t("Home.OurStrength")}
            </p>

            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
