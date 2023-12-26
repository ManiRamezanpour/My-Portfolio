export default function About() {
  return (
    <main
      className="z-30 mx-auto w-full max-w-screen-sm
       !text-textColor py-1.5 items-center mt-32 px-10"
    >
      <div className="flex flex-col leading-extra">
        <h1 className="text-3xl font-bold text-primary">About</h1>
        <p className="text-start text-[16px] mt-3">
          👋 Hey there! Im Mani Ramezanpour a full-stack software engineer from
          Iran with over two 2 years of professional experience.
        </p>
        <p className="mt-3">
          I pay close attention to details and am deeply committed to creating
          software products that are visually appealing, user-friendly, and
          simple to maintain.
        </p>
        <p className="mt-3">
          Im an initiative-taking and flexible professional who thrives in
          global remote teams that prioritize people and uphold values such as
          trust, kindness, and inclusivity. Im constantly seeking challenges
          that allow me to enhance and broaden my skills.
        </p>
      </div>
      <div className="flex flex-col leading-extra mt-10">
        <h1 className="text-3xl font-bold text-primary">Contact</h1>
        <div className="mt-5">
          <p className="">
            Im always open to connecting with new people, and exploring new
            opportunities.
          </p>
          
        </div>
      </div>
    </main>
  );
}
