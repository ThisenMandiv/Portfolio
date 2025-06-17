import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex items-end grid-default-color grid-1 overflow-hidden">
          {/* Updated image container */}
          <div className="absolute w-32 h-32 md:w-100 md:h-100 rounded-full overflow-hidden -right-[1rem] -top-[1rem] md:left-3 md:top-10 Z">
            <img
              src="assets/thisen.png"
              alt="Thisen Mandiv"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="z-10">
            <p className="headtext">Hi, I'm Thisen Mandiv</p>
            <p className="subtext">
              I'm a Software Engineering undergraduate with a strong passion for building impactful web and software solutions. I’ve developed hands-on experience in both frontend and backend technologies through personal and academic projects.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t via-blue-500/50
" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-white-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="MERN"
              containerRef={grid2Container} 
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Agile"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Git & GitHub"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="React"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Node.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react-seeklogo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/mongodb-seeklogo.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/github-circle.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in Sri Lanka (GMT+5:30), open to internships and collaborative opportunities globally.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        
      </div>
    </section>
  );
};

export default About;
