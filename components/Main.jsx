import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] h-full w-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="text-sm tracking-widest text-gray-400 uppercase">
                        {`LET'S BUILD SOMTHING AMAZING TOGETHER`}
                    </p>
                    <h1 className="py-4">
                        Hello, {`I'm `}
                        <span className="text-green-bright">Jafar</span>
                    </h1>
                    <h1 className="py-2">A Front-End Developer</h1>
                    <p className="py-4 m-auto max-w-[80%] md:max-w-[70%] text-gray-200 tracking-wide">
                        Hello, my name is{' '}
                        <span className="text-green-bright">
                            Md Jafar Sadique
                        </span>
                        . I am a front-end web developer who specializes in
                        creating high-quality web applications. I am currently
                        concentrating on developing responsive front-end web
                        applications while studying back-end technologies.
                    </p>
                    <button className="mb-6 duration-200 ease-in bg-transparent border shadow-none border-green-bright text-green-bright hover:bg-green-bright hover:text-white">
                        Resume
                    </button>
                    {/* Social Icons */}
                    <div className="flex items-center justify-center gap-5 text-green-bright">
                        <div className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25">
                            <FaLinkedinIn />
                        </div>
                        <div className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25">
                            <FaGithub />
                        </div>
                        <div className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25">
                            <AiOutlineMail />
                        </div>
                        <div className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
