"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { Locale } from "@/i18n.config"

export function LangSwitcher({ lang }: {lang: Locale}) {
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          {lang === "tr" ? <Image src="/turkey.png" alt="tr flag" width={18} height={18} quality={100} className="mr-1" /> : <Image src="/united-kingdom.png" alt="tr flag" width={16} height={16} quality={80} loading="lazy" className="mr-1" />}
          <span className="capitalize">{lang}</span>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-8">
        <DropdownMenuItem onClick={() => router.push('/tr')}>
          <Image src="/turkey.png" alt="tr flag" width={16} height={16} quality={80} loading="lazy" className="mr-1" />
          TR
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/en')}>
          <Image src="/united-kingdom.png" alt="tr flag" width={16} height={16} quality={80} loading="lazy" className="mr-1" />
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

