"use client"
import { CartProvider } from "use-shopping-cart";

function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
}

export default ShoppingCartProvider;