'use client';

import Image from 'next/image';
import logo from '../assets/logo/behad.svg';
import humburger from '@/assets/logo/hamburger.svg';
import close from '@/assets/logo/close.svg';
import instagram from '@/assets/logo/instagram.svg';
import telegram from '@/assets/logo/telegram.svg';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-[31px] w-full z-50">
      <div className="container">
        <div className="flex justify-between items-center">
       <a
  style={{
    boxShadow: "0px 8px 24px 0px #00000029",
    backgroundColor: "transparent"
  }}
  className="flex items-center gap-1 text-[32px] dillian-font leading-none"
  href="/"
>
  <Image src={logo} alt="Behad" width={32} height={32} />
  Behad
</a>


          <nav
            style={{
              boxShadow: '0px 8px 24px 0px #0000000A',
            }}
            className="hidden md:flex bg-[#F2F9FD0A] backdrop-blur-[323px] px-[32px] h-[52px] rounded-[32px]  gap-6 items-center text-[18px] font-medium leading-[100%] tracking-0"
          >
            <a href="#Services">Services</a>
            <a href="#Services">Projects</a>
            <a href="#Services">Team</a>
            <a href="#Services">Contact</a>
          </nav>

          <button
            style={{
              boxShadow: '0px 8px 24px 0px #62C8F529',
            }}
            className="hidden md:block h-[52px] px-[32px] bg-[#4EB4E1] rounded-[32px] font-semibold text-[16px] leading-[100%] text-[#ffffff]"
          >
            Work with
          </button>

          <button
            style={{
              boxShadow: '0px 8px 24px 0px #62C8F529',
            }}
            className="bg-[#4EB4E1] px-[10px] py-[6px] rounded-[32px] md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Image src={humburger} alt="Hamburger" width={20} height={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F2F9FD7A] fixed backdrop-blur-[32px] w-full top-0 h-full z-50 container pt-[32px]"
          >
            <div className="flex justify-between items-center">
              <Image
                style={{
                  boxShadow: '0px 8px 24px 0px #00000029',
                }}
                src={logo}
                alt="Behad"
                width={131}
                height={32}
              />
              <button
                style={{
                  boxShadow: '0px 8px 24px 0px #62C8F529',
                }}
                className="bg-[#4EB4E1] px-[10px] py-[6px] rounded-[32px] md:hidden"
                onClick={() => setIsOpen(false)}
              >
                <Image src={close} alt="close" width={20} height={20} />
              </button>
            </div>
            <ul className="flex flex-col items-center gap-[48px] mt-[64px] text-[24px] text-[#000000] font-medium leading-[120%]">
              <li>Services</li>
              <li>Projects</li>
              <li>Team</li>
              <li>Contact</li>
            </ul>

            <div className="flex justify-center items-center gap-4 mt-[64px]">
              <a href="">
                <Image src={instagram} alt="Instagram" width={32} height={32} />
              </a>
              <a href="">
                <Image src={telegram} alt="Telegram" width={32} height={32} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
