import Socials from "./socials";
const Footer = () => {
  return (
    // <footer className="w-1/2 h-max py-5 bg-transparent border-t border-slate-700 absolute bottom-0 mx-auto flex justify-between">
    <footer
      className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-screen-md border-t border-slate-800
      flex justify-between items-center
       bg-transparent dark:text-white py-1.5 backdrop-blur-md md:bottom-6"
    >
      <a href="#">🧑🏻‍💻 Mani Ramezanpour</a>
      <div className="flex items-center">
        <Socials />
      </div>
    </footer>
  );
};
export default Footer;
