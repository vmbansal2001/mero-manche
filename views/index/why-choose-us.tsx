import React from "react";
import { Heart, Shield, Users } from "lucide-react";

type Props = {};

const WhyChooseUs = (props: Props) => {
  const features = [
    {
      icon: Heart,
      title: "One Point of Accountability",
      description:
        "No more juggling multiple contacts or worrying if things fell through. You have one trusted person managing it all.",
    },
    {
      icon: Shield,
      title: "Verified & Managed Support",
      description:
        "We work with trusted, vetted healthcare professionals and local partners - all coordinated and overseen by us, never left to strangers.",
    },
    {
      icon: Users,
      title: "Built for Families Abroad",
      description:
        "We understand the unique challenges of caring from a distance. This service was made for you.",
    },
  ];

  return (
    <div className="">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
        <span className="text-neutral-900">Why </span>
        <span className="text-black font-roca">Mero</span>
        <span className="text-primary-500 font-roca">Manche</span>
        <span className="text-neutral-900"> Is Different</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex rounded-full bg-primary-100 p-4 w-fit">
                <Icon className="w-6 h-6 text-primary-500" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
