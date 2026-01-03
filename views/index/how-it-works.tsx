import React from "react";

const steps = [
  {
    step: 1,
    title: "Tell us what you need",
    description:
      "Share what matters most to your family and we will handle the rest.",
  },
  {
    step: 2,
    title: "We manage and coordinate in Nepal",
    description: "Our trusted team handles everything on the ground",
  },
  {
    step: 3,
    title: "You stay informed - we stay accountable",
    description: "Regular updates so you always know what is happening",
  },
];

const HowItWorks = () => {
  return (
    <section className="space-y-10">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-neutral-900">
        How It Works
      </h2>

      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((stepItem) => {
            return (
              <div
                key={stepItem.step}
                className="bg-white/70 backdrop-blur rounded-3xl px-6 py-8 md:p-6 border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
              >
                <div className="flex flex-col center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-500 font-semibold text-lg mb-5">
                    {stepItem.step}
                  </div>

                  <h3 className="text-lg md:text-lg font-semibold text-neutral-900 mb-1">
                    {stepItem.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
