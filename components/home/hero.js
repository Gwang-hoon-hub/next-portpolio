import Animation from "./animation";
import Link from "next/link";

export default function Hero(){
    return (
            <>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        안녕하세요! 서버 개발자 이광훈입니다!
                        <br className="hidden lg:inline-block"/>Hello, I'm backend server Enginner
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        개발자로서 열정 보다는 시스템 속에서 꾸준히 성장을 추구합니다.
                        순간의 끓어오르는 열정에 기대에 주어진 업무를 하기 보다는 스스로 설정해놓은 시스템안에서 꾸준하게 본인의 업무를 진행하는 것을 좋아합니다.
                        새로운 업무를 배우고 진행하는데 두려움 보다는 설렘으로 나아갑니다. 그리고 고민보다는 그저 Go For It! 그냥 합니다!
                        스스로가 도전적인 사람이라고 평가할 수는 없지만, 그러기 위해 노력하는 사람이라고는 말할 수 있을것 같습니다.
                        Just Do It! 해야할 일이 있다면 뒤돌아보지 않고 뚜벅뚜벅 나아갑니다!
                    </p>
                    <div className="flex justify-center">
                        <Link href="/projects">
                        <a className="btn-project">
                            Go! Projects!
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