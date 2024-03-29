import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

export default function Contact() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-40">
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
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              POLO SRL
            </h2>
            <br />
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <ApartmentOutlinedIcon
                  className="h-7 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </dt>
              <dd className="text-xl">
                Via Dante Alighieri 64, 50041 Calenzano (FI)
                <br />
                ITALY
              </dd>
            </div>
            <br />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              UFFICIO COMMERCIALE
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
              <dd className="text-xl">
                <a
                  className="hover:text-gray-900"
                  href="mailto:hello@example.com"
                >
                  KRYO: lapo@poloitalia.com <br />
                  HELIOS: luca@poloitalia.com
                </a>
              </dd>
            </div>
            <br />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              POST VENDITA
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
              <dd className="text-xl">
                <a
                  className="hover:text-gray-900"
                  href="mailto:hello@example.com"
                >
                  gianluca@poloitalia.com
                </a>
              </dd>
            </div>
            <br />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              AMMINISTRAZIONE E FORNITORI
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
              <dd className="text-xl">
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
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-40"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <div className="mt-2.5">
                  <Input label="Nome" variant="underlined" />
                </div>
              </div>
              <div>
                <div className="mt-2.5">
                  <Input label="Cognome" variant="underlined" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input type="email" label="Email" variant="underlined" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Input label="Oggetto" variant="underlined" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                  <Textarea variant="underlined" label="Messaggio" />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button size="lg" radius="sm" color="primary">
                Invia
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
