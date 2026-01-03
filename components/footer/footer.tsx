import React from "react";
import Logo from "@/assets/images/MeroManche-Logo-Transparent Background.png";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mx-auto w-fit py-10 flex flex-col items-center gap-2">
      <Image src={Logo} alt="MeroManche" className="w-12 h-auto opacity-75" />
      <p className="text-sm text-neutral-500 text-center">
        © 2026 MeroManche.
        <br className="sm:hidden" />
        Built with care, by Nepali - for Nepali families.
      </p>
    </footer>
  );
};

export default Footer;
