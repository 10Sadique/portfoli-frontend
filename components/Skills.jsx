import Image from 'next/image';
import React from 'react';
import html from '../public/assets/skills/html.png';
import react from '../public/assets/skills/react.png';
import css from '../public/assets/skills/css.png';
import javascript from '../public/assets/skills/javascript.png';
import github from '../public/assets/skills/github.svg';
import twind from '../public/assets/skills/tailwind.svg';
import ts from '../public/assets/skills/ts.svg';
import nextjs from '../public/assets/skills/nextjs.svg';
import nodejs from '../public/assets/skills/nodejs.svg';
import bs from '../public/assets/skills/bs.svg';
import mongo from '../public/assets/skills/mongo.png';
import express from '../public/assets/skills/express.png';

const Skills = () => {
    return (
        <div className="w-full px-5 py-16 lg:h-[110vh]">
            <div className="max-w-[1240px] mx-auto">
                <p className="py-4 text-xl tracking-widest uppercase text-green-bright">
                    Skills
                </p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid gap-5 py-2 md:gap-7 md:grid-cols-2 lg:grid-cols-4">
                    {/* HTML */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={html}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>HTML</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[90%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* REACT */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={react}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>REACT</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[75%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={javascript}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>JAVASCRIPT</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[80%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={css}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>CSS</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[85%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tailwind */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={twind}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>TAILWIND</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[70%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bootstrap */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image src={bs} width={64} height={64} alt="" />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>BOOTSTRAP</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[70%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Github */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={github}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>GITHUB</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[60%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Next JS */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={nextjs}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>NEXT JS</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[40%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* TypeScript */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image src={ts} width={64} height={64} alt="" />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>TYPESCRIPT</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[50%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Node Js */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={nodejs}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>NODE JS</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[50%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Express */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={express}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>EXPRESS</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[50%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MongoDB */}
                    <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
                        <div className="grid items-center justify-center grid-cols-2 gap-5">
                            <div className="m-auto">
                                <Image
                                    src={mongo}
                                    width={64}
                                    height={64}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-center gap-3 text-green-bright">
                                <h3>MONGODB</h3>
                                <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                                    <div
                                        className={`bg-green-bright h-1.5 rounded-full w-[50%]`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
