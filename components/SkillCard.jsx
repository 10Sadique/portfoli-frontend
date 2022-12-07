import Image from 'next/image';

function SkillCard({ title, img, level }) {
    return (
        <div className="p-8 duration-300 ease-in backdrop-blur-md rounded-xl hover:scale-105 bg-green-bright/30">
            <div className="grid items-center justify-center grid-cols-2 gap-5">
                <div className="m-auto">
                    <Image src={img} width={64} height={64} alt="" />
                </div>
                <div className="flex flex-col justify-center gap-3 text-green-bright">
                    <h3>{title}</h3>
                    <div className="w-full bg-black/50 rounded-full h-1.5 mb-4">
                        <div
                            className={`bg-green-bright h-1.5 rounded-full w-[${level}%]`}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard;
