"use client";

import Link from "next/link";
import Image from "next/image";

const HomeInfo = ({ currentStage }: any) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Sehaj Bindra</span>
        👋
        <br />
        Full stack developer
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>

        <Link href="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <Image
            src={"/arrow.svg"}
            alt="arrow"
            width={40}
            height={40}
            className="w-4 h-4 object-cover"
          />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>

        <Link href="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <Image
            src={"/arrow.svg"}
            alt="arrow"
            width={20}
            height={20}
            className="w-4 h-4 object-contain"
          />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link href="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <Image
            src={"/arrow.svg"}
            alt="arrow"
            width={20}
            height={20}
            className="w-4 h-4 object-contain"
          />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
