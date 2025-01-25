"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Twitter, Send, ArrowUpRight, Youtube, LinkedinIcon, Instagram, LucideSignalMedium, SunMedium } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-20 bg-black/40 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 relative">
     
        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 mt-20">
          <div className="md:mx-auto">
            <div className="md:block flex items-center">
              <Link href="/" className="flex items-center space-x-2 mb-2">
                <Image src='/logo.svg' width={40} height={40} alt="ucc Logo" className="w-10 shadow-sm rounded-full shadow-yellow-500 h-10 " />
                <span className="text-2xl font-normal">Universe Chain</span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Ucchain Network. All rights reserved.
            </p>
          </div>

          <div className="md:mx-auto">
            <h3 className="font-semibold mb-4">Ucchain Network</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#why-us" className="hover:text-yellow-500 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#blockchain" className="hover:text-yellow-500 transition-colors">
                  Blockchain
                </Link>
              </li>
              <li>
                <Link href="#tokenomics" className="hover:text-yellow-500 transition-colors">
                  Tokenomics
                </Link>
              </li>

              <li>
                <Link href="#roadmap" className="hover:text-yellow-500 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-yellow-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-yellow-500 transition-colors">
                  FAQS
                </Link>
              </li>

            </ul>
          </div>

          <div className="md:mx-auto">
            <h3 className="font-semibold mb-4">Socials</h3>
            <div className="flex flex-col justify-start gap-6">
              <Link
                href="https://x.com/ucchainofficial"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >

                <p className=" px-1 border rounded-full">X</p>
                <p className=" text-muted/80">X</p>
              </Link>
              <Link
                href="https://t.me/universecryptochain"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Send className="w-5 h-5 text-white" />
                <p className="text-sm text-muted/80">Telegram</p>
              </Link>
              <Link
                href="https://t.me/ucchaincommunity"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Send className="w-5 h-5" />
                <p className="text-sm text-muted/80">Chart</p>

              </Link>
              <Link
                href="https://www.instagram.com/universecryptochain/"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Instagram className="w-5 h-5" />
                <p className="text-sm text-muted/80">Instagram</p>

              </Link>
              <Link
                href="https://www.instagram.com/universecryptochain/"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <SunMedium className="w-5 h-5  border rounded-full" />
                <p className="text-sm text-muted/80">Medium</p>

              </Link>
              <Link
                href="https://www.youtube.com/@UniverseCryptoChain"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                <Youtube className="w-5 h-5" />
                <p className="text-sm text-muted/80">YouTube</p>

              </Link>
              <Link
                href="https://discord.gg/T5xwStBn"
                className=" rounded-full  transition-colors flex gap-4 items-center justify-start"
              >
                {/* <Discord className="w-5 h-5" /> */}
                <p className=" px-1 border rounded-full">D</p>
                <p className="text-sm text-muted/80">Discord</p>

              </Link>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-4 -top-6 w-6 h-6 md:w-12 md:h-12 rounded-full bg-yellow-500/90 hover:bg-yellow-500 text-black flex items-center justify-center transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <ArrowUpRight className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
}