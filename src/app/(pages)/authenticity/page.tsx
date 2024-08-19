import React from "react";
import Authenticity from "@/app/components/authenticity/Authenticity";
import NavbarB from "@/app/components/set/NavbarB";
import SearchPage from "@/app/components/search/SearchPage";

export const metadata = {
  title: "RV • Authenticity",
  description: "Unique id code as a marker.",
};

const page = () => {
  return (
    <main>
      <section>
        <div>
          <NavbarB />
        </div>
      </section>

      <section className="pt-10 md:pt-20">
        <div>
          <Authenticity />
        </div>
      </section>

      <section className="py-10 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-xl">
            <p className="font-mono text-sm text-center">
              Enter the 9-digit RV code in the label tag column below without
              using the hyphen &quot;-&quot;.
            </p>
          </div>

          <div className="py-4">
            <SearchPage />
          </div>

          <div className="max-w-2xl">
            <p className="font-mono text-sm text-center">
              We are committed to maintaining the safety and authenticity of
              each of our products. This verification system is part of our
              efforts to protect you from counterfeit products and ensure that
              you are getting genuine RV items that meet the highest quality
              standards.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
