"use client"

import React from "react"

import Link from "next/link"
import { LangSwitcher } from "@/components/lang-switcher"
import { cn } from "@/lib/utils"
import useScroll from "@/hooks/use-scroll"
import { Locale } from "@/i18n.config"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Mail, Webhook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingNavbar({ lang }: { lang: Locale }) {
  const scrolled = useScroll(80);
  return (
      <div className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled})}>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="font-bold flex flex-row items-center">
              <div className="mr-1">
                <span className="text-lg">Bahadır</span>
                <span className="text-blue-700 text-lg">Korkmazer</span>
              </div>
            </Link>
            <nav className="hidden gap-6 md:flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          About
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Our services</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sky-100 to-slate-200 no-underline outline-none focus:shadow-md p-2"
                                href="/"
                              >
                                <Webhook className="h-6 w-6" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Bahadır<span className="text-blue-600">Korkmazer</span> 
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Beautifully designed components built with Radix UI and
                                  Tailwind CSS.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <ListItem href="/" title="Ecommerce">
                            Re-usable components built using Radix UI and Tailwind CSS.
                          </ListItem>
                          <ListItem href="/docs/installation" title="Reservation managment systems">
                            How to install dependencies and structure your app.
                          </ListItem>
                          <ListItem href="/docs/primitives/typography" title="CRM">
                            Styles for headings, paragraphs, lists...etc
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          Documentation
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
            </nav>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <LangSwitcher lang={lang} />
            <Button variant="ghost" className="group" asChild>
              <Link href="/">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"