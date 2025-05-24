'use client';

import React from 'react';
import TeamCard from '@/components/TeamCard'; // 👈 alohida card komponent
import team from '../assets/team.png';

const Team = () => {
  const teamMembers = new Array(5).fill({
    name: 'Saidikrom',
    role: 'Program Manager',
    image: team,
  });

  return (
    <section className="pt-[48px] pb-[48px] sm:pb-[70px] bg-[#1B1F48]" id='team'>
      <div className="container">
        <h2 className="text-[24px] sm:text-[48px] text-center text-white font-bold leading-[120%]">Team</h2>
        <p className="text-[16px] sm:text-[18px] text-center text-[#E1E1E1] mt-1 sm:mt-2">Our team is best</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-[25px] gap-y-[30px] justify-center items-center">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} index={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
