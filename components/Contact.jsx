import Image from 'next/image';
import contact from '../public/assets/contact.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_cv7r6x1',
                'template_3e7hlik',
                form.current,
                'oZhPBj0etJO7B_ag-'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast('Email Sent...✅', {
                        style: {
                            borderRadius: '0px',
                            background: '#15d155',
                            color: '#fff',
                        },
                    });
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact" className="w-full px-5 py-16 lg:h-auto">
            <div className="max-w-[1240px] mx-auto">
                <p className="py-4 text-xl tracking-widest uppercase text-green-bright">
                    Contact
                </p>
                <h2 className="pt-4 pb-5 ">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-7">
                    {/* Left side */}
                    <div className="w-full h-full col-span-3 p-5 lg:col-span-2 rounded-xl bg-green-bright/20">
                        <div className="h-full lg:p-2">
                            <div>
                                <Image
                                    className="mb-2 rounded-xl"
                                    src={contact}
                                    alt=""
                                    loading="lazy"
                                    placeholder="blur"
                                />
                            </div>
                            <div>
                                <h2 className="py-2">Md Jafar Sadique</h2>
                                <p className="">Front-End Developer</p>
                                <p className="py-4">{`I am available for full-time positions. Contact Me and let's talk.`}</p>
                            </div>
                            <div>
                                <p className="pt-8 uppercase">
                                    Contact With Me
                                </p>
                                <div className="flex items-center justify-start gap-5 pt-4">
                                    <Link
                                        href={`https://www.linkedin.com/in/md-jafar-sadique/`}
                                        target="_blank"
                                        className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25"
                                    >
                                        <FaLinkedinIn />
                                    </Link>
                                    <Link
                                        href={`https://github.com/10Sadique`}
                                        target="_blank"
                                        className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25"
                                    >
                                        <FaGithub />
                                    </Link>
                                    <Link
                                        href={`mailto:jafarsjahan@gmail.com`}
                                        className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25"
                                    >
                                        <AiOutlineMail />
                                    </Link>
                                    {/* <div className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25">
                                        <BsFillPersonLinesFill />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="w-full h-full col-span-3 p-5 rounded-xl bg-green-bright/20">
                        <div className="h-full lg:p-2">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                                    {/* name */}
                                    <div className="flex flex-col">
                                        <label className="py-2 text-sm uppercase">
                                            Name
                                        </label>
                                        <input
                                            className="flex p-3 bg-black border-2 rounded-lg border-green-bright focus:outline-green-bright"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    {/* phone */}
                                    <div className="flex flex-col">
                                        <label className="py-2 text-sm uppercase">
                                            Phone Number
                                        </label>
                                        <input
                                            className="flex p-3 bg-black border-2 rounded-lg border-green-bright focus:outline-green-bright"
                                            type="text"
                                            name="phone"
                                        />
                                    </div>
                                </div>
                                {/* email */}
                                <div className="flex flex-col py-2">
                                    <label className="py-2 text-sm uppercase">
                                        Email
                                    </label>
                                    <input
                                        className="flex p-3 bg-black border-2 rounded-lg border-green-bright focus:outline-green-bright"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                {/* subject */}
                                <div className="flex flex-col py-2">
                                    <label className="py-2 text-sm uppercase">
                                        Subject
                                    </label>
                                    <input
                                        className="flex p-3 bg-black border-2 rounded-lg border-green-bright focus:outline-green-bright"
                                        type="text"
                                        name="subject"
                                    />
                                </div>
                                {/* message */}
                                <div className="flex flex-col py-2">
                                    <label className="py-2 text-sm uppercase">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        className="flex p-3 bg-black border-2 rounded-lg border-green-bright focus:outline-green-bright"
                                    ></textarea>
                                </div>
                                {/* send message button */}
                                <button className="w-full py-3 mt-4 uppercase">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <Link href={`/`}>
                        <div className="p-3 transition-all duration-100 cursor-pointer bg-green-bright/20 rounded-xl hover:bg-green-bright/25 text-green-bright">
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Contact;
