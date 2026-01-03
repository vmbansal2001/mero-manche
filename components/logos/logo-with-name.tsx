import React from "react";
import TransparentLogoImage from "@/assets/images/MeroManche-Logo-Transparent Background.png";
import Image from "next/image";

type Props = {};

const LogoWithName = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={TransparentLogoImage}
        alt="Mero Manche Logo"
        width={100}
        height={100}
        className="w-10 h-10"
      />
      <p className="text-xl font-bold font-roca">
        <span className="text-black">Mero</span>
        <span className="text-[#FF5336]">Manche</span>
      </p>
    </div>
  );
};

export default LogoWithName;
