import Socials from "./FooterSocials";
const Footer = () => {
  return (
    <footer
      className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-screen-sm border-t border-slate-800
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
