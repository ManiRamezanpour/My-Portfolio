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
    <div className="flex">
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social scale-100 hover:scale-110 cursor-pointer text-[5px] bg-blue-600 rounded-full p-1 mx-1"
      >
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
      <a
        href="https://www.twitter.com/jamesqquick"
        className="twitter social scale-100 hover:scale-110 cursor-pointer text-[5px] bg-green-600 rounded-full p-1 mx-1"
      >
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social scale-100 hover:scale-110 cursor-pointer text-[5px] bg-blue-600 rounded-full p-1 mx-1"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social scale-100 hover:scale-110 cursor-pointer text-[5px] bg-[#eab308] rounded-full p-1 mx-1"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social scale-100 hover:scale-110 cursor-pointer text-[5px] bg-blue-600 rounded-full p-1 mx-1"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  );
}
