import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="sticky top-0 md:fixed w-full h-20 md:h-16 z-[100] bg-black/70 backdrop-blur-md md:px-8">
            <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
                {/* logo */}
                <div>
                    <p className="px-5 text-3xl font-bold text-green-bright">
                        Jafar
                    </p>
                </div>

                {/* Navbar for large and medium screens */}
                <div className="px-5">
                    <ul className="hidden space-x-10 md:flex">
                        <Link href={`/`}>
                            <li className="transition-all duration-100 hover:border-b ease">
                                Home
                            </li>
                        </Link>
                        <Link href={`/#about`}>
                            <li className="transition-all duration-100 hover:border-b ease">
                                About
                            </li>
                        </Link>
                        <Link href={`/#skills`}>
                            <li className="transition-all duration-100 hover:border-b ease">
                                Skills
                            </li>
                        </Link>
                        <Link href={`/#projects`}>
                            <li className="transition-all duration-100 hover:border-b ease">
                                Projects
                            </li>
                        </Link>
                        <Link href={`/#contact`}>
                            <li className="transition-all duration-100 hover:border-b ease">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

                {/* Nav open button for mobile */}
                <div
                    onClick={handleNav}
                    className="px-5 cursor-pointer md:hidden"
                >
                    <AiOutlineMenu size={20} className="text-green-bright" />
                </div>
            </div>

            {/* Nav menu for mobile */}
            <div
                className={
                    nav
                        ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70 ease-in duration-500'
                        : 'ease-in duration-500'
                }
            >
                <div
                    className={
                        nav
                            ? 'fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] bg-zinc-900 h-screen px-7 py-5 md:px-10 ease-in duration-500'
                            : 'fixed top-0 h-screen left-[-100%] ease-in duration-500 px-7 py-5 sm:w-[60%] md:w-[45%] w-[75%] md:px-10'
                    }
                >
                    {/* nav header */}
                    <div className="flex items-center justify-between w-full">
                        {/* logo */}
                        <div>
                            <p className="text-3xl font-bold text-green-bright">
                                Jafar
                            </p>
                        </div>
                        {/* Nav Close button */}
                        <div
                            onClick={handleNav}
                            className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25"
                        >
                            <AiOutlineClose
                                size={20}
                                className="text-green-bright"
                            />
                        </div>
                    </div>
                    <div className="my-5 border-b border-zinc-500">
                        <p className="mb-2 w-[85%] md:w-[90%]">{`Let's build something Amazing together.`}</p>
                    </div>
                    {/* nav links */}
                    <div className="flex flex-col py-4">
                        <ul className="font-semibold">
                            <Link href={`/`}>
                                <li className="py-4">Home</li>
                            </Link>
                            <Link href={`/#about`}>
                                <li className="py-4">About</li>
                            </Link>
                            <Link href={`/#skills`}>
                                <li className="py-4">Skills</li>
                            </Link>
                            <Link href={`/#projects`}>
                                <li className="py-4">Projects</li>
                            </Link>
                            <Link href={`/#contact`}>
                                <li className="py-4">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-20">
                            <p className="mb-5 uppercase text-green-bright">{`Let's connect`}</p>
                            <div className="flex items-center justify-start gap-5 text-green-bright">
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
            </div>
        </div>
    );
};

export default Navbar;
