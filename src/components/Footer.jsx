import copyRightImage from "../assets/logo.svg";
import { IoLogoFacebook } from "react-icons/io";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <footer
      className={
        isMobile
          ? "p-16 grid md:grid-cols-3 bg-zinc-100 justify-center text-center flow-content--m items-center"
          : "p-16 grid md:grid-cols-3 bg-zinc-100 justify-center items-center"
      }
    >
      <a href="" className="logo mx-auto md:mx-0">
        <img src={copyRightImage} className="w-[50px]" alt="" />
      </a>
      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <li>
          <a href="" className="footer__link">
            FAQs
          </a>
        </li>
        <li>
          <a href="" className="footer__link">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="" className="footer__link">
            Install Guide
          </a>
        </li>
        <li>
          <a href="" className="footer__link">
            Contact Us
          </a>
        </li>
        <li>
          <a href="" className="footer__link">
            Press Kit
          </a>
        </li>
      </ul>
      <ul className="flex items-center gap-8 md:justify-self-end social-list">
        <li>
          <a href="">
            <FaFacebook size={30}/>
          </a>
        </li>
        <li>
          <a href="">
            <FaTwitter size={30}/>
          </a>
        </li>
        <li>
          <a href="">
            <AiFillInstagram size={30}/>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
