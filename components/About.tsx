"use client";

import { skills, experiences } from "@/constants";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import CTA from "./CTA";
function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello , I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Sehaj Bindra
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        I have the skills and expertise to craft bespoke web apps that not only
        meet your needs, but also unleash your business's full potential. From
        stunning front-end design to flawless back-end functionality, I'll work
        with you every step of the way to create a web app.
      </div>

      <div className="py-10 flex flex-col">
        <h3>
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Skills
          </span>
        </h3>

        <div className="mt-16 gap-12 flex flex-wrap">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front cursor-pointer flex justify-center items-center rounded-xl">
                <Image
                  width={100}
                  height={100}
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>

              {/* <p className="text-center font-semibold">{skill.name}</p> */}
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          I have the skills and expertise to craft bespoke web apps that not
          only meet your needs, but also unleash your business's full potential.
          From stunning front-end design to flawless back-end functionality,
          I'll work with you every step of the way to create a web app.
        </div>

        <div ref={ref} className="mt-12 flex">
          <VerticalTimeline lineColor="#00c6ff">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                visible={inView}
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      width={100}
                      height={100}
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl  font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <CTA />
    </section>
  );
}

export default About;
