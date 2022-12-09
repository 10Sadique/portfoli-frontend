import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ title, image, projectUrl, tech }) => {
    return (
        <div className="relative flex items-center justify-center w-full h-auto md:p-3 bg-green-bright/20 rounded-xl group hover:bg-gradient-to-br from-green-bright to-green-600/70">
            <Image
                className="w-full rounded-xl group-hover:opacity-10 "
                src={image}
                width={1000}
                alt=""
                loading="lazy"
                placeholder="blur"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-xl tracking-wider text-center md:text-3xl">
                    {title}
                </h3>
                <p className="pt-2 pb-4 text-center">{tech}</p>
                <Link href={`${projectUrl}`}>
                    <p className="px-5 py-2 text-lg font-bold text-center bg-black rounded-lg cursor-pointer md:py-3">
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;
