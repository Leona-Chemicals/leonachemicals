"use client";

import Image from "next/image";
import { productData } from "./productData";
import { useState } from "react";
import localFont from "next/font/local";
import Iframe from "react-iframe";

export default function Home() {
  let data = productData;
  const [search, setsearch] = useState("");

  let searchData = data.filter((row, index) => {
    return row.includes(search.toUpperCase());
  });

  return (
    <main
      id="home"
      className="flex min-h-screen flex-col items-center justify-between"
    >
      <link href="https://db.onlinewebfonts.com/c/c144af7d488f9069913d40dee3cd1f70?family=Algerian" rel="stylesheet"></link>
      <div className="relative flex w-full h-auto py-2 align-middle md:place-content-end place-content-center border-b border-slate-800">
        <a href={"#home"}>
          <div className="px-4 mx-2 border border-slate-900 rounded-sm hover:border-amber-900">
            <p className="sm:text-base text-sm font-medium hover:font-bold hover:tracking-wider hover:text-amber-800">
              Home
            </p>
          </div>
        </a>

        <a href={"#products"}>
          <div className="px-4 mx-2 border border-slate-900 rounded-sm hover:border-amber-900">
            <p className="sm:text-base text-sm font-medium hover:font-bold hover:tracking-wider hover:text-amber-800">
              Products
            </p>
          </div>
        </a>

        <a href={"#contact"}>
          <div className="px-4 mx-2 pr-4 border border-slate-900 rounded-sm hover:border-amber-900">
            <p className="sm:text-base text-sm font-medium hover:font-bold hover:tracking-wider hover:text-amber-800">
              Contact
            </p>
          </div>
        </a>
      </div>

      <div className="mt-10 absolute z-[-2] bg-amber-200/20 w-1/2 min-h-screen place-self-start"></div>

      <div className="min-h-screen min-w-full align-middle place-content-center text-center  border-b border-slate-900">
        <div className="relative flex place-content-center">
          <Image
            className="relative opacity-60  hover:opacity-100"
            src="/logo.png"
            alt="Next.js Logo"
            width={270}
            height={100}
            priority
          />
        </div>
        <h1 className="transition-all select-none	tracking-wider text-5xl xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl font-algerian sm:p-10 p-2"
        style={{fontFamily: "Algerian"}}>
          <span className="hover:tracking-widest hover:text-yellow-700">L</span>
          <span className="hover:tracking-widest hover:text-yellow-700">E</span>
          <span className="hover:tracking-widest hover:text-yellow-700">O</span>
          <span className="hover:tracking-widest hover:text-yellow-700">N</span>
          <span className="hover:tracking-widest hover:text-yellow-700">A</span>
          <span className="hover:tracking-widest hover:text-yellow-700"> </span>
          <span className="hover:tracking-widest hover:text-yellow-700">C</span>
          <span className="hover:tracking-widest hover:text-yellow-700">H</span>
          <span className="hover:tracking-widest hover:text-yellow-700">E</span>
          <span className="hover:tracking-widest hover:text-yellow-700">M</span>
          <span className="hover:tracking-widest hover:text-yellow-700">I</span>
          <span className="hover:tracking-widest hover:text-yellow-700">C</span>
          <span className="hover:tracking-widest hover:text-yellow-700">A</span>
          <span className="hover:tracking-widest hover:text-yellow-700">L</span>
          <span className="hover:tracking-widest hover:text-yellow-700">S</span>
        </h1>
        <p className="text-wrap tracking-wide xl:text-xl lg:text-lg sm:text-lg text-xs select-none hover:tracking-tight">
          Indenting Company & Sourcing Agent
        </p>
      </div>

      {/* Main */}
      <div className="relative flex flex-wrap min-h-screen w-full border-slate-800">
        {/* Information */}
        <div className="sm:w-1/2 w-full min-h-screen text-center pt-8 sm:border-0 border-b border-slate-900">
          {/* About us */}
          <div
            id="about"
            className="sm:m-20 m-10 sm:p-16 p-8 border sm:text-xl text-lg border-slate-900 bg-amber-700/30 hover:bg-amber-700/40 rounded"
          >
            <p>
              We're here to take care of your requirements for{" "}
              <span className="font-bold">
                raw materials, fine chemicals & intermediates
              </span>{" "}
              for{" "}
              <span className="font-bold">
                Pharma, Agro, Dyestuff, Paint, Aromatic & Cosmetic Industries.
              </span>
            </p>
            <br />
            <p> We handle the entire hassle for your procurement.</p>
          </div>

          {/* Contact Information */}
          <div
            id="contact"
            className="sm:m-20 m-10 sm:p-16 p-8 border sm:text-xl text-lg border-slate-900 hover:bg-slate-500/40  rounded"
          >
            <p>
              For your import requirements or in case of any further queries,
              kindly email us at
            </p>
            <a href={"mailto:sales@leonachemicals.com"}>
              <p className="font-bold sm:text-base md:text-lg text-xs leading-6 tracking-wide hover:tracking-wider hover:text-yellow-800">
                sales@leonachemicals.com
              </p>
            </a>
            <p>or call us at</p>

            <a href={"tel:+91 9930336966"}>
              <p className="font-bold  sm:text-base md:text-lg text-sm leading-6 tracking-wide hover:tracking-wider hover:text-yellow-800">
                +91 9930336966
              </p>
            </a>

            <a href={"tel:+91 9137794481"}>
              <p className="font-bold  sm:text-base md:text-lg text-sm leading-6 tracking-wide hover:tracking-wider hover:text-yellow-800">
                +91 9137794481
              </p>
            </a>
          </div>

          {/* Timing Information */}
          <div className="sm:m-20 m-10 sm:p-16 p-8 border sm:text-xl text-lg font-light tracking-wide border-slate-900 hover:bg-slate-900/90 rounded bg-slate-900/80 text-slate-100">
            <p className="font-bold underline pb-5 tracking-wider">
              Business Hours
            </p>{" "}
            <p> Monday to Friday - 10:00a.m. to 06:00 p.m. </p>
            <br />
            <p> Saturday - 10:00 a.m. to 02:00 p.m. </p>
            <br />
            <p> Sunday - Closed </p>
          </div>

          {/* Career Information */}
          <div
            id="careers"
            className="sm:m-20 m-10 sm:p-16 p-8 border sm:text-xl text-lg border-slate-900 hover:bg-slate-200 rounded"
          >
            <p className="font-bold underline pb-5 tracking-wider">
              Want to work with us?
            </p>{" "}
            <p>
              Looking for candidates with minimum 1 year experience in the field
              and basic industry knowledge.
            </p>
            <br />
            <p>Send us an email at</p>
            <a href={"mailto:leonachemicals@gmail.com"}>
              <p className="font-bold sm:text-base md:text-base text-xs hover:tracking-wider hover:text-yellow-800">
                leonachemicals@gmail.com
              </p>
            </a>
          </div>

          <div className="sm:m-20 m-10 min-h-64 border sm:text-xl text-lg border-slate-900 rounded">
            <div>
              <p className="p-5 bg-amber-600/20 border-b border-slate-900">
                Based in Mumbai, India
              </p>
            </div>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292815258!2d72.71637298606544!3d19.082502004737197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712246228757!5m2!1sen!2sin"
              width="100%"
              height="320px"
              display="inline"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Product List */}
        <div className="sm:w-1/2 w-full min-h-screen place-items-center text-center sm:border-l border-0  border-slate-800">
          <div id="products">
            <h1 className="text-xl font-bold pt-5 pb-3"> Product List</h1>
          </div>
          <div className="relative flex">
            <input
              type="search"
              className="relative m-4 block w-full rounded border border-solid border-slate-400 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none placeholder:text-slate-500 focus:z-[3] focus:border-black focus:shadow-inset focus:outline-none"
              placeholder="Search for a product..."
              aria-label="Search"
              id="productSearchInput"
              name="productSearchInput"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
          <div
            className="grid grid-cols-1 divide-y my-5 m-4 sm:max-h-[3520px] md:max-h-[2380px] lg:max-h-[1960px] max-h-[2160px] overflow-auto"
            // style={{ minHeight: "2160px", overflowY: "scroll" }}
          >
            {searchData.length !== 0 ? (
              searchData.map((row, index) => (
                <p className="py-1 select-none text-sm" key={index}>
                  {row}
                </p>
              ))
            ) : (
              <p className="py-2">Product match not found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container place-items-center p-3 text-sm leading-7 bg-slate-900 text-white">
        <div className="flex flex-wrap place-content-center">
          <a href={"#home"}>
            <p className="px-3 hover:tracking-wider hover:text-yellow-300">
              Home
            </p>
          </a>{" "}
          |
          <a href={"#about"}>
            <p className="px-3 hover:tracking-wider hover:text-yellow-300">
              About
            </p>
          </a>{" "}
          |
          <a href={"#products"}>
            <p className="px-3 hover:tracking-wider hover:text-yellow-300">
              Products
            </p>
          </a>{" "}
          |
          <a href={"#contact"}>
            <p className="px-3 hover:tracking-wider hover:text-yellow-300">
              Contact
            </p>
          </a>{" "}
          |
          <a href={"#careers"}>
            <p className="px-3 hover:tracking-wider hover:text-yellow-300">
              Careers
            </p>
          </a>
        </div>
        <div className="flex place-content-center">
          <p>Copyright &copy; Leona Chemicals, 2024</p>
        </div>
      </div>
    </main>
  );
}
