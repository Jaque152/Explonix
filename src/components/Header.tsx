// Header.tsx (Explonix Redesign)
"use client";
import { T } from "@/components/T";
import { useLocale } from 'next-intl';
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label:<T> Inicio</T> },
  { href: "/experiencias", label: <T>Experiencias</T>}, 
  { href: "/#contacto", label: <T>Contacto</T> },
];

export function Header() {
  const locale = useLocale();
  const [showMiniCart, setShowMiniCart] = useState(false);
  const { cart, getItemCount } = useCart();
  const itemCount = getItemCount();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="glass-panel rounded-full px-6 flex items-center justify-between h-20 transition-all duration-300">
          
          {/* Logo Explonix */}
          <Link href={`/${locale}/`} className="flex items-center gap-3 group">
            <div className="w-12 h-12 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src="/logo-explonix.png" alt="Logo Explonix" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <span className="text-2xl font-bold tracking-tighter text-foreground leading-none">Explonix</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 bg-secondary/5 px-8 py-3 rounded-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div
              className="relative"
              onMouseEnter={() => setShowMiniCart(true)}
              onMouseLeave={() => setShowMiniCart(false)}
            >
              <Button variant="outline" size="icon" className="relative rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5" asChild>
                <Link href={`/${locale}/carrito`}>
                  <ShoppingCart className="w-5 h-5 text-foreground" />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold shadow-lg shadow-primary/30">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </Button>

              {showMiniCart && (
                <div className="absolute right-0 top-full mt-4 w-80 glass-panel rounded-3xl overflow-hidden z-50 border border-border/50">
                  <div className="p-5 border-b border-border/30 bg-background/50">
                    <h3 className="font-bold text-base tracking-tight">
                      <T>Tu Carrito</T>
                    </h3>
                  </div>
                  {cart.items.length === 0 ? (
                    <div className="p-8 text-center text-sm font-medium text-muted-foreground flex flex-col items-center gap-3">
                      <ShoppingCart className="w-8 h-8 opacity-20" />
                      <T>Tu carrito está vacío</T>
                    </div>
                  ) : (
                    <>
                      <div className="max-h-64 overflow-y-auto p-2">
                        {cart.items.slice(0, 3).map((item) => {
                          const miniImage = item.experience.images && item.experience.images.length > 0 
                                              ? item.experience.images[0] 
                                              : '/placeholder.jpg';

                          return (
                            <div key={`${item.packageId}-${item.date}`} className="p-3 mb-2 bg-background rounded-2xl border border-border/30 hover:border-primary/30 transition-colors">
                              <div className="flex gap-4 items-center">
                                <img src={miniImage} className="w-14 h-14 rounded-xl object-cover" alt={item.experience.title} />
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-bold truncate"><T>{item.experience.title}</T></h4>
                                  <p className="text-xs font-medium text-muted-foreground mb-1">{item.people}p • <T>{item.levelName}</T></p>
                                  <p className="text-sm font-black text-primary">{formatPrice(item.totalPrice)}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="p-4 bg-background">
                        <Link href={`/${locale}/carrito`} className="block w-full py-3 bg-foreground text-background hover:bg-primary transition-colors text-center rounded-xl text-sm font-bold shadow-lg">
                        <T>Ver Carrito</T></Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" className="rounded-full"><Menu className="w-5 h-5" /></Button>
              </SheetTrigger>
              <SheetContent side="right" className="rounded-l-[2rem] border-l-0">
                <SheetTitle className="sr-only"><T>Menú de navegación</T></SheetTitle>
                <div className="flex flex-col gap-6 mt-12 px-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={`/${locale}${link.href}`} className="text-2xl font-bold hover:text-primary transition-colors">{link.label}</Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}