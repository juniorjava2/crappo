import Image from "next/image";
import Link from "next/link";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover } from 'react-icons/fa';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__logo-container">
          <div className="footer__logo">
            <Image fill src="/logo.svg" alt="Logo" />
          </div>
          <h3>CRAPPO</h3>
        </div>
        <div className="footer__links">
          <h3>Quick Links</h3>
          <div className="footer__options">
            <Link href="/">Home</Link>
            <Link href="/">Products</Link>
            <Link href="/">About</Link>
            <Link href="/">Features</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className="footer__resources mx-10">
          <h3>Resources</h3>
          <div className="footer__options">
            <Link href="/">Download Whitepaper</Link>
            <Link href="/">Smart Token</Link>
            <Link href="/">Blockchain Explorer</Link>
            <Link href="/">Crypto API</Link>
            <Link href="/">Interest</Link>
          </div>
        </div>
        <div className="footer__payments">
          <h3>We accept the following payment systems:</h3>
          <div className="flex gap-4 mt-2">
            <FaCcVisa size={30} />
            <FaCcMastercard size={30} />
            <FaCcPaypal size={30} />
            <FaCcDiscover size={30} />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          <p>Copyright © 2023 All Rights Reserved</p>
        </div>
        <div className="footer__social-icons flex gap-4">
          {/* Social Media Icons */}
          <AiFillFacebook size={30} />
          <AiFillTwitterCircle size={30} />
          <AiFillInstagram size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;