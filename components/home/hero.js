import Animation from "./animation";
import Link from "next/link";

export default function Hero(){
    return (
            <>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        안녕하세요! 서버 개발자 이광훈입니다!
                        <br className="hidden lg:inline-block"/>readymade gluten
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/projects">
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            프로젝트 보러가기
                        </a>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation/>
                </div>
            </>
    );
}