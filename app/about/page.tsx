import Image from "next/image";

export default function About() {
  return (
    <main
      className="inset-x-0 z-30 mx-auto w-full max-w-screen-md
      bg:transpaerent dark:text-white py-1.5"
    >
      <div className="w-full flex  justify-around items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">👋 Hello WORLD !</h1>
          <h2 className="text-3xl font-bold mt-2">
            I am <span className="text-primary">Mani Ramezanpour</span>
          </h2>
        </div>
        <Image
          src="/Manirmp.jpg"
          alt="photo"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </main>
  );
}
