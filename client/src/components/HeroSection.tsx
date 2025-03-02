import {
  faCalendarCheck,
  faClock,
  faNoteSticky,
} from "@fortawesome/free-regular-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center h-[80vh] px-6">
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 -z-10
		bg-[radial-gradient(#e5e7eb_2px,transparent_1px)] [background-size:16px_16px] 
		[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
		"
      ></div>
      {/* Brightness Wave Animation Overlay */}
      {/*<div
        className="absolute w-full h-1/2 
		bg-[radial-gradient(#000000_2px,transparent_1px)] [background-size:16px_16px] 
		[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
          animate-wave"
      ></div>*/}
      {/* Floating Icons */}
      <FontAwesomeIcon
        icon={faCalendarCheck}
        className="absolute text-blue-600 text-2xl top-28 left-[350px] -rotate-12"
      />
      <FontAwesomeIcon
        icon={faClock}
        className="absolute text-blue-600 text-2xl top-28 right-[350px] rotate-12"
      />
      <FontAwesomeIcon
        icon={faListCheck}
        className="absolute text-blue-600 text-2xl bottom-36 left-[420px] -rotate-12"
      />
      <FontAwesomeIcon
        icon={faNoteSticky}
        className="absolute text-blue-600 text-2xl bottom-36 right-[420px] rotate-12"
      />
      <div>
        <h1 className="text-5xl font-extrabold max-w-3xl">
          Procrastinators, Meet Your Worst Nightmare!
        </h1>
        <h2 className="mt-4 text-xl max-w-2xl opacity-90">
          A to-do app so good, you might actually get things done. (Scary,
          right?)
        </h2>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
