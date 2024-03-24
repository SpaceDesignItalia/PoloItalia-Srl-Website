import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("Home.ContactForm.Title")}
        </h2>
        <p className="mt-2 text-xl leading-8 text-gray-600">
          {t("Home.ContactForm.Description")}
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <div className="mt-2.5">
              <Input
                variant="underlined"
                label={t("Home.ContactForm.FirstName")}
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <Input
                variant="underlined"
                label={t("Home.ContactForm.LastName")}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                type="email"
                variant="underlined"
                label={t("Home.ContactForm.Email")}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                variant="underlined"
                label={t("Home.ContactForm.Company")}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea
                variant="underlined"
                label={t("Home.ContactForm.Message")}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button type="submit" color="primary" radius="sm" fullWidth>
            {t("Home.ContactForm.SendButton")}
          </Button>
        </div>
      </form>
    </div>
  );
}
