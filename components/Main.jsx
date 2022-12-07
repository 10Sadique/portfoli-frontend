import React from 'react';

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
                        <br />
                        <span className="text-green-bright">
                            Md Jafar Sadique
                        </span>
                    </h1>
                    <h1 className="py-2">A Front-End Developer</h1>
                </div>
            </div>
        </div>
    );
};

export default Main;
