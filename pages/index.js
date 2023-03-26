import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import SEO from "../components/SEO";
import Contact from "../components/ContactUs.jsx";

export default function Home() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Feedbacks />
      <Projects />
      <GithubProfileCard />{" "}
    </div>
  );
}
