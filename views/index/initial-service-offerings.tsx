import React from "react";
import { Gift, Heart } from "lucide-react";

const offerings = [
  {
    icon: Heart,
    title: "Family Care & Support",
    description:
      "Check-ins with elderly parents and loved ones, coordinating in-home healthcare and support, and serving as your trusted eyes and hands on the ground when you can't be there yourself.",
  },
  {
    icon: Gift,
    title: "Custom Gifts & Meaningful Moments",
    description:
      "Thoughtfully chosen and delivered gifts for birthdays, festivals, and special occasions – so distance doesn't mean missing the moments that matter.",
  },
];

const InitialServiceOfferings = () => {
  return (
    <section className="space-y-10">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-neutral-900">
        What We're Starting With
      </h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {offerings.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 items-start shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-center justify-center rounded-full bg-primary-100 w-12 h-12 md:w-14 md:h-14 shrink-0">
                <Icon
                  className="text-primary-500 w-6 h-6 md:w-7 md:h-7"
                  strokeWidth={1.5}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InitialServiceOfferings;
