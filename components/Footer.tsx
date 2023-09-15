import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="footer__top">
        <div className="footer__logo-container">
          <div className="footer__logo">
            <Image fill src="/logo.svg" alt="" />
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
              <Link href="/">Download Whitepapper</Link>
              <Link href="/">Smart Token</Link>
              <Link href="/">Blockchain Explorer</Link>
              <Link href="/">Crypto API</Link>
              <Link href="/">Interest</Link>
            </div>
        </div>
        <div className="footer__payments">
          <h3>We accept the following payment Systems.</h3>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          <p>Copyright © 2023  All Rights Reserved</p>
        </div>
        <div className="footer__social-icons">
          <div className="relative h-9 w-[300px]">
            <Image fill src="/socials.svg" alt="social-icons"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;