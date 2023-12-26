import Image from "next/image";
import { HiMiniUser } from "react-icons/hi2";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main
      className="z-30 mx-auto w-full max-w-screen-sm
       dark:text-white py-1.5 items-center mt-32 px-10"
    >
      <div className="w-full mt-20 md:mt-0 flex flex-col md:flex-row justify-around items-center text-textColor">
        <div className="flex flex-col leading-extra">
          <h1 className="text-3xl">👋 Hello WORLD !</h1>
          <h2 className="text-3xl  mt-4">
            I am <span className="text-primary">Mani Ramezanpour</span>
          </h2>
          <p className="mt-3">
            Passionate and creative full-stack software engineer based in{" "}
            <span className="text-primary">Mazandran , Iran</span>
          </p>
          <button className="bg-primary w-max h-max px-5 py-1.5 rounded-md text-darkColor text-xl mt-3 flex scale-100 hover:scale-110 duration-200 delay-75">
            <HiMiniUser className="w-6 h-6 mx-1 my-px" />
            <span>About me</span>
          </button>
        </div>
        <Image
          src="/Manirmp.jpg"
          alt="photo"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <Skills />
    </main>
  );
}
