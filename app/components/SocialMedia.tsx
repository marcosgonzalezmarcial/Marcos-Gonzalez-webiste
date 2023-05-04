import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import globalStyles from "@/styles/globalStyles.module.css";

export default function SocialMedia(): JSX.Element {
  return (
    <div className={globalStyles.app__social}>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
}
