import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Men", href: "/Men", current: true },
  { name: "Women", href: "/Women", current: false },
  { name: "Teen", href: "/Teen", current: false },
];
type Props = {
  open: boolean;
};
function SideNav({ open }: Props) {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <Sheet open={open}>
      
      <SheetContent>
        <div className="flex justify-between">
          <Link href="/">
            <h1 className="text-xl  font-bold">
              Next <span className="text-primary">Ecommerce</span>
            </h1>
          </Link>

          <div className="">
            <Button
              variant="ghost"
              className="rounded-none "
              onClick={() => handleCartClick()}
            >
              <ShoppingBag />
            </Button>
          </div>
        </div>

        <nav className="flex flex-col gap-6 my-8">
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

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SideNav;
