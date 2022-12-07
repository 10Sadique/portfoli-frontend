import React from 'react';
import html from '../public/assets/skills/html.png';
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className="w-full px-5 py-16 lg:h-screen">
            <div className="max-w-[1240px] mx-auto">
                <p className="py-4 text-xl tracking-widest uppercase text-green-bright">
                    Skills
                </p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid gap-8 py-2 md:grid-cols-2 lg:grid-cols-4">
                    <SkillCard title={'HTML'} img={html} level={90} />
                    <SkillCard title={'HTML'} img={html} level={90} />
                    <SkillCard title={'HTML'} img={html} level={90} />
                    <SkillCard title={'HTML'} img={html} level={90} />
                    <SkillCard title={'HTML'} img={html} level={90} />
                    <SkillCard title={'HTML'} img={html} level={90} />
                    <SkillCard title={'HTML'} img={html} level={90} />
                    <SkillCard title={'HTML'} img={html} level={90} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
