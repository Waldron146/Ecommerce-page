import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl">STORE</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                Shop
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                New Arrivals
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                Brands
              </a>
              <a href="#" className="text-gray-700 hover:text-black transition-colors">
                Sale
              </a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5 lg:hidden" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onCartClick} className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center p-0 text-xs bg-black">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#" className="text-gray-700 hover:text-black transition-colors">
                    Shop
                  </a>
                  <a href="#" className="text-gray-700 hover:text-black transition-colors">
                    New Arrivals
                  </a>
                  <a href="#" className="text-gray-700 hover:text-black transition-colors">
                    Brands
                  </a>
                  <a href="#" className="text-gray-700 hover:text-black transition-colors">
                    Sale
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
