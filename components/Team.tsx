'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import team from '../assets/team.png';

const Team = () => {
  const teamMembers = new Array(5).fill({
    name: 'Saidikrom',
    role: 'Program Manager',
  });

  return (
    <section className="pt-[48px] pb-[70px] bg-[#1B1F48]">
      <div className="container">
        <h2 className="text-[48px] leading-[120%] text-center text-[#FFFFFF] font-bold">
          Team
        </h2>
        <p className="text-[18px] leading-[160%] text-center text-[#E1E1E1] mt-2 font-normal">
          Our team is best
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[25px] gap-y-[30px] justify-center items-center">
          {teamMembers.map((member, index) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: false }); // ❗ animate har safar sahifaga kirganda

            const imageControls = useAnimation();
            const rotateControls = useAnimation();
            const textControls = useAnimation();

            useEffect(() => {
              if (inView) {
                const sequence = async () => {
                  await imageControls.start({
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.2 },
                  });

                  await rotateControls.start({
                    rotate: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  });

                  await rotateControls.start({
                    height: 220,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  });

                  await textControls.start({
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  });
                };

                sequence();
              } else {
                // Reset animation when out of view (optional)
                imageControls.set({ opacity: 0, y: 150 });
                rotateControls.set({ rotate: 45, height: 300 });
                textControls.set({ opacity: 0, y: 20 });
              }
            }, [inView]);

            return (
              <motion.div
                ref={ref}
                key={index}
                className="text-[#ffffff] py-[10px] px-[19px] mx-auto"
                initial={{ opacity: 0, y: 150 }}
                animate={imageControls}
              >
                {/* Rotate + height */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ rotate: 45, height: 300 }}
                  animate={rotateControls}
                >
                  <Image
                    className="w-[200px] object-cover"
                    style={{ height: '100%' }}
                    src={team}
                    alt="img"
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={textControls}
                >
                  <h3 className="text-[20px] leading-[120%] mt-2 mb-1">
                    {member.name}
                  </h3>
                  <h4 className="text-[14px] leading-[140%]">{member.role}</h4>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
