"use client"

import React from "react"

import Link from "next/link"
import { LangSwitcher } from "@/components/lang-switcher"
import { cn } from "@/lib/utils"
import useScroll from "@/hooks/use-scroll"

export default function LandingNavbar({ lang }: { lang: string }) {
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
              <Link
                href={`${lang}/about`}
                className="flex items-center text-lg font-semibold text-muted-foreground sm:text-sm"
              >
                About
              </Link>  
            </nav>
          </div>
          <LangSwitcher lang={lang} />
        </div>
      </div>
    </div>
  )
}
