import React from "react";
import Section from "./Section";
import { collabContent, collabText } from "../constants";
import { check } from "../assets";
import Button from "./Button";
import SkillsCircle from "./ui/SkillsCircle";

const Collaboration = () => {
  return (
    <Section>
      <div className="container lg:flex">
        {/* Header and collab benefits list */}
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li key={item.id} className="mb-3 py-3 ">
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <Button>Try it now</Button>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem]">
            {collabText}
          </p>

          <SkillsCircle />
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
