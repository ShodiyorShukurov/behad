'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Member {
  image: string;
  name: string;
  role: string;
}

const TeamCard = ({ member, index }: { member: Member; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

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
      // Reset when out of view
      imageControls.set({ opacity: 0, y: 150 });
      rotateControls.set({ rotate: 45, height: 300 });
      textControls.set({ opacity: 0, y: 20 });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="text-white py-[10px] px-[19px] mx-auto"
      initial={{ opacity: 0, y: 150 }}
      animate={imageControls}
    >
      <motion.div
        className="overflow-hidden"
        initial={{ rotate: 45, height: 300 }}
        animate={rotateControls}
      >
        <Image
          className="w-[200px] object-cover"
          style={{ height: '100%' }}
          src={member.image}
          alt="Team Member"
        />
      </motion.div>

      <motion.div
        className="text-center sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={textControls}
      >
        <h3 className="text-[20px] mt-2 mb-1">{member.name}</h3>
        <h4 className="text-[14px]">{member.role}</h4>
      </motion.div>
    </motion.div>
  );
};

export default TeamCard;
