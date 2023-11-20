"use client";
import { Button } from "@/components/ui/button";
import { urlForImage } from "@/lib/image";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "./AddToBag";


function Checkout({ name, description, currency, price, image,price_id }: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
   const buyNow = (priceId:string) => {
      checkoutSingleItem(priceId)
   }
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
        buyNow(product.price_id)
      }}
    >
      Add To Bag
    </Button>
  );
}

export default Checkout;
