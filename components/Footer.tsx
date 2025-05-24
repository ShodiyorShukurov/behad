import React from 'react';
import logo from '../assets/logo/Logo-footer.svg';
import instagram from '../assets/logo/instagram.svg';
import telegram from '../assets/logo/telegram.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="pb-[30px] pt-[32px] sm:pt-[60px] md:pt-[120px]">
      <div className="container">
        <div className="flex justify-between items-center text-[#000000] text-[16px] sm:text-[18px] leading-[160%] font-normal mb-[60px] sm:mb-[100px] md:mb-[160px]">
          <p>Menu</p>
          <ul className="flex gap-6 items-center">
            <li>
              <a href="">Our Projects</a>
            </li>
            <li>
              <a href="">Our Team</a>
            </li>
          </ul>
        </div>

        <Image src={logo} alt="logo" />

        <div className="flex justify-between items-center mt-[24px] sm:mt-[40px] text-[#595959] font-normal text-[12px] sm:text-[14px]  leading-[140%]">
          <p>© 2025 Behad LLC. All rights reserved</p>

          <ul className="hidden sm:flex gap-6 items-center">
            <li>
              <Link href="#">Instagram</Link>
            </li>
            <li>
              <Link href="#">Telegram</Link>
            </li>
          </ul>

          <ul className="flex sm:hidden gap-1 items-center">
            <li>
              <Link href="#">
                <Image src={instagram} alt="Instagram" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={telegram} alt="Telegram" width={24} height={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
