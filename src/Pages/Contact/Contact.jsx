import { Input } from "@nextui-org/react";
import { Button, Textarea } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              POLO SRL
            </h2>
            <br />
            <div className="flex flex-col gap-3">
              <dl className="flex flex-row gap-4">
                <dt className="flex-none">
                  <ApartmentOutlinedIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Address</span>
                </dt>
                <dd>
                  Via Dante Alighieri 64, 50041 <br />
                  Calenzano (FI), Italy
                </dd>
              </dl>
              <dl className="flex flex-row gap-4">
                <dt className="flex-none">
                  <PhoneOutlinedIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Phone</span>
                </dt>
                <dd>+39 055 882 5888</dd>
              </dl>

              <dl className="flex flex-row gap-4">
                <dt className="flex-none">
                  <FaxOutlinedIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="sr-only">FAX</span>
                </dt>
                <dd>
                  <span className="font-semibold">FAX:</span> +39 055 887 6111
                </dd>
              </dl>
            </div>
            <br />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {t("Contact.Sales").toUpperCase()}
            </h2>
            <br />
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <MailOutlineRoundedIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900"
                  href="mailto:hello@example.com"
                >
                  <span className="font-semibold">KRYO:</span>{" "}
                  lapo@poloitalia.com <br />
                  <span className="font-semibold">HELIOS:</span>{" "}
                  luca@poloitalia.com
                </a>
              </dd>
            </div>
            <br />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {t("Contact.Service").toUpperCase()}
            </h2>
            <br />
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <MailOutlineRoundedIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900"
                  href="mailto:hello@example.com"
                >
                  gianluca@poloitalia.com
                </a>
              </dd>
            </div>
            <br />
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {t("Contact.Accounting").toUpperCase()}
            </h2>
            <br />
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <MailOutlineRoundedIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd>
                <a
                  className="hover:text-gray-900"
                  href="mailto:hello@example.com"
                >
                  elisa@poloitalia.com
                </a>
              </dd>
            </div>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600"></dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <div className="mt-2.5">
                  <Input label={t("Contact.Form.Name")} variant="underlined" />
                </div>
              </div>
              <div>
                <div className="mt-2.5">
                  <Input
                    label={t("Contact.Form.Surname")}
                    variant="underlined"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input
                    type="email"
                    label={t("Contact.Form.Email")}
                    variant="underlined"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input
                    label={t("Contact.Form.Object")}
                    variant="underlined"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Textarea
                    label={t("Contact.Form.Message")}
                    variant="underlined"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button radius="sm" color="primary">
                {t("Contact.Form.SendMessage")}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
