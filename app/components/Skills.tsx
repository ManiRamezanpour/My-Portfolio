import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
const Skills = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start mt-10">
      <h1 className="text-3xl text-primary">Skills</h1>
      <div className="flex flex-wrap gap-4 items-start justify-start mt-6">
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-start justify-start border border-slate-800 px-2 py-1.5 rounded-full">
          <SiJavascript className="w-5 h-5 mx-1" />
          <span>Javascript</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiTypescript className="w-5 h-5 mx-1" />
          <span>Typescript</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiReact className="w-5 h-5 mx-1" />
          <span>React</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiNodedotjs className="w-5 h-5 mx-1" />
          <span>Nodejs</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiMysql className="w-5 h-5 mx-1" />
          <span>SQL</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiMongodb className="w-5 h-5 mx-1" />
          <span>Mongodb</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiExpress className="w-5 h-5 mx-1" />
          <span>Express</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiNestjs className="w-5 h-5 mx-1" />
          <span>NestJS</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiPostgresql className="w-5 h-5 mx-1" />
          <span>Postgresql</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiPrisma className="w-5 h-5 mx-1" />
          <span>Prisma</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiHtml5 className="w-5 h-5 mx-1" />
          <span>HTML 5</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiCss3 className="w-5 h-5 mx-1" />
          <span>CSS3</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiTailwindcss className="w-5 h-5 mx-1" />
          <span>Tailwindcss</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiGit className="w-5 h-5 mx-1" />
          <span>Git</span>
        </div>
        <div className="w-max h-max bg-[#101829] backdrop-blur-md flex items-center justify-center border border-slate-800 px-2 py-1.5 rounded-full">
          <SiDocker className="w-5 h-5 mx-1" />
          <span>Docker</span>
        </div>
      </div>
    </div>
  );
};
export default Skills;
