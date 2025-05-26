'use client';

import React from 'react';
import Image from 'next/image';
import femmy from '../assets/logo/femmy.svg';
import femmy_img from '../assets/femmy_img.png';
import medagent from '../assets/logo/med.svg';
import img from '@/assets/photo.jpg';
import { use, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { ReactLenis, useLenis } from 'lenis/react';

const Projects = () => {
  // return (
  //   <div className="relative">
  //     <div
  //       className={`sticky top-[32px] h-screen flex flex-col items-center justify-center bg-[#FFE3E8] rounded-t-[80px]`}
  //     >
  // <div className="flex justify-center gap-[64px]">
  //   <div className="flex flex-col justify-between">
  //     <div>
  //       <h2 className="flex items-center text-[48px] font-bold gap-2 text-[#000000] mb-[16px]">
  //         <Image className="w-[48px] h-[48px]" src={femmy} alt="" /> Femmy
  //       </h2>
  //       <div className="text-[#595959] text-[18px] leading-[160%] font-normal">
  //         <p>App for monitoring pregnancy and ovulation for women</p>
  //         <p>First idea investment of $25,000</p>
  //         <p>Project estimate: $600,000</p>
  //         <p>Startup Garage, AloqaVentures, Angels Club</p>
  //       </div>
  //     </div>

  //     <ul className="flex items-center justify-between">
  //       <li>
  //         <h4 className="text-[14px] leading-[140%] text-[#595959] font-normal">
  //           Live App
  //         </h4>
  //         <h3 className="text-[18px] leading-[140%] text-[#000000] font-semibold">
  //           Femmy app
  //         </h3>
  //       </li>
  //       <li>
  //         <h4 className="text-[14px] leading-[140%] text-[#595959] font-normal">
  //           Industry
  //         </h4>
  //         <h3 className="text-[18px] leading-[140%] text-[#000000] font-semibold">
  //           Healthcare
  //         </h3>
  //       </li>
  //       <li>
  //         <h4 className="text-[14px] leading-[140%] text-[#595959] font-normal">
  //           Published
  //         </h4>
  //         <h3 className="text-[18px] leading-[140%] text-[#000000] font-semibold">
  //           2024
  //         </h3>
  //       </li>
  //     </ul>
  //   </div>
  //   <Image className="w-[350px]" src={femmy_img} alt="" />
  // </div>
  //     </div>

  //     <div className="sticky top-[64px] h-screen flex flex-col items-center justify-center bg-[#E1EEFF] text-white rounded-t-[80px]">
  //       <div className="flex justify-center gap-[64px]">
  //         <div className="flex flex-col justify-between">
  //           <div>
  //             <h2 className="flex items-center text-[48px] font-bold gap-2 text-[#000000] mb-[16px]">
  //               <Image className="w-[48px] h-[48px]" src={medagent} alt="" />{' '}
  //               MedAgent
  //             </h2>
  //             <div className="text-[#595959] text-[18px] leading-[160%] font-normal w-full max-w-[460px]">
  //               <p>
  //                 A cross-platform solution for managing and analyzing the work
  //                 of medical representatives.
  //               </p>
  //             </div>
  //           </div>

  //           <ul className="flex items-center justify-between">
  //             <li>
  //               <h4 className="text-[14px] leading-[140%] text-[#595959] font-normal">
  //                 Live App
  //               </h4>
  //               <h3 className="text-[18px] leading-[140%] text-[#000000] font-semibold">
  //                 MedAgent app
  //               </h3>
  //             </li>
  //             <li>
  //               <h4 className="text-[14px] leading-[140%] text-[#595959] font-normal">
  //                 Industry
  //               </h4>
  //               <h3 className="text-[18px] leading-[140%] text-[#000000] font-semibold">
  //                 Healthcare
  //               </h3>
  //             </li>
  //             <li>
  //               <h4 className="text-[14px] leading-[140%] text-[#595959] font-normal">
  //                 Published
  //               </h4>
  //               <h3 className="text-[18px] leading-[140%] text-[#000000] font-semibold">
  //                 2024
  //               </h3>
  //             </li>
  //           </ul>
  //         </div>
  //         <Image className="w-[350px]" src={femmy_img} alt="" />
  //       </div>
  //     </div>
  //   </div>
  // );

  const lenis = useLenis(({ scroll }) => {});
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cards = document.querySelectorAll('.card');
      const images = document.querySelectorAll('.card img');
      const totalCards = cards.length;

      gsap.set(cards[0], { y: '0%', scale: 1, rotate: 0 });
      gsap.set(images[0], { scale: 1 });

      for (let i = 1; i < totalCards; i++) {
        gsap.set(cards[i], { y: '100%', scale: 1, rotate: 0 });
        gsap.set(images[i], { scale: 1 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.sticky-cards',
          start: 'top top',
          end: `+=${window.innerHeight * (totalCards - 1)}`,
          pin: true,
          scrub: 0.5,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cards[i];
        const currentImage = images[i];
        const nextCard = cards[i + 1];
        const position = i;

        scrollTimeline.to(
          currentCard,
          {
            scale: 0.5,
            rotation: 0,
            duration: 1,
            ease: 'none',
          },
          position
        );

        scrollTimeline.to(
          currentImage,
          {
            scale: 1.5,
            duration: 1,
            ease: 'none',
          },
          position
        );

        scrollTimeline.to(
          nextCard,
          {
            y: '0%',
            scale: 1,
            duration: 1,
            ease: 'none',
          },
          position
        );
      }
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="container" ref={container}>
        <section className="sticky-cards projects-section">
          <div className="cards-container">
            <div className="card bg-[#E1EEFF]">
              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 sm:gap-[64px] px-10 sm:p-0">
                <div className="flex flex-col justify-between h-full flex-1">
                  <div>
                    <h2 className="flex items-center text-[24px] sm:text-[48px] font-bold gap-2 text-[#000000] mb-2 sm:mb-[16px]">
                      <Image
                        className="w-[32px] sm:w-[48px] h-[32px] sm:h-[48px]"
                        src={medagent}
                        alt="medagent"
                      />
                      MedAgent
                    </h2>
                    <div className="text-[#595959] text-[16px] sm:text-[18px] leading-[160%] font-normal w-full max-w-[460px]">
                      <p>
                        A cross-platform solution for managing and analyzing the
                        work of medical representatives.
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-wrap justify-between mt-6 lg:mt-0 gap-4 sm:gap-0">
                    <li>
                      <h4 className="text-[14px] leading-[140%] text-[#595959] font-normal">
                        Live App
                      </h4>
                      <h3 className="text-[16px] sm:text-[18px] leading-[140%] text-[#000000] font-semibold">
                        MedAgent app
                      </h3>
                    </li>
                    <li>
                      <h4 className="text-[14px] leading-[140%] text-[#595959] font-normal">
                        Industry
                      </h4>
                      <h3 className="text-[18px] leading-[140%] text-[#000000] font-semibold">
                        Healthcare
                      </h3>
                    </li>
                    <li>
                      <h4 className="text-[14px] leading-[140%] text-[#595959] font-normal">
                        Published
                      </h4>
                      <h3 className="text-[18px] leading-[140%] text-[#000000] font-semibold">
                        2024
                      </h3>
                    </li>
                  </ul>
                </div>

                <div className="h-full flex justify-center items-center">
                  <Image
                    className="w-[350px] h-full object-cover"
                    src={femmy_img}
                    alt="medagent"
                  />
                </div>
              </div>
            </div>

            <div className="card bg-[#FFE3E8]">
              <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 sm:gap-[64px] px-10 sm:p-0">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="flex items-center text-[24px] sm:text-[48px] font-bold gap-2 text-[#000000] mb-2 sm:mb-[16px]">
                      <Image
                        className="w-[32px] sm:w-[48px] h-[32px] sm:h-[48px]"
                        src={femmy}
                        alt="femmy project logo"
                      />{' '}
                      Femmy
                    </h2>
                    <div className="text-[#595959] text-[12px] sm:text-[18px] leading-[160%] font-normal">
                      <p>
                        App for monitoring pregnancy and ovulation for women
                      </p>
                      <p>First idea investment of $25,000</p>
                      <p>Project estimate: $600,000</p>
                      <p>Startup Garage, AloqaVentures, Angels Club</p>
                    </div>
                  </div>

                  <ul className="flex items-center justify-between flex-wrap mt-6 lg:mt-0 gap-4 sm:gap-0">
                    <li>
                      <h4 className="text-[12px] sm:text-[14px] leading-[140%] text-[#595959] font-normal">
                        Live App
                      </h4>
                      <h3 className="text-[16px] sm:text-[18px] leading-[140%] text-[#000000] font-semibold">
                        Femmy app
                      </h3>
                    </li>
                    <li>
                      <h4 className="text-[12px] sm:text-[14px] leading-[140%] text-[#595959] font-normal">
                        Industry
                      </h4>
                      <h3 className="text-[16px] sm:text-[18px] leading-[140%] text-[#000000] font-semibold">
                        Healthcare
                      </h3>
                    </li>
                    <li>
                      <h4 className="text-[12px] sm:text-[14px] leading-[140%] text-[#595959] font-normal">
                        Published
                      </h4>
                      <h3 className="text-[16px] sm:text-[18px] leading-[140%] text-[#000000] font-semibold">
                        2024
                      </h3>
                    </li>
                  </ul>
                </div>
                <Image
                  className="w-[350px] h-[300px] lg:h-auto object-contain lg:object-cover"
                  src={femmy_img}
                  alt="femmy project image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Projects;
