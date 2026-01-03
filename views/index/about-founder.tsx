import React from "react";
import FounderImage from "@/assets/images/MeroManche Founder.png";
import Image from "next/image";

type Props = {};

const AboutFounder = (props: Props) => {
  return (
    <div className="">
      <div className="max-w-5xl mx-auto w-full bg-white rounded-3xl p-8 lg:p-12 border flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
        <div className="flex shrink-0">
          <Image
            width={160}
            height={160}
            src={FounderImage}
            alt="Founder"
            className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
          />
        </div>

        <div className="flex-1 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
          <p className="mb-3 sm:mb-4 md:mb-5 text-neutral-900">
            I am building MeroManche because I know what it feels like to be far
            from home. When my parents had to travel to and from Nepal for
            months at a time, my grandmother was often left home alone. Even
            with family around, there was always that quiet worry. Is she okay
            today? Did someone check in? Did the help actually show up? Living
            thousands of miles away, I carried the guilt of not being there. The
            constant second-guessing. The emotional strain of coordinating care,
            follow-ups, and small but important things from afar never fully
            knowing if they were handled the way I would have done them myself.
          </p>

          <p className="mb-4 sm:mb-5 md:mb-6 text-neutral-900">
            This is deeply personal for me. MeroManche isn&apos;t just a
            product, it&apos;s my attempt to be present when distance makes that
            impossible. We&apos;re starting small, doing this thoughtfully, and
            earning trust the only way it truly matters: by showing up,
            consistently, for one family at a time.
          </p>

          <div className="text-sm sm:text-base md:text-lg">
            <p className="font-medium text-neutral-900">Deepak Nepal</p>
            <p className="text-xs sm:text-sm md:text-base text-neutral-500">
              Founder, MeroManche
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
