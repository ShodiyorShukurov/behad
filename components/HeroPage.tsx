import React from 'react';
import femmy from '@/assets/logo/femmy.svg';
import med from '@/assets/logo/med.svg';
import calm from '@/assets/logo/calm.svg';
import granit from '@/assets/logo/granit.svg';
import down from '@/assets/logo/down.svg';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <section className="flex justify-center items-center h-screen w-full ">
      <div className="container relative">
        <h1 className="sm:text-center text-[48px] sm:text-[72px] text-[#000000] font-semibold leading-[120%] w-full max-w-[970px] mx-auto">
          <span className="text-[#4EB4E1]">Behad</span>-projects that brighten
          your life!
        </h1>
        <div className="flex flex-col sm:flex-row justify-center mt-[48px] gap-4 sm:gap-6">
          <button className="h-[52px] px-[32px] bg-[#fff] rounded-[32px] font-semibold text-[16px] leading-[100%] text-[#4EB4E1] border border-[#4EB4E1]">
            About Us
          </button>
          <button className="h-[52px] px-[32px] bg-[#4EB4E1] rounded-[32px] font-semibold text-[16px] leading-[100%] text-[#ffffff]">
            Projects
          </button>
        </div>

        <Image
          style={{ boxShadow: '0px 12px 24px 0px #EC608F3D' }}
          className="hidden md:block absolute top-[-100px] left-[300px] w-[64px] h-[64px] moveArrow1 rounded-[20px] overflow-hidden"
          src={femmy}
          alt="Femmy"
        />
        <Image
          style={{
            boxShadow: '0px 12px 24px 0px #0000003D',
          }}
          className="hidden md:block absolute top-[-100px] right-[300px] w-[64px] h-[64px] moveArrow rounded-[16px]"
          src={calm}
          alt="Calm"
        />

        <Image
          style={{
            boxShadow: '0px 12px 24px 0px #3044993D',
          }}
          className="hidden md:block absolute bottom-[20px] left-[170px] w-[64px] h-[64px] moveArrow1 rounded-[20px]"
          src={med}
          alt="Med Agent"
        />
        <Image
          style={{
            boxShadow: '0px 12px 24px 0px #C795573D',
          }}
          className="hidden md:block absolute bottom-[20px] right-[170px] w-[64px] h-[64px] moveArrow rounded-[20px]"
          src={granit}
          alt="granit"
        />
      </div>

      <Image className="block sm:hidden absolute bottom-20 moveArrow1 cursor-pointer" src={down} alt="downButton" />
    </section>
  );
};

export default HeroPage;
