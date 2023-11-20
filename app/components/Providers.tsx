"use client"
import { CartProvider } from "use-shopping-cart";

function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://ecommerce-xi-blue.vercel.app/stripe/success"
      cancelUrl="https://ecommerce-xi-blue.vercel.app/stripe/error"
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
