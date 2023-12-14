import { useState } from "react";
import { Link } from "react-router-dom";
import Slide from "./useSlide";
import OnboardMessage from "./OnboardMessage";

const Onboarding = () => {
    const [current, setCurrent] = useState(0);
    const { contents } = OnboardMessage();
    const [content, setContent] = useState(contents) 
    
    const onNext = () => {
        if (current < content.length - 1) {
            setCurrent((prev) => prev + 1)
        }
    }

    return (
        <section className="flex text-center lg:items-center lg:justify-center font-monserrat lg:bg-blue-300 h-screen  lg:backdrop-blur-[30px] lg:bg-[rgba(255, 255, 255, 0.2)]">
                {content.map((item, index) => (
                    current === index && (
                        <div>
                        <Slide key={index} current={index === current} item={item} onNext={onNext} />
                        </div>
                    )
                ))}
        </section>
     );
}


export default Onboarding;