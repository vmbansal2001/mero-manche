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
      <span className="text-xl font-bold text-[#FF5336]">MeroManche</span>
    </div>
  );
};

export default LogoWithName;
