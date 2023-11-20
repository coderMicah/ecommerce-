"use client";
import { Button } from "@/components/ui/button";
import { urlForImage } from "@/lib/image";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id:string
}

function AddToBag({ name, description, currency, price, image,price_id }: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    currency,
    price,
    image: urlForImage(image).url(),
    price_id
  };

  return (
    <Button
      className="flex w-full items-center justify-center rounded-md "
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Bag
    </Button>
  );
}

export default AddToBag;
