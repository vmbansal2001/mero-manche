import Navbar from "@/components/navbar/navbar";
import React from "react";
import IndexHeroSection from "./index-hero-section";
import ProblemStatement from "./problem-statement";
import InitialServiceOfferings from "./initial-service-offerings";
import WhyChooseUs from "./why-choose-us";
import HowItWorks from "./how-it-works";
import Footer from "@/components/footer/footer";
import AboutFounder from "./about-founder";
import JoinEarlyAccess from "./join-early-access";

type Props = {};

const IndexRoute = (props: Props) => {
  return (
    <main className="bg-[#FAF8F5]">
      <Navbar />
      <div className="common-frame-box space-y-32 py-12">
        <IndexHeroSection />
        <ProblemStatement />
        <WhyChooseUs />
        <InitialServiceOfferings />
        <HowItWorks />
        <AboutFounder />
        <JoinEarlyAccess />
      </div>
      <Footer />
    </main>
  );
};

export default IndexRoute;
