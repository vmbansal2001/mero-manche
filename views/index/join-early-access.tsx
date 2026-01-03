import JoinEarlyAccessButton from "@/components/join-early-access/join-early-access-button";

const JoinEarlyAccess = () => {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-8 lg:p-12 border flex flex-col items-center border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
          Join Early Access
        </h2>

        <p className="text-neutral-900 leading-relaxed pt-2 pb-6 text-lg text-center">
          We're starting small to get this right. No spam. No pressure.
        </p>

        <JoinEarlyAccessButton className="bg-primary-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300">
          Join the waitlist &rarr;
        </JoinEarlyAccessButton>
      </div>
    </div>
  );
};

export default JoinEarlyAccess;
