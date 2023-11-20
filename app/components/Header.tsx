"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { AlignRightIcon, ShoppingBag, ShoppingBagIcon, X } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Men", href: "/Men", current: true },
  { name: "Women", href: "/Women", current: false },
  { name: "Teen", href: "/Teen", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { handleCartClick } = useShoppingCart();
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-gray-800 mb-8">
      {({ open }) => (
        <div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AlignRightIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <h1 className="text-xl text-gray-500  font-bold">
                      M<span className="text-primary">E</span>
                    </h1>
                  </Link>
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((link, idx) => (
                      <div key={idx}>
                        {pathname == link.href ? (
                          <Link
                            href={link.href}
                            className="px-3 py-2 text-base text-white font-medium"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <Link
                            href={link.href}
                            className="px-3 py-2 text-base font-medium  text-gray-300 transition duration-100 hover:text-primary"
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
              </div>
              <Button
                variant="ghost"
                className="  rounded-none "
                onClick={() => handleCartClick()}
              >
                <ShoppingBag className="text-gray-400" />
                <span
                  aria-label="cart"
                  className="hidden text-xs font-semibold text-gray-700"
                >
                  Cart
                </span>
              </Button>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}

              {navigation.map((link, idx) => (
                <div key={idx} className="space-y-1 px-2 pb-3 pt-2">
                  {pathname == link.href ? (
                    <Disclosure.Button
                      key={link.name}
                      as="a"
                      href={link.href}
                      className="px-3 py-2 text-base text-white font-medium"
                    >
                      {link.name}
                    </Disclosure.Button>
                  ) : (
                    <Disclosure.Button
                      key={link.name}
                      as="a"
                      href={link.href}
                      className="px-3 py-2 text-base font-medium text-gray-300 transition duration-100 hover:text-primary"
                    >
                      {link.name}
                    </Disclosure.Button>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
