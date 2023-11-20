"use client";
import { Button } from "@/components/ui/button";

import { AlignRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import SideNav from "./SideNav";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Men", href: "/Men", current: true },
  { name: "Women", href: "/Women", current: false },
  { name: "Teen", href: "/Teen", current: false },
];

function Navbar() {
  const pathname = usePathname();
  const {handleCartClick} = useShoppingCart()
 
  return (
    <header className="mb-8 py-4 md:py-6 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <h1 className="text-xl md:text-4xl font-bold">
            Next <span className="text-primary">Ecommerce</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {navigation.map((link, idx) => (
            <div key={idx}>
              {pathname == link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex ">
          <Button variant="ghost" className="  rounded-none " onClick={() => handleCartClick()}>
             <ShoppingBag /> 
            <span  aria-label="cart" className="hidden text-xs font-semibold text-gray-700">Cart</span>
          </Button>
          
        </div>
      </div>
     
    </header>
  );
}

export default Navbar;
