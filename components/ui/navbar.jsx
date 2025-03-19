"use client"; // Tandai komponen ini sebagai Client Component

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import LangSwitcher from "@/components/ui/lang-switcher";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="section-header bg-primary sticky top-0 left-0 right-0 z-30 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/logo-angkut-ternak.svg"
              alt="Logo"
              width={200}
              height={67}
              className="mr-2"
            />
          </div>
        </Link>

        {/* Hamburger Menu (Muncul hanya di mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menu (Contact Us dan Language Switcher) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:static top-16 left-0 right-0 bg-primary p-4 md:p-0`}
        >
          <LangSwitcher />
          <Button>{t("contact")}</Button>
        </div>
      </div>
    </header>
  );
}