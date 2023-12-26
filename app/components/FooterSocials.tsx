import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Socials() {
  return (
    <div className="flex items-center w-full h-full">
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social scale-100 hover:scale-110 cursor-pointer text-[5px] rounded-full p-1 mx-1 text-slate-700"
      >
        <FontAwesomeIcon icon={faTelegram} className="text-xl" />
      </a>
      <a
        href="https://www.twitter.com/jamesqquick"
        className="twitter social scale-100 hover:scale-110 cursor-pointer text-[5px] rounded-full p-1 mx-1 text-slate-700"
      >
        <FontAwesomeIcon icon={faGoogle} className="text-xl" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social scale-100 hover:scale-110 cursor-pointer text-[5px] rounded-full p-1 mx-1 text-slate-700"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social scale-100 hover:scale-110 cursor-pointer text-slate-700 rounded-full p-1 mx-1"
      >
        <FontAwesomeIcon icon={faInstagram} className="text-xl" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social scale-100 hover:scale-110 cursor-pointer text-[5px] rounded-full p-1 mx-1 text-slate-700"
      >
        <FontAwesomeIcon icon={faGithub} className="text-xl" />
      </a>
    </div>
  );
}
