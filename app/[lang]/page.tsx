import Image from "next/image"
import Link from "next/link"
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang)
  return (
    <>
      <div className="mx-auto  h-full w-full flex items-center justify-center text-center relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="w-full max-w-screen-xl px-2.5 md:px-20 pb-28 pt-28 flex flex-col items-center justify-center text-center sm:pt-40 ">
          <Link
            href="/"
            className="rounded-2xl bg-blue-100 px-4 py-1.5 text-sm font-medium mb-3"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="scroll-m-20 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            {page.home.title}
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mt-5">
            Effortlessly curate, collaborate, and craft with a cutting-edge
            platform that seamlessly organizes your web design research and
            inspiration.
          </p>
          <div className="mt-2 flex items-center gap-6">
            <Button asChild className="group p-5 mt-5">
              <Link href="/">
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </Button>
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/hero.webp"
                    alt="hero image"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white  shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
