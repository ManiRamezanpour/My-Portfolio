"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Socials from "../socials";

export default function Landing() {
  const skillsStyle = {
    fontSize: "1em",
    display: "inline-block",
  };
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <p className="font-extrabold text-inherit">HELLO</p>
        <h1 className="text-2xl font-extrabold">ManiRamezanpour</h1>
        <h2>
          <span style={skillsStyle}>Junior</span>{" "}
          <TypeAnimation
            sequence={["JS/TS developer", 1000, "JS/TS developer", 1000]}
            wrapper="span"
            style={{
              color: "#be185d",
              fontSize: "1em",
              display: "inline-block",
            }}
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <Socials />
      </div>
      <div>
        <Image
          src="/Manirmp.jpg"
          className="rounded-full"
          alt="My personal image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
