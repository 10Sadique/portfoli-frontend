import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import lapStore from '../public/assets/projects/lapStore.png';
import devQuiz from '../public/assets/projects/devQuiz.png';
import hotelTs from '../public/assets/projects/hotelTs.png';
import portfolio from '../public/assets/projects/portfolio.png';
import soloCarpentry from '../public/assets/projects/soloCarpentry.png';
import t3verse from '../public/assets/projects/t3verse.png';
import tsTravels from '../public/assets/projects/tsTravels.png';
import tureVolunteer from '../public/assets/projects/tureVolunteer.png';

const Projects = () => {
    return (
        <div id="projects" className="w-full px-5 py-16">
            <div className="max-w-[1240px] mx-auto">
                <p className="py-4 text-xl tracking-widest uppercase text-green-bright">
                    Projects
                </p>
                <h2 className="pt-4 pb-5">{`What I've Built`}</h2>
                <div className="grid md:grid-cols-2 gap-7">
                    <ProjectItem
                        title="LapStore"
                        image={lapStore}
                        projectUrl="/lapStore"
                        tech="React JS"
                    />
                    <ProjectItem
                        title="Solo Carpentry"
                        image={soloCarpentry}
                        projectUrl="/soloCarpentry"
                        tech="React JS"
                    />
                    <ProjectItem
                        title="Portfolio"
                        image={portfolio}
                        tech="Next JS"
                        projectUrl="/portfolio"
                    />
                    <ProjectItem
                        title="True Volunteer"
                        image={tureVolunteer}
                        projectUrl="/tureVolunteer"
                        tech="React JS"
                    />
                    <ProjectItem
                        title="T3 Verse"
                        image={t3verse}
                        projectUrl="/t3verse"
                        tech="React JS"
                    />
                    <ProjectItem
                        title="TS Travels"
                        image={tsTravels}
                        projectUrl="/tsTravels"
                        tech="React JS"
                    />
                    <ProjectItem
                        title="DevQuiz"
                        image={devQuiz}
                        projectUrl="/devQuiz"
                        tech="React JS"
                    />
                    <ProjectItem
                        title="Hotel TS"
                        image={hotelTs}
                        projectUrl="/hotelTs"
                        tech="React JS"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
