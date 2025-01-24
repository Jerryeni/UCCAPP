"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import OrbitAnimation from "@/components/OrbitAnimation";
import NetworkSphereScene from "@/components/NetworkSphere";
import DiamondAnimation from "@/components/DiamondAnimation";
import { Tokenomics } from "@/components/Tokenomics";
import StayUpdated from "@/components/StayConnected";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden ">
      {/* Header */}
      <header className="w-full bg-[#E9BC1A] py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Universe Chain" width={40} height={40} />
            <span className="text-xl font-bold text-black">Universe Chain</span>
          </div>
          <Button className="bg-white text-black hover:bg-white/90 rounded-full border border-blue-500">
            BUY NOW
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#E9BC1A] rounded-3xl md:rounded-s-3xl p-8 relative">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 bg-black/20 rounded-full" />
                <div className="w-3 h-3 bg-black/20 rounded-full" />
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-black/20 rounded-full" />
              </div>
              <h1 className="text-black text-xl md:text-4xl font-bold mt-8">
                Step Into the Universe Chain
                <br />
                Revolutionizing Blockchain
                <br />
                for a Decentralized Tomorrow
              </h1>
              <div className="mt-4 text-black text-[42.7px] flex gap-4 items-center"> $UCC
                <span className="text-sm text-black/60">Hold UCC</span>
              </div>

              <div className="flex space-x-4 mt-8">
                <Button className="bg-black text-white hover:bg-black/90">
                  BUY NOW
                </Button>
                <Button variant="outline" className="border-black text-black hover:bg-black/10">
                  View Explorer
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* <OrbitAnimation /> */}
              <Image src="/List.png" alt="Universe Chain" width={100} height={100} className="absolutex top-4x w-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex items-center space-x-8 animate-marquee">
            <Image src="/blockchain.svg" alt="Blockchain Magazine" width={120} height={30} />
            <Image src="/crypto-potato.svg" alt="CryptoPotato" width={120} height={30} />
            <Image src="/finbold.svg" alt="Finbold" width={120} height={30} />
            <Image src="/coinpaper.svg" alt="Coinpaper" width={120} height={30} />
            <Image src="/benzinga.svg" alt="Benzinga" width={120} height={30} />
            <Image src="/tokenpost.png.svg" alt="Insider" width={120} height={30} />
            <Image src="/tokenpost.svg" alt="Tokenpost" width={120} height={30} />
          </div>
        </div>
      </section>
      <div className="h-[1px] max-w-7xl  mx-auto bg-white/60 my-10"></div>

      {/* Stats Section */}
      <section className="pb-20 px-2 ">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center mx-auto max-w-5xl">
            <div className="w-full">
              <h2 className="text-[#E9BC1A] md:text-3xl text-2xl lg:text-5xl font-normal mb-4">
                Real sub-second
                <br />
                confirmation times
              </h2>
              <p className="text-white/60 font-light">
                Universe Chain is the fastest settlement layer for digital
                assets with over 10,000 TPS
              </p>
            </div>
            <div className="bg-black/40 mx-auto backdrop-blur-sm rounded-3xl p-8 border md:w-fit w-full border-white/20">
              <div className="space-y-8">
                <div>
                  <div className="text-sm text-white/60">Confirmation time</div>
                  <div className="text-3xl md:text-5xl text-[#E9BC1A]">~1s</div>
                </div>
                <div>
                  <div className="text-sm text-white/60">Transaction speed</div>
                  <div className="text-3xl md:text-5xl text-[#E9BC1A]">~10,000/s</div>
                </div>
                <div>
                  <div className="text-sm text-white/60">Average transaction cost</div>
                  <div className="text-3xl md:text-5xl text-[#E9BC1A]">&lt;$0.0001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[1px] max-w-7xl  mx-auto bg-white/60 my-10"></div>


      {/* Technology Section */}
      <section className="py-20 px-2 max-w-7xl mx-auto">
        <div className=" px-4 max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="text-white/80">Solutions</div>
            <h2 className="text-[#E9BC1A] text-4xl font-normal">Technology that Scales</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Layer 2 Blockchain",
                description: "Our blockchain serves as a Layer 2 solution, enabling other projects to onboard with ease. It offers high-speed, low-cost transactions, making it ideal for scalable applications.",
                icon: "/scalability.svg"
              },
              {
                title: "Security",
                description: "Built with advanced security protocols, our network ensures secure transaction processing and robust protection against vulnerabilities, supported by verified validators.",
                icon: "/security.svg"
              },
              {
                title: "Decentralized",
                description: "With authority distributed across trusted nodes, our blockchain ensures transparency, reliability, and resilience for a truly decentralized ecosystem.",
                icon: "/decentral.svg"
              },
              {
                title: "User Experience",
                description: "Designed for simplicity, our platform offers fast transactions, easy integration for developers, and a smooth, user-friendly interface for all participants.",
                icon: "/user-experience.png"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#ffffff]/5 rounded-3xl p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative z-10">
                  <Image src={item.icon} alt={item.title} width={150} height={150} className="mb-6" />
                  <h3 className="text-[#E9BC1A] text-xl font-light mb-4">{item.title}</h3>
                  <p className="text-white/80 text-sm font-light">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-[#E9BC1A] relative">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-black text-4xl mb-12">UCCHAIN Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-8">
              <div className="bg-black rounded-3xl p-8 h-full relative ">
                <h3 className="text-white text-xl mb-4">NFT based Virtual Land</h3>
                <p className="text-white/80 text-xs font-light">Step into the future of NFT virtual land where value is secure and opportunities are endless. Our platform ensures guaranteed liquidity, allowing you to sell your land back to the project anytime. With an innovative bidding system and seamless peer-to-peer trading, your virtual land remains a valuable asset in a dynamic marketplace, empowering a thriving and sustainable metaverse experience.</p>
                <Image src="/Gradient.png" alt="gradient" width={400} height={400} className="absolute top-0 w-full h-full " />
              </div>

            </div>
            <div className="md:col-span-4 col-span-8 relative">
              <div className="bg-black rounded-3xl p-8 h-full">
                <h3 className="text-white text-xl mb-4">Crypto Exchange</h3>
                <p className="text-white/80 text-xs font-light">Experience the future of trading and utility with our cutting-edge crypto exchange. Seamlessly switch between a secure cloud wallet and a decentralized wallet in one app. Enjoy advanced spot trading, wallet-to-wallet decentralized messaging, and an array of in-app utilities like mobile recharge, bill payments, hotel, and flight bookings. Your gateway to financial freedom and convenience starts here!</p>
                <Image src="/Gradient.png" alt="gradient" width={400} height={400} className="absolute top-0 w-full h-full " />
              </div>
            </div>
            <div className="md:col-span-4 col-span-8 relative">
              <div className="bg-black rounded-3xl p-8 h-full">
                <h3 className="text-white text-xl mb-4">Ecommerce</h3>
                <p className="text-white/80 text-xs  font-light">Our e-commerce platform makes shopping simple and secure. Buy products from trusted sellers, enjoy international shipping, and explore items from multiple vendors in one place. Everything you need is just a few clicks away!</p>
                <Image src="/Gradient.png" alt="gradient" width={400} height={400} className="absolute top-0 w-full h-full " />
              </div>
            </div>
            <div className="col-span-8 relative">
              <div className="bg-black rounded-3xl p-8 h-full">
                <h3 className="text-white text-xl mb-4">Hardware Wallet</h3>
                <p className="text-white/80 text-xs font-light">Experience unmatched security and convenience with our hardware wallet. Powered by our own hardware and decentralized software, it supports Android, iOS, and Windows. Add any token or blockchain seamlessly to your wallet, and rest assured with full encryption to keep your assets safe.</p>
                <Image src="/Gradient.png" alt="gradient" width={400} height={400} className="absolute top-0 w-full h-full " />
              </div>
            </div>
          </div>
        </div>
        <Image src="/vector1.svg" alt="gradient" width={100} height={100} className="absolute bottom-20 right-10 " />
        <Image src="/Vector(8).png" alt="gradient" width={100} height={100} className="absolute bottom-20 left-10 " />
        <Image src="/Vector.png" alt="gradient" width={100} height={100} className="absolute bottom-24 left-10 " />
      </section>
      <div className="relative">
        <Tokenomics />
      </div>

      {/* CTA Section with Network Sphere */}
      <section className="py-20 bg-gradient-to-b from-[#E9BC1A] via-black  to-black relative overflow-hidden z-50">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="text-center mb-20">
            <h2 className="text-black md:text-3xl text-2xl lg:text-[67.4px] font-medium mb-4">The Power of the UCC</h2>
            <div className="bg-black inline-block text-white ">
              DON'T WAIT. MARK YOUR SPOT.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2  -z-8 items-start gap-8 absolute top-0 left-4">
            <div className="relative">
              <NetworkSphereScene />
            </div>
            <div className="relative">
              {/* <DiamondAnimation /> */}
            </div>
          </div>
          <Image src="/v2.png" alt="gradient" width={200} height={200} className="absolute md:top-0  md:right-10 right-0 -z-10" />


          <div className="mt-12 max-w-2xl mx-auto relative z-50">
            <div className="bg-[#DCB723] rounded-3xl p-8">
              <h3 className="text-black text-2xl font-bold mb-8 text-center">JOIN UCC</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-black font-bold mb-4 text-sm">Community & <br /> Support</h4>
                  <div className=" border-[#E5A600]/80 to-[#DCB723] bg-[#353570]/20 shadow-md shadow-yellow-600 rounded-xl p-4 flex flex-col mx-auto items-center justify-center gap-6 border-2  ">
                    <Link
                      href="https://discord.gg/T5xwStBn"
                      className=""
                    >
                      <Image src="/discord.png" alt="gradient" width={50} height={50} className=" " />

                      <span className="text-black">Discord</span>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-black font-bold mb-4 text-sm">Investor <br />
                    Discussions</h4>
                  <div className=" border-[#E5A600] to-[#DCB723] bg-[#353570]/20 shadow-md shadow-yellow-600 rounded-xl p-4 flex flex-col mx-auto items-center justify-center gap-6 border-2  ">
                    <Link
                      href="https://t.me/universecryptochain"
                      className=""
                    >
                      <Image src="/telegram.png" alt="gradient" width={50} height={50} className=" " />

                      <span className="text-black">Telegram</span>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-black font-bold mb-4 text-sm">News & <br /> Update</h4>
                  <div className=" border-[#E5A600]/80 to-[#DCB723] bg-[#353570]/20  shadow-md shadow-yellow-600 rounded-xl p-4 flex flex-col mx-auto items-center justify-center gap-6 border-2  ">
                    <Link
                      href="https://x.com/ucchainofficial"
                      className=""
                    >
                      <Image src="/x.png" alt="gradient" width={50} height={50} className=" " />

                      <span className="text-black">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <StayUpdated />
          </div>
        </div>
      </section>

      {/* Footer */}

    </main>
  );
}
