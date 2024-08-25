import React from "react";
import NavbarLarge from "@/app/components/set/NavbarLarge";
import GalleryCollection from "../../components/collection/GalleryCollection";
import HeroCollection from "../../components/collection/HeroCollection";
import Footer from "../../components/set/Footer";
import NavbarMobile from "../../components/set/NavbarMobile";

export const metadata = {
  title: "RV • COLLECTION",
  description: "A collection of evolutionary and revolutions.",
};

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="relative">
        <div className="fixed w-full bg-white">
          <div className="hidden xl:block">
            <NavbarLarge
              classText="text-black font-mono font-bold"
              classTextID="text-white font-mono font-bold"
              classExtra="px-4 py-2 bg-black"
              picture="/logo/rvblack.png"
            />
          </div>

          <div className="block xl:hidden">
            <NavbarMobile
              picture="/logo/rvblack.png"
              classText="text-black"
              classTextID="text-white"
              classInput="border-black"
              classInputLogo="border-black"
              classInputIconSearch="text-black"
              classTextDropdown="text-white"
              classBgBtn="bg-black"
              classBgSidebar="bg-white"
              classBgDropdown="bg-black border border-black"
            />
          </div>
        </div>
      </section>

      <section className="flex-grow">
        <section className="pt-12 md:pt-28">
          <div>
            <HeroCollection />
          </div>
        </section>

        <section className="py-10 px-4">
          <div>
            <GalleryCollection />
          </div>
        </section>
      </section>

      <section className="w-full">
        <div className="px-2 md:px-6 lg:px-8 xl:px-10">
          <Footer
            judul="RV Evolutions"
            place="COLLECTION"
            classText="text-black"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
