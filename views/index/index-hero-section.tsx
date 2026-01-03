"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/images/MeroManche-logo-BlackAndOrange.png";
import { ArrowRight } from "lucide-react";
import JoinEarlyAccessButton from "@/components/join-early-access/join-early-access-button";

type Props = {};

const IndexHeroSection = (props: Props) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-10 md:mb-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-4 sm:mb-6 md:mb-8"
        >
          <Image
            src={Logo}
            alt="MeroManche"
            className="w-40 h-auto sm:w-48 md:w-56 lg:w-64 xl:w-72"
          />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[900px] mx-auto font-semibold leading-tight sm:leading-snug md:leading-normal px-4 sm:px-6 mb-4 sm:mb-6 md:mb-7 text-neutral-900">
          Your trusted person in Nepal - when you can't be there
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl sm:max-w-3xl mx-auto leading-relaxed text-secondary-700 px-4 sm:px-6">
          We help Nepali families abroad take care of family health needs and
          meaningful moments back home - with accountability, care, and real
          people you can trust.
        </p>
      </motion.div>

      <div className="flex flex-col items-center justify-center px-4">
        <JoinEarlyAccessButton className="group px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full transition-all duration-300 hover:shadow-lg flex items-center gap-2 bg-primary-500 text-white cursor-pointer font-semibold text-sm sm:text-base md:text-lg">
          Join Early Access
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
        </JoinEarlyAccessButton>

        <p className="text-xs sm:text-sm md:text-base text-center mt-3 sm:mt-4 text-secondary-600">
          Starting with a limited group of families
        </p>
      </div>
    </div>
  );
};

export default IndexHeroSection;
