import React from "react";

const categories = [
  {
    name: "Lorem ipsum",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt: "Office content 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    name: "Lorem ipsum",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt: "Office content 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

export default function Product1list() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Lorem ipsum
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <div
                aria-hidden="true"
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
